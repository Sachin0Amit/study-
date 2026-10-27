'use client'

/**
 * CodePlayground — the language-aware, real-execution playground.
 *
 * Unlike the JavaScript playground (which evals in the browser), this
 * component sends the program to the StudyVerse code-runner service
 * (mini-services/code-runner, port 3020) where it is compiled and run by
 * the real toolchain: gcc · g++ · OpenJDK · bun · CPython · SQLite.
 *
 * Every chapter that teaches one of these languages gets a playground whose
 * title, presets and runner match the chapter's language — a C chapter never
 * shows a "JavaScript Playground" again.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  CircleCheck,
  Loader2,
  Play,
  RotateCcw,
  ServerCrash,
  Terminal,
  Timer,
  Trash2,
  TriangleAlert,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type CodeVariant = 'c' | 'cpp' | 'java' | 'ts' | 'python' | 'sql'

interface Preset {
  id: string
  label: string
  code: string
}

interface VariantConfig {
  title: string
  subtitle: string
  filename: string
  icon: string
  /** tailwind accent triplet: text / ring+bg / solid button */
  accentText: string
  accentBg: string
  accentSolid: string
  runningLabel: string
  presets: Preset[]
  /** shown under the editor as a hint (e.g. SQL seeded schema) */
  note?: string
}

/* ------------------------------------------------------------------ */
/*  Preset programs — real code, really run by the real toolchain      */
/* ------------------------------------------------------------------ */

const C_PRESETS: Preset[] = [
  {
    id: 'c-hello',
    label: 'Hello, printf',
    code: `#include <stdio.h>

int main(void) {
    printf("Hello from real gcc!\\n");

    int    age  = 21;
    double gpa  = 8.74;
    char   grade = 'A';

    printf("age   = %d\\n", age);
    printf("gpa   = %.2f\\n", gpa);
    printf("grade = %c\\n", grade);
    printf("size of int = %zu bytes\\n", sizeof(int));

    return 0;
}`,
  },
  {
    id: 'c-loops',
    label: 'Loops & table',
    code: `#include <stdio.h>

int main(void) {
    /* nested for — a multiplication table */
    for (int row = 1; row <= 5; row++) {
        for (int col = 1; col <= 5; col++) {
            printf("%4d", row * col);
        }
        printf("\\n");
    }

    /* while — countdown */
    int n = 5;
    int fact = 1;
    while (n > 1) {
        fact *= n;
        n--;
    }
    printf("5! = %d\\n", fact);
    return 0;
}`,
  },
  {
    id: 'c-functions',
    label: 'Recursion',
    code: `#include <stdio.h>

long factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

int fib(int n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

int main(void) {
    for (int i = 1; i <= 8; i++)
        printf("%2d! = %ld\\n", i, factorial(i));

    printf("fib 1..12: ");
    for (int i = 1; i <= 12; i++)
        printf("%d ", fib(i));
    printf("\\n");
    return 0;
}`,
  },
  {
    id: 'c-pointers',
    label: 'Pointers',
    code: `#include <stdio.h>

void swap(int *a, int *b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

int main(void) {
    int x = 3, y = 9;
    swap(&x, &y);
    printf("after swap: x=%d y=%d\\n", x, y);

    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;                 /* points at arr[0] */

    for (int i = 0; i < 5; i++)
        printf("arr[%d] = %-3d  *(p+%d) = %d\\n", i, arr[i], i, *(p + i));

    printf("sum = %d\\n", p[0] + p[1] + p[2] + p[3] + p[4]);
    return 0;
}`,
  },
  {
    id: 'c-structs',
    label: 'Structs & strings',
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    char name[32];
    int  roll;
    float marks;
} Student;

int main(void) {
    Student class[3] = {
        {"Ada",   1, 92.5f},
        {"Linus", 2, 88.0f},
        {"Grace", 3, 95.5f},
    };

    float best = 0;
    char  topper[32];

    for (int i = 0; i < 3; i++) {
        printf("%-6s roll=%d marks=%.1f\\n",
               class[i].name, class[i].roll, class[i].marks);
        if (class[i].marks > best) {
            best = class[i].marks;
            strcpy(topper, class[i].name);
        }
    }
    printf("topper: %s (%.1f)\\n", topper, best);
    return 0;
}`,
  },
]

const CPP_PRESETS: Preset[] = [
  {
    id: 'cpp-basics',
    label: 'Tour: basics',
    code: `#include <iostream>
#include <string>

int main() {
    std::string name = "modern C++";
    auto answer = 42;                       // auto deduction

    std::cout << "Hello from real g++!\\n";
    std::cout << name << " compiles with -std=c++20\\n";

    for (char c : name)                     // range-for
        if (c == '+') std::cout << "found a plus\\n";

    std::cout << "answer = " << answer << '\\n';
}`,
  },
  {
    id: 'cpp-vector',
    label: 'vector + algorithms',
    code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    std::vector<int> v{42, 7, 19, 3, 88, 23};

    std::sort(v.begin(), v.end());
    for (int x : v) std::cout << x << ' ';
    std::cout << "\\n";

    int total = std::accumulate(v.begin(), v.end(), 0);
    auto  biggest = *std::max_element(v.begin(), v.end());

    std::cout << "sum = " << total
              << "  max = " << biggest
              << "  count = " << v.size() << '\\n';

    // erase-remove idiom: drop everything below 20
    v.erase(std::remove_if(v.begin(), v.end(),
                           [](int x) { return x < 20; }),
            v.end());
    std::cout << "survivors: ";
    for (int x : v) std::cout << x << ' ';
    std::cout << '\\n';
}`,
  },
  {
    id: 'cpp-classes',
    label: 'Classes',
    code: `#include <iostream>
#include <string>
#include <vector>

class BankAccount {
    std::string owner;
    double balance = 0;
public:
    BankAccount(std::string who, double opening)
        : owner(std::move(who)), balance(opening) {}

    void deposit(double amt)  { balance += amt; }
    bool withdraw(double amt) {
        if (amt > balance) return false;
        balance -= amt;
        return true;
    }
    double get_balance() const { return balance; }
    const std::string& get_owner() const { return owner; }
};

int main() {
    BankAccount acc("Ada", 1000);
    acc.deposit(250);
    std::cout << acc.get_owner() << " balance: " << acc.get_balance() << '\\n';

    if (acc.withdraw(2000))
        std::cout << "withdrew 2000\\n";
    else
        std::cout << "insufficient funds — declined\\n";

    std::cout << "final balance: " << acc.get_balance() << '\\n';
}`,
  },
  {
    id: 'cpp-templates',
    label: 'Templates',
    code: `#include <iostream>
#include <string>
#include <vector>

template <typename T>
T biggest_of(const T& a, const T& b) {
    return a > b ? a : b;
}

template <typename T>
void print_all(const std::vector<T>& xs) {
    for (const auto& x : xs) std::cout << x << ' ';
    std::cout << '\\n';
}

int main() {
    std::cout << biggest_of(3, 9) << '\\n';
    std::cout << biggest_of<std::string>("abc", "abd") << '\\n';

    print_all<int>({1, 2, 3});
    print_all<std::string>({"templates", "are", "compile-time"});
}`,
  },
  {
    id: 'cpp-raii',
    label: 'RAII guard',
    code: `#include <iostream>
#include <stdexcept>

struct FileGuard {
    const char* name;
    explicit FileGuard(const char* n) : name(n) {
        std::cout << "  [open ] " << name << '\\n';
    }
    ~FileGuard() {
        std::cout << "  [close] " << name << '\\n';
    }
};

void process(bool fail) {
    FileGuard g("report.txt");
    std::cout << "  working...\\n";
    if (fail) throw std::runtime_error("disk on fire");
    std::cout << "  done\\n";
}   // <- guard closes here, even on the happy path

int main() {
    std::cout << "happy path:\\n";
    process(false);

    std::cout << "exception path:\\n";
    try {
        process(true);
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << '\\n';
    }
}`,
  },
]

const JAVA_PRESETS: Preset[] = [
  {
    id: 'java-hello',
    label: 'Hello + record',
    code: `public class Main {
    record Point(int x, int y) {
        double dist() { return Math.sqrt(x * x + y * y); }
    }

    public static void main(String[] args) {
        System.out.println("Hello from a real JVM!");

        var p = new Point(3, 4);
        System.out.println(p);                 // records print nicely
        System.out.println("distance = " + p.dist());

        String name = "Java " + Runtime.version().feature();
        System.out.println("running on " + name);
    }
}`,
  },
  {
    id: 'java-streams',
    label: 'Streams',
    code: `import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of(
            "Ada", "Grace", "Alan", "Barbara", "Radia", "Mary");

        names.stream()
             .filter(n -> n.length() > 3)
             .map(String::toUpperCase)
             .sorted()
             .forEach(System.out::println);

        int total = names.stream()
                         .mapToInt(String::length)
                         .sum();
        System.out.println("total letters = " + total);
    }
}`,
  },
  {
    id: 'java-generics',
    label: 'Generics + Map',
    code: `import java.util.HashMap;
import java.util.Map;

public class Main {
    static class Box<T> {
        private final T value;
        Box(T value) { this.value = value; }
        T get() { return value; }
    }

    public static void main(String[] args) {
        Box<Integer> count = new Box<>(42);
        Box<String>  label = new Box<>("answer");
        System.out.println(label.get() + " = " + count.get());

        Map<String, Integer> wordLen = new HashMap<>();
        for (String w : new String[]{"lambda", "stream", "record"})
            wordLen.put(w, w.length());

        wordLen.forEach((word, len) ->
            System.out.println(word + " -> " + len));
    }
}`,
  },
  {
    id: 'java-functional',
    label: 'Lambdas',
    code: `import java.util.List;

public class Main {
    interface Greeting {
        String greet(String who);
    }

    public static void main(String[] args) {
        Greeting formal  = who -> "Good evening, " + who;
        Greeting casual  = who -> "Hey " + who + "!";

        System.out.println(formal.greet("Dr. Hopper"));
        System.out.println(casual.greet("Ada"));

        List<Integer> nums = List.of(4, 8, 15, 16, 23, 42);
        nums.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * 10)
            .forEach(System.out::println);
    }
}`,
  },
]

const TS_PRESETS: Preset[] = [
  {
    id: 'ts-types',
    label: 'Interfaces',
    code: `interface Book {
  readonly isbn: string
  title: string
  pages: number
  tags?: string[]          // optional property
}

const book: Book = {
  isbn: "978-0596805524",
  title: "JavaScript: The Definitive Guide",
  pages: 1096,
}

function summary(b: Book): string {
  const tags = b.tags?.join(", ") ?? "no tags"
  return \`\${b.title} — \${b.pages} pages (\${tags})\`
}

console.log(summary(book))`,
  },
  {
    id: 'ts-narrowing',
    label: 'Unions + narrowing',
    code: `type Shape =
  | { kind: "circle";   radius: number }
  | { kind: "square";   side: number }
  | { kind: "rectangle"; w: number; h: number }

function area(s: Shape): number {
  switch (s.kind) {                    // discriminated union
    case "circle":    return Math.PI * s.radius ** 2
    case "square":    return s.side ** 2
    case "rectangle": return s.w * s.h
  }
}

for (const s of [
  { kind: "circle", radius: 1 } as Shape,
  { kind: "square", side: 3 } as Shape,
  { kind: "rectangle", w: 4, h: 5 } as Shape,
]) {
  console.log(s.kind.padEnd(9), "→", area(s).toFixed(2))
}`,
  },
  {
    id: 'ts-generics',
    label: 'Generics',
    code: `function first<T>(xs: readonly T[]): T | undefined {
  return xs[0]
}

function pluck<T, K extends keyof T>(xs: T[], key: K): T[K][] {
  return xs.map((x) => x[key])
}

const people = [
  { name: "Ada",    born: 1815 },
  { name: "Grace",  born: 1906 },
  { name: "Barbara", born: 1939 },
]

console.log(first(people)?.name)
console.log(pluck(people, "name"))
console.log(pluck(people, "born"))`,
  },
  {
    id: 'ts-utility',
    label: 'Utility types',
    code: `interface User {
  id: number
  name: string
  email: string
  age: number
}

type PublicUser = Omit<User, "email">       // hide email
type UserPatch = Partial<User>              // all optional
type IdName   = Pick<User, "id" | "name">   // just two fields

const u: PublicUser = { id: 1, name: "Ada", age: 36 }
const patch: UserPatch = { age: 37 }
const tag: IdName = { id: u.id, name: u.name }

console.log(u, patch, tag)

// mapped + readonly
const frozen = { ...tag } as Readonly<IdName>
console.log(Object.keys(frozen), "is frozen-like:", !Object.isExtensible(frozen))`,
  },
]

const PYTHON_PRESETS: Preset[] = [
  {
    id: 'py-basics',
    label: 'Basics & f-strings',
    code: `langs = ["C", "C++", "Java", "Python"]
scores = {"Ada": 92, "Grace": 95, "Alan": 88}

print(f"{'language':<10} first letter")
for lang in langs:
    print(f"{lang:<10} {lang[0]}")

print()
for name, score in sorted(scores.items(), key=lambda kv: -kv[1]):
    bar = "█" * (score // 5)
    print(f"{name:<6} {score} {bar}")`,
  },
  {
    id: 'py-comprehensions',
    label: 'Comprehensions',
    code: `nums = range(1, 11)

squares      = [n * n for n in nums]
evens_squared = [n * n for n in nums if n % 2 == 0]
cubes        = {n: n ** 3 for n in nums if n > 7}
total        = sum(n for n in nums if n % 3 == 0)   # generator

print("squares:      ", squares)
print("evens squared:", evens_squared)
print("cubes > 7:    ", cubes)
print("sum of /3:    ", total)

matrix = [[1, 2, 3], [4, 5, 6]]
transposed = [[row[i] for row in matrix] for i in range(3)]
print("transposed:   ", transposed)`,
  },
  {
    id: 'py-oop',
    label: 'Dataclasses',
    code: `from dataclasses import dataclass

@dataclass(order=True)
class Planet:
    name: str
    moons: int

planets = [
    Planet("Mars", 2), Planet("Jupiter", 95), Planet("Earth", 1),
]

for p in sorted(planets, reverse=True):
    print(f"{p.name:<8} {p.moons:>2} moons")

@dataclass
class Moon(Planet):                 # inheritance
    parent: str = ""

m = Moon("Io", 0, parent="Jupiter")
print(m)`,
  },
  {
    id: 'py-gradient',
    label: 'Gradient descent',
    code: `# minimise f(x) = (x - 3)^2  — the ML workhorse in 10 lines
def f(x):  return (x - 3) ** 2
def df(x): return 2 * (x - 3)

x, lr = 0.0, 0.1
for step in range(12):
    grad = df(x)
    x -= lr * grad
    print(f"step {step:>2}  x = {x:7.4f}  f(x) = {f(x):9.6f}")

print(f"\\nminimum near x = {x:.4f} (true: 3)")`,
  },
  {
    id: 'py-nn',
    label: 'Tiny neural net',
    code: `# forward pass of a 2-3-1 network, pure Python
import math
sig = lambda z: 1 / (1 + math.exp(-z))

W1 = [[0.5, -0.3, 0.8], [0.2, 0.7, -0.5], [0.9, 0.1, 0.4]]  # 2 -> 3
b1 = [0.1, -0.2, 0.05]
W2 = [0.6, -0.4, 0.7]                                        # 3 -> 1
b2 = 0.15

def forward(x1, x2):
    h = [sig(W1[j][0] * x1 + W1[j][1] * x2 + W1[j][2] * x1 * 0 + b1[j]) for j in range(3)]
    # (weights on two inputs; the third column keeps the math visible)
    h = [sig(W1[j][0] * x1 + W1[j][1] * x2 + b1[j]) for j in range(3)]
    y = sig(sum(w * hj for w, hj in zip(W2, h)) + b2)
    return h, y

for x1, x2 in [(0, 0), (1, 0), (0, 1), (1, 1)]:
    h, y = forward(x1, x2)
    hidden = " ".join(f"{v:.3f}" for v in h)
    print(f"in ({x1},{x2})  hidden [{hidden}]  out {y:.4f}")`,
  },
  {
    id: 'py-blockchain',
    label: 'Hash chain',
    code: `# a blockchain is a chain of hashes — see it happen
import hashlib, json

def make_block(index, data, prev_hash):
    payload = json.dumps({"index": index, "data": data, "prev": prev_hash},
                         sort_keys=True)
    digest = hashlib.sha256(payload.encode()).hexdigest()
    return {"index": index, "data": data, "prev": prev_hash, "hash": digest}

chain = [make_block(0, "genesis", "0" * 64)]
for i, tx in enumerate(["ada -> grace: 5", "alan -> ada: 2"], 1):
    chain.append(make_block(i, tx, chain[-1]["hash"]))

for blk in chain:
    print(f"#{blk['index']}  {blk['hash'][:16]}…")
    print(f"    prev {blk['prev'][:16]}…  data: {blk['data']}")

# tamper with block 1 and watch the chain break
chain[1]["data"] = "ada -> grace: 5000"
recomputed = make_block(1, chain[1]["data"], chain[1]["prev"])["hash"]
print("\\ntampered block 1?")
print("  stored hash:  ", chain[2]["prev"])
print("  real hash now:", recomputed)
print("  chain valid:  ", chain[2]["prev"] == recomputed)`,
  },
  {
    id: 'py-tests',
    label: 'Unit tests',
    code: `# red / green testing in ten lines — no framework needed
def is_palindrome(s: str) -> bool:
    s = "".join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]

def roman(n: int) -> str:
    vals = [(1000,"M"),(900,"CM"),(500,"D"),(400,"CD"),(100,"C"),
            (90,"XC"),(50,"L"),(40,"XL"),(10,"X"),(9,"IX"),(5,"V"),(4,"IV"),(1,"I")]
    out = ""
    for v, sym in vals:
        while n >= v:
            out += sym; n -= v
    return out

cases = [
    (is_palindrome, ("Ada",),       False),
    (is_palindrome, ("racecar",),   True),
    (roman,         (2026,),        "MMXXVI"),
    (roman,         (49,),          "XLIX"),
]

passed = 0
for fn, args, expected in cases:
    got = fn(*args)
    mark = "PASS" if got == expected else "FAIL"
    passed += got == expected
    print(f"{mark}  {fn.__name__}{args} -> {got!r} (want {expected!r})")
print(f"\\n{passed}/{len(cases)} tests green")`,
  },
]

const SQL_PRESETS: Preset[] = [
  {
    id: 'sql-select',
    label: 'SELECT & WHERE',
    code: `-- the demo database is already seeded for you
SELECT name, job, salary
FROM employees
WHERE salary > 110000
ORDER BY salary DESC
LIMIT 5;`,
  },
  {
    id: 'sql-join',
    label: 'JOIN + GROUP BY',
    code: `-- average salary and headcount per department
SELECT d.name                AS dept,
       COUNT(*)              AS people,
       ROUND(AVG(e.salary))  AS avg_salary,
       MAX(e.salary)         AS top_pay
FROM employees e
JOIN departments d ON d.dept_id = e.dept_id
GROUP BY d.name
ORDER BY avg_salary DESC;`,
  },
  {
    id: 'sql-subquery',
    label: 'Subquery + HAVING',
    code: `-- departments whose average salary beats the company average
SELECT d.name,
       ROUND(AVG(e.salary)) AS dept_avg
FROM employees e
JOIN departments d ON d.dept_id = e.dept_id
GROUP BY d.name
HAVING AVG(e.salary) > (SELECT AVG(salary) FROM employees)
ORDER BY dept_avg DESC;

-- everyone in the best-funded active project
SELECT p.title, p.budget, d.name AS dept
FROM projects p
JOIN departments d ON d.dept_id = p.dept_id
WHERE p.status = 'active'
ORDER BY p.budget DESC;`,
  },
  {
    id: 'sql-window',
    label: 'Window functions',
    code: `-- rank salaries inside each department (no GROUP BY collapse)
SELECT name,
       dept_id,
       salary,
       RANK()       OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rank_in_dept,
       ROUND(AVG(salary) OVER (PARTITION BY dept_id))                AS dept_avg,
       salary - ROUND(AVG(salary) OVER (PARTITION BY dept_id))       AS vs_avg
FROM employees
ORDER BY dept_id, rank_in_dept;`,
  },
  {
    id: 'sql-ddl',
    label: 'CREATE + INSERT',
    code: `-- build your own table, then query it
CREATE TABLE courses (
  code  TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  credits INTEGER CHECK (credits BETWEEN 1 AND 6)
);

INSERT INTO courses (code, title, credits) VALUES
  ('CS101', 'Programming in C',        4),
  ('CS201', 'Data Structures',         4),
  ('MA301', 'Linear Algebra',          3),
  ('PH402', 'Quantum Mechanics',       5);

SELECT code, title, credits
FROM courses
WHERE credits >= 4
ORDER BY credits DESC, code;`,
  },
]

/* ------------------------------------------------------------------ */
/*  Variant configuration                                              */
/* ------------------------------------------------------------------ */

const VARIANTS: Record<CodeVariant, VariantConfig> = {
  c: {
    title: 'C Playground',
    subtitle:
      'Real gcc, really compiling — printf, loops, pointers, structs. Edit any example, press Run, read the output.',
    filename: 'main.c',
    icon: 'C',
    accentText: 'text-teal-400',
    accentBg: 'bg-teal-500/10 ring-teal-500/20',
    accentSolid: 'bg-teal-600 hover:bg-teal-500',
    runningLabel: 'gcc compiling…',
    presets: C_PRESETS,
  },
  cpp: {
    title: 'C++ Playground',
    subtitle:
      'Real g++ with -std=c++20 — vectors, classes, templates, RAII. Edit any example, press Run, read the output.',
    filename: 'main.cpp',
    icon: 'C++',
    accentText: 'text-violet-400',
    accentBg: 'bg-violet-500/10 ring-violet-500/20',
    accentSolid: 'bg-violet-600 hover:bg-violet-500',
    runningLabel: 'g++ compiling…',
    presets: CPP_PRESETS,
  },
  java: {
    title: 'Java Playground',
    subtitle:
      'Real OpenJDK 21 — records, streams, generics, lambdas. Edit any example, press Run, read the output.',
    filename: 'Main.java',
    icon: 'J',
    accentText: 'text-orange-400',
    accentBg: 'bg-orange-500/10 ring-orange-500/20',
    accentSolid: 'bg-orange-600 hover:bg-orange-500',
    runningLabel: 'JVM starting…',
    presets: JAVA_PRESETS,
  },
  ts: {
    title: 'TypeScript Playground',
    subtitle:
      'Bun runs TypeScript natively — interfaces, narrowing, generics. Edit any example, press Run, read the output.',
    filename: 'main.ts',
    icon: 'TS',
    accentText: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10 ring-emerald-500/20',
    accentSolid: 'bg-emerald-600 hover:bg-emerald-500',
    runningLabel: 'bun executing…',
    presets: TS_PRESETS,
  },
  python: {
    title: 'Python Playground',
    subtitle:
      'Real CPython 3.13 — dataclasses, comprehensions, gradient descent, even a hash chain. Edit, Run, read.',
    filename: 'main.py',
    icon: 'Py',
    accentText: 'text-amber-400',
    accentBg: 'bg-amber-500/10 ring-amber-500/20',
    accentSolid: 'bg-amber-600 hover:bg-amber-500',
    runningLabel: 'python running…',
    presets: PYTHON_PRESETS,
  },
  sql: {
    title: 'SQL Playground',
    subtitle:
      'A real SQLite engine with a seeded demo database — joins, groups, window functions. Write a query, press Run.',
    filename: 'query.sql',
    icon: 'DB',
    accentText: 'text-fuchsia-400',
    accentBg: 'bg-fuchsia-500/10 ring-fuchsia-500/20',
    accentSolid: 'bg-fuchsia-600 hover:bg-fuchsia-500',
    runningLabel: 'sqlite executing…',
    presets: SQL_PRESETS,
    note: 'demo database · departments(dept_id, name, building) · employees(emp_id, name, dept_id, job, salary, hired) · projects(proj_id, title, dept_id, budget, status)',
  },
}

/* ------------------------------------------------------------------ */
/*  Runner response                                                    */
/* ------------------------------------------------------------------ */

interface RunResult {
  ok: boolean
  stage: 'compile' | 'run' | 'sql' | 'rejected'
  exitCode: number | null
  stdout: string
  stderr: string
  compileStderr: string
  timedOut: boolean
  durationMs: number
  runner: string
}

const RUN_ENDPOINT = '/run?XTransformPort=3020'

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function CodePlayground({ variant }: { variant: CodeVariant }) {
  const cfg = VARIANTS[variant]
  const reduced = useReducedMotion()

  const [presetId, setPresetId] = useState(cfg.presets[0].id)
  const [code, setCode] = useState(cfg.presets[0].code)
  const [dirty, setDirty] = useState(false)
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle')
  const [result, setResult] = useState<RunResult | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)

  const taRef = useRef<HTMLTextAreaElement>(null)
  const gutterRef = useRef<HTMLDivElement>(null)
  const outRef = useRef<HTMLDivElement>(null)
  const runStampRef = useRef(0)

  const preset = useMemo(
    () => cfg.presets.find((p) => p.id === presetId) ?? cfg.presets[0],
    [cfg, presetId],
  )
  const lineCount = useMemo(() => code.split('\n').length, [code])

  const run = useCallback(async () => {
    const stamp = ++runStampRef.current
    setPhase('running')
    setFetchError(null)
    try {
      const res = await fetch(RUN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang: variant, code }),
      })
      if (!res.ok) {
        const txt = await res.text().catch(() => '')
        throw new Error(`runner responded ${res.status} ${txt.slice(0, 140)}`)
      }
      const data = (await res.json()) as RunResult
      if (runStampRef.current !== stamp) return
      setResult(data)
      setPhase('done')
    } catch (e) {
      if (runStampRef.current !== stamp) return
      setFetchError(
        (e as Error).message ||
          'cannot reach the code runner — is mini-services/code-runner up?',
      )
      setPhase('idle')
    }
  }, [code, variant])

  const clearOutput = () => {
    runStampRef.current += 1
    setResult(null)
    setFetchError(null)
    setPhase('idle')
  }

  const loadPreset = (p: Preset) => {
    setPresetId(p.id)
    setCode(p.code)
    setDirty(false)
    clearOutput()
  }

  useEffect(() => {
    const el = outRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [result])

  /* ---------------- editor keyboard behaviour ---------------- */

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const ta = e.currentTarget
    if (e.key === 'Tab') {
      e.preventDefault()
      const s = ta.selectionStart
      const en = ta.selectionEnd
      if (e.shiftKey) {
        const lineStart = ta.value.lastIndexOf('\n', s - 1) + 1
        const indent = ta.value.slice(lineStart, s)
        const spaces = indent.length - indent.trimStart().length
        if (spaces > 0) {
          const cut = Math.min(2, spaces)
          ta.setSelectionRange(lineStart, lineStart + cut)
          ta.setRangeText('', lineStart, lineStart + cut, 'end')
          setCode(ta.value)
        }
      } else {
        ta.setRangeText('  ', s, en, 'end')
        setCode(ta.value)
      }
    } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      void run()
    }
  }

  const syncGutter = () => {
    if (gutterRef.current && taRef.current) {
      gutterRef.current.scrollTop = taRef.current.scrollTop
    }
  }

  /* ---------------- derived output pieces ---------------- */

  const compileFailed = !!result && !!result.compileStderr
  const outLines = result ? result.stdout.replace(/\n$/, '').split('\n') : []
  const errLines = result && result.stderr ? result.stderr.replace(/\n$/, '').split('\n') : []

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'mt-0.5 rounded-xl p-2.5 font-mono text-xs font-bold ring-1',
            cfg.accentBg,
            cfg.accentText,
          )}
          aria-hidden="true"
        >
          {cfg.icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">{cfg.title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{cfg.subtitle}</p>
        </div>
      </div>

      {/* presets */}
      <div role="group" aria-label={`${cfg.title} example programs`} className="mt-4 flex flex-wrap gap-1.5">
        {cfg.presets.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => loadPreset(p)}
            aria-pressed={presetId === p.id}
            className={cn(
              'rounded-lg border px-2.5 py-1.5 text-xs font-medium transition',
              presetId === p.id
                ? cn('text-white', cfg.accentSolid, 'border-transparent')
                : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground',
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* editor + output */}
      <div className="mt-4 grid gap-3 lg:grid-cols-5">
        {/* editor */}
        <section
          aria-label="Code editor"
          className="flex flex-col overflow-hidden rounded-xl border border-border bg-background/60 lg:col-span-3"
        >
          <header className="flex items-center gap-2 border-b border-border px-3 py-2">
            {dirty ? (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
            ) : (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/60" aria-hidden="true" />
            )}
            <span className="font-mono text-xs text-foreground">{cfg.filename}</span>
            <span className="text-[10px] text-muted-foreground">
              {lineCount} lines · {code.length} chars
            </span>
            <Button
              size="sm"
              onClick={() => void run()}
              disabled={phase === 'running'}
              aria-label={`Run ${cfg.title} program`}
              className="ml-auto gap-1.5"
            >
              {phase === 'running' ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              ) : (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {phase === 'running' ? cfg.runningLabel : 'Run'}
            </Button>
          </header>
          <div className="flex h-[360px]">
            <div
              ref={gutterRef}
              aria-hidden="true"
              className="h-full w-10 shrink-0 select-none overflow-hidden border-r border-border bg-muted/20 py-3 text-right font-mono text-[13px] leading-6 text-muted-foreground/40"
            >
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} className="pr-2">
                  {i + 1}
                </div>
              ))}
            </div>
            <textarea
              ref={taRef}
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setDirty(true)
              }}
              onKeyDown={onKeyDown}
              onScroll={syncGutter}
              spellCheck={false}
              wrap="off"
              aria-label={`${cfg.title} code editor. Tab inserts two spaces. Press Control or Command plus Enter to run.`}
              className="h-full flex-1 resize-none bg-transparent py-3 pl-3 pr-4 font-mono text-[13px] leading-6 text-foreground caret-emerald-400 outline-none"
            />
          </div>
          <footer className="flex items-center gap-2 border-t border-border px-3 py-1.5 text-[10px] text-muted-foreground">
            <span>
              <kbd className="rounded border border-border bg-muted/40 px-1 py-0.5 font-mono">Tab</kbd> inserts 2
              spaces · <kbd className="rounded border border-border bg-muted/40 px-1 py-0.5 font-mono">Ctrl/Cmd + Enter</kbd> runs
            </span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => loadPreset(preset)}
              disabled={!dirty}
              className="ml-auto h-6 gap-1 px-2 text-[10px]"
              aria-label="Restore the preset program"
            >
              <RotateCcw className="h-3 w-3" /> Reset preset
            </Button>
          </footer>
        </section>

        {/* output */}
        <section
          aria-label="Output console"
          className="flex flex-col overflow-hidden rounded-xl border border-border bg-background/70 lg:col-span-2"
        >
          <header className="flex items-center gap-2 border-b border-border px-3 py-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              output
            </span>
            <Button
              size="sm"
              variant="ghost"
              onClick={clearOutput}
              className="ml-auto h-6 w-6 p-0"
              aria-label="Clear output"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </header>

          <div
            ref={outRef}
            role="log"
            aria-live="polite"
            className="h-[360px] flex-1 overflow-y-auto px-3 py-3"
          >
            <AnimatePresence mode="wait">
              {fetchError ? (
                <motion.div
                  key="offline"
                  initial={reduced ? false : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center"
                >
                  <ServerCrash className="h-8 w-8 text-rose-400/80" aria-hidden="true" />
                  <p className="text-xs font-semibold text-rose-300">Code runner unreachable</p>
                  <p className="break-words font-mono text-[10px] leading-relaxed text-muted-foreground">
                    {fetchError}
                  </p>
                  <Button size="sm" variant="outline" onClick={() => void run()} className="gap-1.5">
                    <RotateCcw className="h-3 w-3" /> Retry
                  </Button>
                </motion.div>
              ) : compileFailed && result ? (
                <motion.div
                  key="compile"
                  initial={reduced ? false : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="flex h-full flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-rose-300">
                    <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <p className="text-xs font-semibold">
                      Compile failed — {result.runner}
                    </p>
                  </div>
                  <pre className="flex-1 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-rose-500/[0.07] p-3 font-mono text-[11px] leading-relaxed text-rose-200/90">
                    {result.compileStderr}
                  </pre>
                </motion.div>
              ) : result ? (
                <motion.div
                  key={`run-${result.durationMs}`}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-mono text-[12.5px] leading-6"
                >
                  {outLines.length === 1 && outLines[0] === '' ? (
                    <p className="text-[11px] italic text-muted-foreground/60">
                      (program finished with no output)
                    </p>
                  ) : (
                    outLines.map((line, i) => (
                      <div key={i} className="whitespace-pre-wrap break-words text-foreground/90">
                        {line || '\u00A0'}
                      </div>
                    ))
                  )}
                  {errLines.map((line, i) => (
                    <div key={`e${i}`} className="whitespace-pre-wrap break-words text-rose-300/90">
                      {line || '\u00A0'}
                    </div>
                  ))}
                  {result.timedOut && (
                    <div className="mt-2 flex items-center gap-1.5 text-amber-300">
                      <Timer className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="text-[11px] font-semibold">
                        timed out — wall-clock limit reached, program was killed
                      </span>
                    </div>
                  )}
                </motion.div>
              ) : phase === 'running' ? (
                <motion.div
                  key="pending"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full items-center justify-center gap-2.5 text-muted-foreground"
                >
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  <span className="text-xs">{cfg.runningLabel}</span>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full flex-col items-center justify-center gap-2.5 text-center"
                >
                  <Terminal className={cn('h-7 w-7 opacity-50', cfg.accentText)} aria-hidden="true" />
                  <p className="max-w-[26ch] text-[11px] leading-relaxed text-muted-foreground">
                    Press <span className="font-semibold text-foreground">Run</span> — your code goes to a real{' '}
                    {cfg.title.replace(' Playground', '')} toolchain.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* status bar */}
          {result && !fetchError && !compileFailed && (
            <footer
              className="flex items-center gap-2 border-t border-border px-3 py-1.5 text-[10px] text-muted-foreground"
              aria-label="Run status"
            >
              {result.ok ? (
                <CircleCheck className="h-3 w-3 shrink-0 text-emerald-400" aria-hidden="true" />
              ) : (
                <TriangleAlert className="h-3 w-3 shrink-0 text-rose-400" aria-hidden="true" />
              )}
              <span className="truncate font-mono">
                {result.runner} · exit {result.exitCode ?? '—'} · {result.durationMs.toFixed(0)} ms
              </span>
            </footer>
          )}
        </section>
      </div>

      {/* per-variant note (SQL schema hint) */}
      {cfg.note && (
        <p className="mt-3 break-words font-mono text-[10px] leading-relaxed text-muted-foreground/70">
          {cfg.note}
        </p>
      )}
    </div>
  )
}
