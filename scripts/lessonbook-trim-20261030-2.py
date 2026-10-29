#!/usr/bin/env python3
"""LESSONBOOK-20261030-2: trim fnd-active-recall additions to land <=3000 words.
Only NEWLY-ADDED text is touched; pre-existing prose is never modified."""
import sys

PATH = '/home/z/my-project/src/data/knowledge/fields/foundation-learning.ts'
src = open(PATH, encoding='utf-8').read()

# note: \u2019 in this file is a literal backslash-u escape inside TS strings
RSQ = '\\u2019'   # ’ as literal escape
LDQ = '\\u201c'   # “ as literal escape
RDQ = '\\u201d'   # ” as literal escape

reps = []

# 1. History para trim
old1 = (
    "text: 'The testing effect was old news before anyone named it. Hermann Ebbinghaus, who mapped "
    "forgetting from nonsense syllables in 1885, built his measurements on relearning — the savings method "
    "asks how much faster material is learned a second time, and the savings he recorded were the shadow of "
    "retrieval at work. Smaller classroom hints followed in studies by Katzaroff (1908) and Abbott (1909), and "
    "then Arthur Gates ran the first large classroom experiment for his 1917 Columbia dissertation: "
    "schoolchildren studied biographies and syllable lists while the split between reading time and reciting "
    "time ranged from all-reading down to twenty percent reading, and recall peaked when recitation took "
    "roughly sixty to eighty percent of the session — about a third better on the prose passages, and two to "
    "four times better on the syllable lists. Gates" + RSQ + "s advice was then neglected for decades. The "
    "anniversary literature adds one honest caution: recitation alone has not consistently helped adult "
    "learners in direct replications, which is why the modern technique adds feedback and aims at "
    "understanding rather than recital — but the classic experiments were measuring one thing all along. "
    "Testing yourself is not checking on learning; it is learning.',"
)
new1 = (
    "text: 'The testing effect was old news before anyone named it. Ebbinghaus, who mapped forgetting from "
    "syllables in 1885, built his measurements on relearning — the savings method asks how much faster "
    "material is learned a second time, and the savings he recorded were the shadow of retrieval at work. "
    "Katzaroff (1908) and Abbott (1909) hinted first; then Arthur Gates ran the first large classroom "
    "experiment, his 1917 Columbia dissertation: schoolchildren studied biographies and syllable lists while "
    "reading time ranged from all-reading down to twenty percent, and recall peaked when recitation took "
    "roughly sixty to eighty percent — about a third better on prose, two to four times better on the lists. "
    "Gates" + RSQ + "s advice was then neglected for decades. One honest caution: recitation alone has not "
    "consistently helped adult learners in replications, hence the modern form adds feedback. The conclusion "
    "has not moved since.',"
)
reps.append((old1, new1))

# 2. Strategy-gap para trim
old2 = (
    "text: 'If retrieval works this well, why does anyone reread? Because most students never hear the news. "
    "When Karpicke, Butler and Roediger (2009) asked 177 college students to list how they actually study, 84 "
    "percent named rereading their number-one strategy and only 11 percent mentioned practicing retrieval — "
    "self-testing barely registered even at a university full of exams. The decade" + RSQ + "s biggest evidence "
    "review, Dunlosky and colleagues (2013), graded ten common techniques on years of classroom data and left "
    "exactly two rated high utility: practice testing and distributed practice. Interleaving, self-explanation "
    "and elaborative interrogation sat in the moderate tier; rereading, summarization and highlighting — the "
    "three strategies that fill most study hours — rated low. This gap between the evidence and the behavior "
    "is not stupidity; it is the fluency illusion doing its job, rewarding whatever feels smooth today and "
    "sending the bill to exam week.',"
)
new2 = (
    "text: 'If retrieval works this well, why does anyone reread? Because most students never hear the news. "
    "When Karpicke, Butler and Roediger (2009) asked 177 college students how they actually study, 84 percent "
    "named rereading their number-one strategy and only 11 percent mentioned practicing retrieval. Dunlosky and "
    "colleagues (2013), grading ten common techniques on years of classroom data, left exactly two rated high "
    "utility: practice testing and distributed practice. Interleaving, self-explanation and elaborative "
    "interrogation sat in the moderate tier; rereading, summarization and highlighting — the strategies that "
    "fill most study hours — rated low. The gap is the fluency illusion at work: reward for feeling smooth "
    "today, billed at exam week.',"
)
reps.append((old2, new2))

# 3. Classroom para trim
old3 = (
    "text: 'None of this stayed in the laboratory. Roediger, Agarwal, McDaniel and McDermott (2011) ran three "
    "experiments inside 6th-grade social studies classrooms: material that had appeared on brief in-class "
    "multiple-choice quizzes was answered better on the real chapter exams and end-of-semester exams, and in "
    "the one experiment with a restudy comparison, quizzing beat restudying on the chapter exam (.91 versus a "
    "lower average). McDaniel and colleagues (2011) replicated the pattern in 8th-grade science, and McDermott "
    "and colleagues (2013) added a twist worth knowing: in 7th-grade science, quizzed questions beat "
    "non-quizzed ones by 18 percentage points on later exams whether the quizzes were multiple-choice or "
    "short-answer — the format mattered far less than the retrieval. The standard objection, that more testing "
    "must mean more stress, failed its own test: across Agarwal and colleagues" + RSQ + " 2014 classroom "
    "programs, students who practiced retrieval reported less test anxiety, not more. And the benefit is still "
    "growing into the school years — a 2024 developmental study found the ability to profit from testing "
    "itself strengthens through middle childhood, so retrieval habit built early compounds.',"
)
new3 = (
    "text: 'None of this stayed in the laboratory. Roediger, Agarwal, McDaniel and McDermott (2011) ran three "
    "experiments inside 6th-grade social studies classrooms: material that had appeared on brief in-class "
    "multiple-choice quizzes was answered better on the real chapter exams and end-of-semester exams, and in "
    "the one experiment with a restudy comparison, quizzing beat restudying on the chapter exam (.91 versus a "
    "lower average). McDaniel and colleagues (2011) replicated the pattern in 8th-grade science, and McDermott "
    "and colleagues (2013) found in 7th-grade science that quizzed questions beat non-quizzed ones by 18 "
    "percentage points on later exams whether the quizzes were multiple-choice or short-answer — the format "
    "mattered far less than the retrieval. And the objection that testing must mean more stress failed its own "
    "test: across Agarwal and colleagues" + RSQ + " 2014 classroom programs, students who practiced retrieval "
    "reported less test anxiety, not more.',"
)
reps.append((old3, new3))

# 4. Figure caption trim
old4 = (
    "'The strategy gap (Karpicke, Butler & Roediger, 2009; Dunlosky et al., 2013). Left: of 177 college "
    "students, 84% named rereading their #1 study strategy and only 11% named practice testing. Right: the "
    "evidence grades the same techniques the other way around — only practice testing and distributed practice "
    "earn high utility, while the hours-fillers rereading, summarization and highlighting rate low.',"
)
new4 = (
    "'The strategy gap (Karpicke, Butler & Roediger, 2009; Dunlosky et al., 2013). Left: of 177 students, 84% "
    "named rereading their #1 strategy; 11% named practice testing. Right: the evidence grades them oppositely "
    "— only practice testing and distributed practice rate high utility; rereading, summarization and "
    "highlighting rate low.',"
)
reps.append((old4, new4))

# 5. Sketch caption trim
old5 = (
    "'Student Laboratory Notebook: hand-drawn two-panel comparison — survey bars 84% versus 11% labeled " + LDQ +
    "rereading" + RDQ + " and " + LDQ + "practice testing" + RDQ + " under " + LDQ + "how 177 students study" + RDQ +
    ", and a utility tier table with HIGH holding " + LDQ + "practice testing" + RDQ + " and " + LDQ +
    "distributed practice" + RDQ + ", MODERATE holding " + LDQ + "interleaving" + RDQ + ", LOW holding " + LDQ +
    "rereading" + RDQ + ", " + LDQ + "summarization" + RDQ + " and " + LDQ + "highlighting" + RDQ +
    " — margin note: " + LDQ + "the smooth methods lose." + RDQ + "',"
)
new5 = (
    "'Student Laboratory Notebook: hand-drawn two-panel comparison — survey bars 84% versus 11% labeled " + LDQ +
    "rereading" + RDQ + " and " + LDQ + "practice testing" + RDQ + ", and a utility tier table with HIGH holding " +
    LDQ + "practice testing" + RDQ + " and " + LDQ + "distributed practice" + RDQ + ", MODERATE holding " + LDQ +
    "interleaving" + RDQ + ", LOW holding " + LDQ + "rereading" + RDQ + ", " + LDQ + "summarization" + RDQ +
    " and " + LDQ + "highlighting" + RDQ + " — margin note: " + LDQ + "the smooth methods lose." + RDQ + "',"
)
reps.append((old5, new5))

# 6-8. Terms trims
reps.append((
    "{ term: 'Recitation', def: 'Gates" + RSQ + "s term for studying aloud from memory — the classroom ancestor of retrieval practice.' },",
    "{ term: 'Recitation', def: 'Gates" + RSQ + "s term for studying aloud from memory — retrieval practice" + RSQ + "s classroom ancestor.' },",
))
reps.append((
    "{ term: 'Practice testing', def: 'Dunlosky" + RSQ + "s high-utility label for the retrieval family: quizzes, flashcards and free recall used as study, not as grading.' },",
    "{ term: 'Practice testing', def: 'Dunlosky" + RSQ + "s high-utility label for the retrieval family used as study, not as grading.' },",
))

# 9-11. Quiz explain trims
reps.append((
    "explain: 'Reading time ranged from 100% down to 20%; recall was best when reciting took about 60" + RSQ.replace('\\u','\\u') + "80% of the session — and pushing further backfired. Recitation alone also has not consistently replicated with adult learners, which is why the modern form adds feedback.',"
    .replace('60' + RSQ.replace('\\u','\\u') + '80%', '60\\u201380%'),
    "explain: 'Reading time ranged from 100% down to 20%; recall peaked at 60\\u201380% recitation — and pushing further backfired. Recitation alone also has not consistently replicated with adult learners, hence the modern form adds feedback.',"
))
reps.append((
    "explain: '84% named rereading first and only 11% named self-testing — the strategy gap. Dunlosky" + RSQ + "s 2013 review grades the same techniques the opposite way: practice testing and distributed practice are the only two rated high utility.',",
    "explain: '84% named rereading first, 11% self-testing — the strategy gap. Dunlosky" + RSQ + "s 2013 review grades it the opposite way: practice testing and distributed practice are the only two rated high utility.',"
))
reps.append((
    "explain: 'The quiz format mattered far less than the retrieval itself — both formats enhanced later exam performance, consistent with the low-stakes classroom programs in Roediger et al. (2011) and McDaniel et al. (2011).',",
    "explain: 'The format mattered far less than the retrieval itself — both formats enhanced later exams, consistent with the classroom programs in Roediger et al. (2011) and McDaniel et al. (2011).',"
))

fail = 0
for i, (old, new) in enumerate(reps, 1):
    n = src.count(old)
    if n != 1:
        print(f"REP {i}: count={n} — ABORT")
        print("  head:", old[:110])
        fail = 1
    else:
        src = src.replace(old, new)
        print(f"REP {i}: ok")

if fail:
    sys.exit(1)

open(PATH, 'w', encoding='utf-8').write(src)
print("All trims applied.")
