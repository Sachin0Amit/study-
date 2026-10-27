#!/usr/bin/env python3
"""Walk all chapter pages of Online Open Genetics (Nickle & Barrette-Ng) on
LibreTexts (CC BY-SA 3.0) and extract readable text into oog-book.txt."""
import re, subprocess, html, sys, time

BASE = "https://bio.libretexts.org/Bookshelves/Genetics/Online_Open_Genetics_(Nickle_and_Barrette-Ng)"
CHAPTERS = [
    "01%3A_Overview_DNA_and_Genes",
    "02%3A_Chromosomes_Mitosis_and_Meiosis",
    "03%3A_Genetic_Analysis_of_Single_Genes",
    "04%3A_Mutation_and_Variation",
    "05%3A_Pedigrees_and_Populations",
    "06%3A_Genetic_Analysis_of_Multiple_Genes",
    "07%3A_Linkage_and_Mapping",
    "08%3A_Techniques_of_Molecular_Genetics",
    "09%3A_Changes_in_Chromosome_Number_and_Structure",
    "10%3A_Molecular_Markers_and_Quantitative_Traits",
    "11%3A_Genomics_and_Systems_Biology",
    "12%3A_Regulation_of_Gene_Expression",
    "13%3A_Cancer_Genetics",
]
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36"

def fetch(url, out, tries=3):
    for i in range(tries):
        r = subprocess.run(["curl", "-sL", "-m", "90", "-A", UA, url, "-o", out],
                           capture_output=True)
        if r.returncode == 0:
            import os
            if os.path.exists(out) and os.path.getsize(out) > 3000:
                return True
        time.sleep(2 + i)
    return False

def links_from(path):
    txt = open(path, encoding="utf-8", errors="ignore").read()
    out = []
    for m in re.finditer(r'href="(https://bio\.libretexts\.org/Bookshelves/Genetics/Online_Open_Genetics_[^"]+)"[^>]*>', txt):
        u = m.group(1)
        if u not in out:
            out.append(u)
    return out

def to_text(path):
    txt = open(path, encoding="utf-8", errors="ignore").read()
    # cut navigation boilerplate: keep from <main or the page-body marker to footer
    m = re.search(r'<div class="page-body-wrap".*?>(.*?)<footer', txt, re.S)
    if not m:
        m = re.search(r'<article.*?>(.*?)</article>', txt, re.S)
    body = m.group(1) if m else txt
    body = re.sub(r'<script.*?</script>', ' ', body, flags=re.S)
    body = re.sub(r'<style.*?</style>', ' ', body, flags=re.S)
    body = re.sub(r'<(math|svg).*?</\1>', ' [FORMULA] ', body, flags=re.S)
    body = re.sub(r'<h([1-6])[^>]*>', lambda m: '\n\n## H' + m.group(1) + ' ', body)
    body = re.sub(r'</h[1-6]>', '\n', body)
    body = re.sub(r'<(p|li|tr|div)[^>]*>', '\n', body)
    body = re.sub(r'<[^>]+>', ' ', body)
    body = html.unescape(body)
    body = re.sub(r'[ \t]+', ' ', body)
    body = re.sub(r'\n\s*\n+', '\n\n', body)
    return body.strip()

def main():
    logfile = open("oog-book.txt", "w", encoding="utf-8")
    seen = set()
    for ch in CHAPTERS:
        churl = f"{BASE}/{ch}"
        idxfile = f"idx_{ch[:2]}.html"
        if not fetch(churl, idxfile):
            print(f"FAIL index {ch}", file=sys.stderr)
            continue
        subs = links_from(idxfile)
        print(f"{ch[:2]}: {len(subs)} subpages", file=sys.stderr)
        for u in subs:
            if u in seen:
                continue
            seen.add(u)
            fname = "sub_" + re.sub(r'[^A-Za-z0-9]', '_', u[-70:]) + ".html"
            if not fetch(u, fname):
                print(f"  FAIL {u}", file=sys.stderr)
                continue
            body = to_text(fname)
            if len(body) < 800:
                print(f"  thin ({len(body)}) {u}", file=sys.stderr)
            logfile.write(f"\n\n########## PAGE: {u}\n\n")
            logfile.write(body)
            logfile.flush()
            time.sleep(0.4)
        subprocess.run(["rm", "-f", idxfile])
    logfile.close()
    subprocess.run(["rm", "-f"] + [f for f in __import__("os").listdir(".") if f.startswith("sub_") and f.endswith(".html")])

if __name__ == "__main__":
    main()
