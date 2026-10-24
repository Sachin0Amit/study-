"""One-shot fixer: wrap apostrophe-bearing subtopic strings in double quotes."""
import re

P = '/home/z/my-project/src/data/exams/australia.ts'
s = open(P, encoding='utf-8').read()

pairs = [
    ("'Koch's postulates and Pasteur's experiments'",
     '"Koch\'s postulates and Pasteur\'s experiments"'),
    ("'Le Chatelier's principle: concentration, pressure and temperature'",
     '"Le Chatelier\'s principle: concentration, pressure and temperature"'),
    ("'Magnetic flux, Faraday's and Lenz's laws'",
     '"Magnetic flux, Faraday\'s and Lenz\'s laws"'),
    ("'Newton's law of gravitation and field strength'",
     '"Newton\'s law of gravitation and field strength"'),
    ("'Orbital motion, Kepler's laws and total energy'",
     '"Orbital motion, Kepler\'s laws and total energy"'),
    ("'Polarisation and Malus' law'",
     '"Polarisation and Malus\' law"'),
]

for old, new in pairs:
    if old in s:
        s = s.replace(old, new)
        print('fixed:', old[:50])
    else:
        print('NOT FOUND:', old[:50])

open(P, 'w', encoding='utf-8').write(s)

# Remaining hazard scan: single-quoted strings still containing an inner apostrophe
hazard = re.findall(r"'[^'\n]*[a-zA-Z]'[a-z][^'\n]*'", s)
for h in hazard[:10]:
    print('STILL SUSPECT:', h[:90])
print('scan done')
