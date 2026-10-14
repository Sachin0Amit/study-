#!/usr/bin/env python3
"""
Subject-wise library restructure (per user request):
- Dissolve the 5 exam subjects + 18 exam books; merge their chapters/sections
  into subject-wise books (math-master, phys-master, chem-complete + 6 new books).
- Rename all chapter/section IDs to neutral prefixes (no exam names in URLs).
- Renumber chapters/sections sequentially inside each target book.
- Scrub every exam name from user-visible strings (titles, descriptions,
  lesson content, quizzes). Code comments are preserved (exam provenance
  is allowed in comments per the product decision).
"""
import re, sys, pathlib

ROOT = pathlib.Path('/home/z/my-project')
META = ROOT / 'src/data/library-parts/exams'
CONTENT = ROOT / 'src/data/content'

# ----------------------------------------------------------------------------
# 1. Metadata file configs: prefix renames, book targets, number offsets
# ----------------------------------------------------------------------------
# style 'u': chapter id = prefix + digit group; sections = prefix+key+-sM
FILE_CFG = {
    'jeemain-physics.ts':  dict(pre='jeemain-phy-u',  new='phys-m', book='phys-master',   off=128),
    'jeeadv-physics.ts':   dict(pre='jeeadv-phy-u',   new='phys-a', book='phys-master',   off=148),
    'jeemain-chemistry.ts':dict(pre='jeemain-chem-u', new='chem-m', book='chem-complete', off=44),
    'jeeadv-chemistry.ts': dict(pre='jeeadv-chem-u',  new='chem-a', book='chem-complete', off=64),
    'jeemain-maths.ts':    dict(pre='jeemain-math-u', new='math-m', book='math-master',   off=17),
    'jeeadv-maths.ts':     dict(pre='jeeadv-math-u',  new='math-a', book='math-master',   off=31),
    'sat-math.ts':         dict(pre='sat-math-d',     new='math-s', book='math-master',   off=47),
    'sat-rw.ts':           dict(pre='sat-rw-d',       new='eng-r',  book='english-complete', off=0),
    'gate-cs.ts':          dict(pre='gate-cs-ch',     new='cse-g',  book='cse-complete',  off=36),
    'drdo-cse.ts':         dict(pre='drdo-cse-a',     new='cse-d',  book='cse-complete',  off=47),
    'drdo-ece.ts':         dict(pre='drdo-ece-a',     new='ece-d',  book='ece-complete',  off=37),
    'drdo-ee.ts':          dict(pre='drdo-ee-a',      new='ee-d',   book='ee-complete',   off=32),
    'drdo-me.ts':          dict(pre='drdo-me-a',      new='me-d',   book='me-complete',   off=30),
    # slug-based ids, numbers unchanged
    'engg-cse.ts':         dict(pre='engg-cse-', new='cse-e-', book='cse-complete', off=None),
    'engg-ece.ts':         dict(pre='engg-ece-', new='ece-e-', book='ece-complete', off=None),
    'engg-ee.ts':          dict(pre='engg-ee-',  new='ee-e-',  book='ee-complete',  off=None),
    'engg-me.ts':          dict(pre='engg-me-',  new='me-e-',  book='me-complete',  off=None),
}

# drdo-tier1: each area goes to a different book
T1_MAP = {
    'a1': ('math-q1', 'math-master', 51),
    'a2': ('apt-r1', 'aptitude-complete', 1),
    'a3': ('apt-g1', 'aptitude-complete', 2),
    'a4': ('eng-l1', 'english-complete', 5),
    'a5': ('apt-s1', 'aptitude-complete', 3),
}

# ----------------------------------------------------------------------------
# 2. Ordered exam-term scrub rules (regex -> replacement).
#    Applied ONLY to non-comment lines. Multi-word / specific rules first.
# ----------------------------------------------------------------------------
RULES = [
    # --- JEE family ---
    (r"JEE \(Main\) Paper 1", "the engineering assessment"),
    (r"JEE \(Advanced\)", "advanced engineering assessment"),
    (r"JEE \(Main\)", "engineering assessment"),
    (r"JEE Advanced", "advanced engineering assessment"),
    (r"JEE Main", "engineering assessment"),
    (r"the JEE\b", "the engineering assessment"),
    (r"\bJEE\b", "engineering assessment"),
    # --- IIT (institutes) ---
    (r"IISc/IITs", "the top research institutes"),
    (r"IIT Madras", "a leading engineering institute"),
    (r"IIT-BBS/AKTU pattern", "the standard university pattern"),
    (r"IIT-BBS", "the university curriculum"),
    (r"official IIT syllabus", "official syllabus"),
    (r"\bIITs\b", "top engineering institutes"),
    (r"\bIIT\b", "the flagship engineering institutes"),
    (r"\bIISc\b", "the top research institutes"),
    # --- NTA ---
    (r"official NTA", "official"),
    (r"\bNTA\b", "the testing agency"),
    # --- SAT family ---
    (r"the College Board", "the assessment body"),
    (r"College Board", "the assessment body"),
    (r"the Digital SAT", "the digital assessment"),
    (r"Digital SAT", "the digital assessment"),
    (r"the SAT\b", "the assessment"),
    (r"SAT Math", "the Math assessment"),
    (r"SAT Reading & Writing", "the Reading & Writing assessment"),
    (r"\bSAT\b", "the assessment"),
    (r"the PSAT", "the preliminary assessment"),
    (r"\bPSAT\b", "the preliminary assessment"),
    (r"Bluebook", "the testing app"),
    # --- DRDO ---
    (r"DRDO Scientist \u2018B\u2019", "defence-scientist recruitment"),
    (r"DRDO Scientist 'B'", "defence-scientist recruitment"),
    (r"DRDO Scientist B", "defence-scientist recruitment"),
    (r"DRDO Missions, Labs & Products", "Defence-Research Missions, Labs & Products"),
    (r"DRDO missions, labs and products", "the defence establishment\u2019s missions, labs and products"),
    (r"UN, ISRO, DRDO, HAL, BARC", "UN, ISRO, HAL, BARC and the defence research establishment"),
    (r"DRDO laboratories", "defence-research laboratories"),
    (r"DRDO\u2019s", "the defence establishment\u2019s"),
    (r"DRDO's", "the defence establishment's"),
    (r"a DRDO ", "a defence-research "),
    (r"\bDRDO\b", "the defence research establishment"),
    (r"\bRAC\b", "the recruitment cell"),
    (r"\bCEPTAM\b", "the technical recruitment scheme"),
    (r"Scientist \u2018B\u2019", "scientist"),
    (r"Scientist 'B'", "scientist"),
    # --- GATE ---
    (r"GATE TOC section 7\.1", "the Theory of Computation chapter"),
    (r"GATE Algorithms section 6\.1", "the Algorithms chapter"),
    (r"the GATE CS", "the CS assessment"),
    (r"GATE CS", "the CS assessment"),
    (r"GATE score", "graduate assessment score"),
    (r"the GATE\b", "the graduate assessment"),
    (r"\bGATE\b", "the graduate assessment"),
    # --- UPSC / ESE ---
    (r"UPSC ESE \(Mains\)", "the engineering-services standard"),
    (r"UPSC ESE", "the engineering-services standard"),
    (r"\bESE\b", "engineering services"),
    (r"\bUPSC\b", "the engineering-services commission"),
    # --- university bodies ---
    (r"AKTU and VTU", "the state technical universities"),
    (r"AKTU/VTU", "the state technical universities"),
    (r"\bAKTU\b", "the state technical university"),
    (r"\bVTU\b", "the state technical university"),
    (r"\bAICTE\b", "the national technical council"),
    # --- Tier -> Stage ---
    (r"Tier-I", "Stage-I"), (r"Tier I", "Stage I"), (r"Tier 1", "Stage 1"),
    (r"Tier-II", "Stage-II"), (r"Tier II", "Stage II"), (r"Tier 2", "Stage 2"),
    # --- generic exam words, LAST ---
    (r"\bExaminations\b", "Assessments"),
    (r"\bExamination\b", "Assessment"),
    (r"\bexaminations\b", "assessments"),
    (r"\bexamination\b", "assessment"),
    (r"\bExams\b", "Assessments"),
    (r"\bExam\b", "Assessment"),
    (r"\bexams\b", "assessments"),
    (r"\bexam\b", "assessment"),
    (r"\bexaminers\b", "assessors"),
    (r"\bexaminer\b", "assessor"),
]

def scrub(text: str) -> str:
    for pat, rep in RULES:
        text = re.sub(pat, rep, text)
    return text

def is_comment(line: str) -> bool:
    s = line.strip()
    return s.startswith('//') or s.startswith('/*') or s.startswith('*')

# ----------------------------------------------------------------------------
# 3. Transform one metadata file
# ----------------------------------------------------------------------------
def transform_meta(fname: str, cfg: dict) -> dict:
    path = META / fname
    src = path.read_text()
    lines = src.split('\n')
    out = []
    stats = {'chapters': 0, 'sections': 0}
    pre, new, book, off = cfg['pre'], cfg['new'], cfg['book'], cfg['off']

    ch_re = re.compile(r"id: '" + re.escape(pre) + r"([a-z0-9]+)'")
    sec_re = re.compile(r"id: '" + re.escape(pre) + r"([a-z0-9]+)-s(\d+)'")
    num_re = re.compile(r"number: (\d+)(\.\d+)?,")
    bookid_re = re.compile(r"bookId: '[a-z0-9-]+'")

    for line in lines:
        if is_comment(line):
            out.append(line)
            continue
        if 'bookId:' in line and 'chapterId:' not in line:
            # ---- chapter line ----
            m = ch_re.search(line)
            if m:
                key = m.group(1)
                if off is not None:
                    newnum = off + int(key)
                else:
                    nm = num_re.search(line)
                    newnum = int(nm.group(1)) if nm else 0
                line = ch_re.sub(lambda mm: "id: '" + new + mm.group(1) + "'", line, count=1)
                line = bookid_re.sub("bookId: '" + book + "'", line, count=1)
                if off is not None:
                    line = num_re.sub(f"number: {newnum},", line, count=1)
                stats['chapters'] += 1
            out.append(line)
        elif 'chapterId:' in line:
            # ---- section line ----
            m = sec_re.search(line)
            if m:
                key, sidx = m.group(1), int(m.group(2))
                newsecid = f"{new}{key}-s{sidx}"
                if off is not None:
                    newnum = off + int(key) + sidx / 10
                    line = num_re.sub(lambda mm: f"number: {newnum},", line, count=1)
                # rename id and chapterId
                line = re.sub(r"id: '" + re.escape(pre) + r"[a-z0-9]+-s\d+'",
                              "id: '" + newsecid + "'", line, count=1)
                line = re.sub(r"chapterId: '" + re.escape(pre) + r"[a-z0-9]+'",
                              "chapterId: '" + new + key + "'", line, count=1)
                stats['sections'] += 1
            out.append(line)
        else:
            out.append(scrub(line))
    # pages field cleanups (chapter lines only got ID treatment above; do now)
    text = '\n'.join(out)
    text = text.replace("pages: 'Tier I \u00b7 ", "pages: '").replace("pages: 'Tier II \u00b7 ", "pages: '")
    text = text.replace("pages: 'Paper 1 \u00b7 ", "pages: '").replace("pages: 'Paper 2 \u00b7 ", "pages: '")
    text = text.replace("pages: 'GA \u00b7 15 marks'", "pages: 'Aptitude \u00b7 15 marks'")
    path.write_text(text)
    return stats

def transform_tier1() -> dict:
    path = META / 'drdo-tier1.ts'
    src = path.read_text()
    lines = src.split('\n')
    out = []
    stats = {'chapters': 0, 'sections': 0}
    ch_re = re.compile(r"id: 'drdo-t1-(a\d+)'")
    sec_re = re.compile(r"id: 'drdo-t1-(a\d+)-s(\d+)'")
    num_re = re.compile(r"number: (\d+)(\.\d+)?,")
    for line in lines:
        if is_comment(line):
            out.append(line)
            continue
        if 'bookId:' in line and 'chapterId:' not in line:
            m = ch_re.search(line)
            if m:
                area = m.group(1)
                newid, book, newnum = T1_MAP[area]
                line = ch_re.sub("id: '" + newid + "'", line, count=1)
                line = re.sub(r"bookId: '[a-z0-9-]+'", "bookId: '" + book + "'", line, count=1)
                line = num_re.sub(f"number: {newnum},", line, count=1)
                stats['chapters'] += 1
            out.append(line)
        elif 'chapterId:' in line:
            m = sec_re.search(line)
            if m:
                area, sidx = m.group(1), int(m.group(2))
                newid, book, newnum = T1_MAP[area]
                line = sec_re.sub("id: '" + newid + f"-s{sidx}'", line, count=1)
                line = re.sub(r"chapterId: 'drdo-t1-a\d+'", "chapterId: '" + newid + "'", line, count=1)
                line = num_re.sub(lambda mm: f"number: {newnum + sidx/10},", line, count=1)
                stats['sections'] += 1
            out.append(line)
        else:
            out.append(scrub(line))
    text = '\n'.join(out)
    text = text.replace("pages: 'Tier I \u00b7 ", "pages: '")
    path.write_text(text)
    return stats

# ----------------------------------------------------------------------------
# 4. Global ID prefix renames for content + formula files (then scrub)
# ----------------------------------------------------------------------------
PREFIX_RENAMES = [
    ('jeemain-phy-u', 'phys-m'),
    ('jeeadv-phy-u', 'phys-a'),
    ('jeemain-chem-u', 'chem-m'),
    ('jeeadv-chem-u', 'chem-a'),
    ('jeemain-math-u', 'math-m'),
    ('jeeadv-math-u', 'math-a'),
    ('sat-math-d', 'math-s'),
    ('sat-rw-d', 'eng-r'),
    ('drdo-t1-a1', 'math-q1'),
    ('drdo-t1-a2', 'apt-r1'),
    ('drdo-t1-a3', 'apt-g1'),
    ('drdo-t1-a4', 'eng-l1'),
    ('drdo-t1-a5', 'apt-s1'),
    ('drdo-cse-a', 'cse-d'),
    ('drdo-ece-a', 'ece-d'),
    ('drdo-ee-a', 'ee-d'),
    ('drdo-me-a', 'me-d'),
    ('gate-cs-ch', 'cse-g'),
    ('engg-cse-', 'cse-e-'),
    ('engg-ece-', 'ece-e-'),
    ('engg-ee-', 'ee-e-'),
    ('engg-me-', 'me-e-'),
    ('jeemaths-ch', 'advmath-ch'),
    # book ids (in case any text references them)
    ('jeemain-physics-2026', 'phys-master'),
    ('jeemain-chemistry-2026', 'chem-complete'),
    ('jeemain-maths-2026', 'math-master'),
    ('jeeadv-physics-2026', 'phys-master'),
    ('jeeadv-chemistry-2026', 'chem-complete'),
    ('jeeadv-maths-2026', 'math-master'),
    ('sat-math-2026', 'math-master'),
    ('sat-rw-2026', 'english-complete'),
    ('drdo-tier1', 'aptitude-complete'),
    ('drdo-cse', 'cse-complete'),
    ('drdo-ece', 'ece-complete'),
    ('drdo-ee', 'ee-complete'),
    ('drdo-me', 'me-complete'),
    ('gate-cs-2026', 'cse-complete'),
    ('engg-cse', 'cse-complete'),
    ('engg-ece', 'ece-complete'),
    ('engg-ee', 'ee-complete'),
    ('engg-me', 'me-complete'),
]

def rename_ids(text: str) -> str:
    for old, new in PREFIX_RENAMES:
        text = text.replace(old, new)
    return text

def scrub_file_keep_comments(path: pathlib.Path, do_rename: bool):
    src = path.read_text()
    if do_rename:
        src = rename_ids(src)
    lines = src.split('\n')
    out = [line if is_comment(line) else scrub(line) for line in lines]
    path.write_text('\n'.join(out))

# ----------------------------------------------------------------------------
# run
# ----------------------------------------------------------------------------
def main():
    total = {'chapters': 0, 'sections': 0}
    for fname, cfg in FILE_CFG.items():
        s = transform_meta(fname, cfg)
        total['chapters'] += s['chapters']; total['sections'] += s['sections']
        print(f"{fname}: {s['chapters']} chapters, {s['sections']} sections")
    s = transform_tier1()
    total['chapters'] += s['chapters']; total['sections'] += s['sections']
    print(f"drdo-tier1.ts: {s['chapters']} chapters, {s['sections']} sections")

    # jeemaths.ts metadata: ID rename + scrub
    p = ROOT / 'src/data/library-parts/jeemaths.ts'
    src = rename_ids(p.read_text())
    p.write_text('\n'.join(l if is_comment(l) else scrub(l) for l in src.split('\n')))
    print("jeemaths.ts: renamed + scrubbed")

    # content files
    for f in sorted(CONTENT.glob('exam-*.ts')):
        scrub_file_keep_comments(f, do_rename=True)
        print(f"content/{f.name}: renamed + scrubbed")
    for f in sorted(CONTENT.glob('jeemaths-ch*.ts')):
        scrub_file_keep_comments(f, do_rename=True)
        print(f"content/{f.name}: renamed + scrubbed")

    # exam formulas
    scrub_file_keep_comments(ROOT / 'src/data/exam-formulas.ts', do_rename=True)
    print("exam-formulas.ts: renamed + scrubbed")

    print(f"\nTOTAL: {total['chapters']} chapters, {total['sections']} sections transformed")

if __name__ == '__main__':
    main()
