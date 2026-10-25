#!/usr/bin/env python3
"""Walk the LibreTexts-hosted Biochemistry Free For All (Ahern/Rajagopal/Tan)
book via next-page footers, extract each page's text, save to tmp-books/bffa-full.txt.
Official open-licensed book (CC BY-NC-SA); polite fetch with backoff on 429."""
import re, time, html, subprocess, sys

BASE = "https://bio.libretexts.org"
BOOK = ("https://bio.libretexts.org/Bookshelves/Biochemistry/Book%3A_"
        "Biochemistry_Free_For_All_(Ahern_Rajagopal_and_Tan)")
START_PAGES = [
    "01%3A_In_The_Beginning",
    "02%3A_Structure_and_Function",
    "03%3A_Membranes",
    "04%3A_Catalysis",
    "05%3A_Energy",
    "06%3A_Metabolism",
    "07%3A_Information_Processing",
    "08%3A_Basic_Techniques",
    "09%3A_Chapter_10",
    "10%3A_Chapter_11",
    "11%3A_Point_by_Point",
]

def fetch(url, tries=4):
    for a in range(tries):
        r = subprocess.run(
            ["curl", "-sL", "--max-time", "60", "-A",
             "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
             url], capture_output=True, text=True)
        body = r.stdout
        if len(body) > 5000:
            return body
        time.sleep(20 * (a + 1))
    return ""

def strip_html(page):
    page = re.sub(r"<script[\s\S]*?</script>", " ", page, flags=re.I)
    page = re.sub(r"<style[\s\S]*?</style>", " ", page, flags=re.I)
    m = re.search(r'<div class="mt-content-container"[^>]*>([\s\S]*?)<div class="mt-content-footer', page)
    if not m:
        m = re.search(r'<div class="mt-content-container"[^>]*>([\s\S]*)', page)
    body = m.group(1) if m else page
    # keep alt text of math images
    body = re.sub(r'<img[^>]*alt="([^"]*)"[^>]*>', r" \1 ", body)
    body = re.sub(r"<br\s*/?>", "\n", body, flags=re.I)
    body = re.sub(r"</(p|div|h1|h2|h3|h4|li|tr|figcaption)>", "\n", body, flags=re.I)
    body = re.sub(r"<li[^>]*>", "\n- ", body, flags=re.I)
    body = re.sub(r"<h1[^>]*>", "\n## ", body, flags=re.I)
    body = re.sub(r"<h2[^>]*>", "\n### ", body, flags=re.I)
    body = re.sub(r"<h3[^>]*>", "\n#### ", body, flags=re.I)
    body = re.sub(r"<[^>]+>", " ", body)
    body = html.unescape(body)
    body = re.sub(r"[ \t]+", " ", body)
    body = re.sub(r"\n\s*\n+", "\n\n", body)
    return body.strip()

def page_title(page):
    m = re.search(r"<title>([^<]+)</title>", page)
    if m:
        t = html.unescape(m.group(1))
        return t.split(" - ")[0].strip()
    return "?title?"

def walk(start_slug, out, seen):
    url = f"{BOOK}/{start_slug}"
    hops = 0
    while url and hops < 40:
        key = url.split("Free_For_All_(Ahern_Rajagopal_and_Tan)")[-1]
        if key in seen:
            break
        seen.add(key)
        page = fetch(url)
        if not page:
            out.write(f"\n\n===== FETCH FAILED: {url}\n")
            break
        out.write(f"\n\n===== PAGE: {page_title(page)}\nURL: {url}\n")
        out.write(strip_html(page))
        nm = re.search(r'class="mt-icon-next-article"[^>]*href="([^"]+)"', page)
        nxt = html.unescape(nm.group(1)) if nm else None
        if nxt and ("Free_For_All_(Ahern_Rajagopal_and_Tan)/" not in nxt
                    or nxt.rstrip("/").endswith("Free_For_All_(Ahern_Rajagopal_and_Tan)")):
            break
        url = nxt
        hops += 1
        time.sleep(6)

def main():
    seen = set()
    with open("tmp-books/bffa-full.txt", "w") as out:
        for slug in START_PAGES:
            print(f"--- chapter {slug}", flush=True)
            walk(slug, out, seen)
            time.sleep(6)
    print("done")

if __name__ == "__main__":
    main()
