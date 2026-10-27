// ============================================================================
// Flanagan, JavaScript: The Definitive Guide, 7th Edition — chapter/section
// metadata (bookId 'flanagan-js7'). Round 9.
// Lab mapping: every chapter → 'js-playground' EXCEPT ch13 → 'event-loop-lab'.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../library'

export const JS_CHAPTERS: ChapterMeta[] = [
  { id: 'js-ch1', bookId: 'flanagan-js7', number: 1, title: 'Introduction to JavaScript', shortTitle: 'Introduction', description: 'What JavaScript is (interpreted, dynamic, functional, prototype-based), how to explore it with the browser console and the Node REPL, Hello World in both hosts, a guided tour of types, objects, functions, classes, modules and async, and the character-frequency histogram program.', icon: 'code', pages: '1–14', interactiveKey: 'js-playground' },
  { id: 'js-ch2', bookId: 'flanagan-js7', number: 2, title: 'Lexical Structure', shortTitle: 'Lexical Structure', description: 'The lowest-level grammar of the language: case sensitivity and whitespace, comments, literals, identifiers and reserved words, the Unicode character set with escape sequences, and the rules (and hazards) of optional semicolons.', icon: 'type', pages: '15–22', interactiveKey: 'js-playground' },
  { id: 'js-ch3', bookId: 'flanagan-js7', number: 3, title: 'Types, Values, and Variables', shortTitle: 'Types & Values', description: 'The core data model: numbers (IEEE 754 doubles, BigInt, NaN, Infinity), strings and template literals, booleans, null and undefined, symbols and the global object, primitive immutability versus object references, type conversion rules, and let/const/var with destructuring.', icon: 'tag', pages: '23–60', interactiveKey: 'js-playground' },
  { id: 'js-ch4', bookId: 'flanagan-js7', number: 4, title: 'Expressions and Operators', shortTitle: 'Expressions & Operators', description: 'How JavaScript builds values from simpler values: primary and initializer expressions, property access, invocation and object creation, the operator precedence table, arithmetic including bitwise, equality and comparison, short-circuiting logical operators, assignment, and eval.', icon: 'calculator', pages: '61–96', interactiveKey: 'js-playground' },
  { id: 'js-ch5', bookId: 'flanagan-js7', number: 5, title: 'Statements', shortTitle: 'Statements', description: 'The sentences of the language: expression and compound statements, if/else and switch, the five loops (while, do/while, for, for/of, for/in), jumps with break, continue, return, yield and throw, try/catch/finally, and strict mode.', icon: 'list', pages: '97–128', interactiveKey: 'js-playground' },
  { id: 'js-ch6', bookId: 'flanagan-js7', number: 6, title: 'Objects', shortTitle: 'Objects', description: 'Creating, querying, setting, deleting, testing and enumerating properties; prototypes and inheritance; serializing objects; methods, getters/setters and the extended object literal syntax.', icon: 'package', pages: '129–154', interactiveKey: 'js-playground' },
  { id: 'js-ch7', bookId: 'flanagan-js7', number: 7, title: 'Arrays', shortTitle: 'Arrays', description: 'Array creation and element access, sparse arrays and length semantics, adding, deleting and iterating, the full method catalogue (map, filter, reduce, sort, …), and array-like objects and strings as arrays.', icon: 'list-ordered', pages: '155–181', interactiveKey: 'js-playground' },
  { id: 'js-ch8', bookId: 'flanagan-js7', number: 8, title: 'Functions', shortTitle: 'Functions', description: 'Defining and invoking functions, parameters and arguments, functions as values and namespaces, closures and the variable environment, function properties and methods, and functional programming with map, filter and reduce.', icon: 'shuffle', pages: '182–221', interactiveKey: 'js-playground' },
  { id: 'js-ch9', bookId: 'flanagan-js7', number: 9, title: 'Classes', shortTitle: 'Classes', description: 'Prototypes and constructor functions, the class keyword, instance methods, statics, getters and setters, adding methods to existing classes, and subclassing with extends and super.', icon: 'users', pages: '222–248', interactiveKey: 'js-playground' },
  { id: 'js-ch10', bookId: 'flanagan-js7', number: 10, title: 'Modules', shortTitle: 'Modules', description: 'Code organization before and after ES6: modules built from classes, objects and closures, CommonJS modules in Node, and the native import/export system of ES6.', icon: 'folder-tree', pages: '249–266', interactiveKey: 'js-playground' },
  { id: 'js-ch11', bookId: 'flanagan-js7', number: 11, title: 'The JavaScript Standard Library', shortTitle: 'Standard Library', description: 'The built-in API every program gets: Sets and Maps, typed arrays and binary data, regular expressions, Dates and Error classes, JSON serialization, and internationalization, console and URL utilities.', icon: 'library', pages: '267–326', interactiveKey: 'js-playground' },
  { id: 'js-ch12', bookId: 'flanagan-js7', number: 12, title: 'Iterators and Generators', shortTitle: 'Iterators & Generators', description: 'How iteration actually works: the iteration protocol, making your own classes iterable, generator functions and yield, and advanced generator features like send and return.', icon: 'repeat', pages: '327–340', interactiveKey: 'js-playground' },
  { id: 'js-ch13', bookId: 'flanagan-js7', number: 13, title: 'Asynchronous JavaScript', shortTitle: 'Async JavaScript', description: 'Callbacks and events, promises end to end, async and await, and asynchronous iteration — how the single-threaded event loop keeps JavaScript responsive while I/O is in flight.', icon: 'clock', pages: '341–378', interactiveKey: 'event-loop-lab' },
  { id: 'js-ch14', bookId: 'flanagan-js7', number: 14, title: 'Metaprogramming', shortTitle: 'Metaprogramming', description: 'JavaScript reflecting on itself: property attributes and extensibility, the prototype attribute, well-known symbols, tagged template literals, the Reflect API, and proxy objects.', icon: 'sliders-horizontal', pages: '379–408', interactiveKey: 'js-playground' },
  { id: 'js-ch15', bookId: 'flanagan-js7', number: 15, title: 'JavaScript in Web Browsers', shortTitle: 'Web Browsers', description: 'The browser host environment: scripts and events, the DOM, scripting CSS, document geometry, web components, SVG and Canvas graphics, audio, history and navigation, networking, storage and workers — the longest chapter of the book.', icon: 'globe', pages: '409–576', interactiveKey: 'js-playground' },
  { id: 'js-ch16', bookId: 'flanagan-js7', number: 16, title: 'Server-Side JavaScript with Node', shortTitle: 'Node', description: 'JavaScript outside the browser: the Node programming model, asynchronous-by-default APIs, buffers, events and streams, process and OS details, file and HTTP programming, and servers, child processes and worker threads.', icon: 'hexagon', pages: '577–634', interactiveKey: 'js-playground' },
  { id: 'js-ch17', bookId: 'flanagan-js7', number: 17, title: 'JavaScript Tools and Extensions', shortTitle: 'Tools & Extensions', description: 'The modern toolchain: linting with ESLint and formatting with Prettier, unit testing with Jest, packages and bundlers, transpilation with Babel, the JSX extension, and static types with Flow and TypeScript.', icon: 'hammer', pages: '635–666', interactiveKey: 'js-playground' },
]

export const JS_SECTIONS: SectionMeta[] = [
  // ---- Chapter 1: Introduction to JavaScript ----
  { id: 'js-ch1-s1', chapterId: 'js-ch1', number: 1.1, title: 'Exploring JavaScript', description: 'What kind of language JavaScript is — interpreted, dynamic, untyped, functional and prototype-based — its names, versions and strict mode, and how to try it live in the browser console and the Node REPL.' },
  { id: 'js-ch1-s2', chapterId: 'js-ch1', number: 1.2, title: 'Hello World and a Tour of JavaScript', description: 'Hello World with node and the browser, then a code-first tour: values, objects, arrays, operators, functions, methods, classes, modules and async.' },
  { id: 'js-ch1-s3', chapterId: 'js-ch1', number: 1.3, title: 'Example: Character Frequency Histograms', description: 'A complete worked Node program — a Map subclass with defaults, a Histogram class, and an async stdin pipeline — read end to end.' },
  // ---- Chapter 2: Lexical Structure ----
  { id: 'js-ch2-s1', chapterId: 'js-ch2', number: 2.1, title: 'The Text of a JavaScript Program', description: 'Case sensitivity, ignored whitespace and line terminators — the character-level ground rules of every program.' },
  { id: 'js-ch2-s2', chapterId: 'js-ch2', number: 2.2, title: 'Comments and Literals', description: 'Single-line and block comments, and literals: the data values written directly in source.' },
  { id: 'js-ch2-s3', chapterId: 'js-ch2', number: 2.3, title: 'Identifiers and Reserved Words', description: 'Naming rules for variables, functions and classes, the reserved-word list, and the contextual keywords that are still safe.' },
  { id: 'js-ch2-s4', chapterId: 'js-ch2', number: 2.4, title: 'Unicode', description: 'Unicode in strings, comments and identifiers; escape sequences, the global symbol registry of characters, and normalization pitfalls.' },
  { id: 'js-ch2-s5', chapterId: 'js-ch2', number: 2.5, title: 'Optional Semicolons', description: 'Automatic semicolon insertion: when line breaks become semicolons, and the three exceptions that cause surprising bugs.' },
  // ---- Chapter 3: Types, Values, and Variables ----
  { id: 'js-ch3-s1', chapterId: 'js-ch3', number: 3.1, title: 'Overview and Definitions', description: 'Primitive types versus object types, the special-purpose objects, functions as values, and garbage collection.' },
  { id: 'js-ch3-s2', chapterId: 'js-ch3', number: 3.2, title: 'Numbers', description: 'IEEE 754 doubles, integer precision limits, hex/binary/octal literals, Math, NaN and Infinity, rounding error, BigInt, number formatting and parsing.' },
  { id: 'js-ch3-s3', chapterId: 'js-ch3', number: 3.3, title: 'Text', description: 'Strings as immutable UTF-16 sequences, escapes, the method catalogue, template literals and a first look at regular expressions.' },
  { id: 'js-ch3-s4', chapterId: 'js-ch3', number: 3.4, title: 'Boolean Values, null and undefined', description: 'The two booleans and truthiness, and the two very different kinds of absence.' },
  { id: 'js-ch3-s5', chapterId: 'js-ch3', number: 3.5, title: 'Symbols and the Global Object', description: 'Symbols as unique, collision-proof property keys and language extension mechanism, plus the global object in Node, browsers and ES2020 globalThis.' },
  { id: 'js-ch3-s6', chapterId: 'js-ch3', number: 3.6, title: 'Immutable Primitives and Mutable Object References', description: 'Why strings never change and objects always do: compare-by-value, compare-by-reference, and copying.' },
  { id: 'js-ch3-s7', chapterId: 'js-ch3', number: 3.7, title: 'Type Conversions', description: 'Explicit conversions, the implicit conversion table, equality with coercion, and object-to-primitive algorithms via valueOf() and toString().' },
  { id: 'js-ch3-s8', chapterId: 'js-ch3', number: 3.8, title: 'Variable Declaration and Assignment', description: 'let, const and var: block scope, the temporal dead zone, hoisting hazards, and destructuring assignment with defaults, rest and nesting.' },
  // ---- Chapter 4: Expressions and Operators ----
  { id: 'js-ch4-s1', chapterId: 'js-ch4', number: 4.1, title: 'Primary, Object and Array Initializer Expressions', description: 'Literals, keywords and variable references as the atoms of evaluation, plus the object and array initializer syntax.' },
  { id: 'js-ch4-s2', chapterId: 'js-ch4', number: 4.2, title: 'Function Definition, Property Access and Invocation', description: 'Function definition expressions, the two property access syntaxes, ES2020 conditional access with ?., and invocation with this.' },
  { id: 'js-ch4-s3', chapterId: 'js-ch4', number: 4.3, title: 'Object Creation and Operator Overview', description: 'The new keyword, then the complete operator reference: arity, operand types, side effects, precedence and associativity.' },
  { id: 'js-ch4-s4', chapterId: 'js-ch4', number: 4.4, title: 'Arithmetic Expressions', description: 'Exponentiation to modulo, the two-faced + operator, unary arithmetic and increment, and the bitwise operators on 32-bit integers.' },
  { id: 'js-ch4-s5', chapterId: 'js-ch4', number: 4.5, title: 'Relational Expressions', description: 'Strict === versus converting ==, comparison order rules, and the in and instanceof operators.' },
  { id: 'js-ch4-s6', chapterId: 'js-ch4', number: 4.6, title: 'Logical and Assignment Expressions', description: 'Short-circuiting && and || as value selectors, the ?? operator, assignment and operate-and-assign, and the dangers of eval().' },
  { id: 'js-ch4-s7', chapterId: 'js-ch4', number: 4.7, title: 'Evaluation and Miscellaneous Operators', description: 'The conditional ?: operator, typeof, delete, void, the comma operator, and a first look at await.' },
  // ---- Chapter 5: Statements ----
  { id: 'js-ch5-s1', chapterId: 'js-ch5', number: 5.1, title: 'Expression and Compound Statements', description: 'Statements as commands: expression statements, declaration statements, blocks and the empty statement.' },
  { id: 'js-ch5-s2', chapterId: 'js-ch5', number: 5.2, title: 'Conditionals: if/else and switch', description: 'Branching with if, else if chains, the dangling else, and switch with its case-label and fallthrough semantics.' },
  { id: 'js-ch5-s3', chapterId: 'js-ch5', number: 5.3, title: 'Loops: while, do, for, for/of and for/in', description: 'All five loops — their anatomy, iterable objects, and the classic for/in versus for/of trap on arrays.' },
  { id: 'js-ch5-s4', chapterId: 'js-ch5', number: 5.4, title: 'Jumps: break, continue, return, yield, throw, try/catch', description: 'Labels, breaking out of nested loops, per-loop continue semantics, return and yield, throwing exceptions, and try/catch/finally.' },
  { id: 'js-ch5-s5', chapterId: 'js-ch5', number: 5.5, title: 'Miscellaneous Statements and Strict Mode', description: 'The forbidden with, the debugger breakpoint, and every behavioral change strict mode brings.' },
  // ---- Chapter 6: Objects ----
  { id: 'js-ch6-s1', chapterId: 'js-ch6', number: 6.1, title: 'Introduction to Objects', description: 'Objects as property collections, the property model, and how objects are created and used.' },
  { id: 'js-ch6-s2', chapterId: 'js-ch6', number: 6.2, title: 'Creating Objects', description: 'Object literals, constructors, Object.create and prototypes.' },
  { id: 'js-ch6-s3', chapterId: 'js-ch6', number: 6.3, title: 'Querying, Setting and Deleting Properties', description: 'Reading, writing, creating and removing properties with . and [].' },
  { id: 'js-ch6-s4', chapterId: 'js-ch6', number: 6.4, title: 'Testing and Enumerating Properties', description: 'in, hasOwnProperty, propertyIsEnumerable and the enumeration order rules.' },
  { id: 'js-ch6-s5', chapterId: 'js-ch6', number: 6.5, title: 'Extending and Serializing Objects', description: 'Spread and rest syntax, and JSON serialization round trips.' },
  { id: 'js-ch6-s6', chapterId: 'js-ch6', number: 6.6, title: 'Object Methods and Extended Object Literal Syntax', description: 'The object spread, shorthand methods, computed property names, getters and setters.' },
  // ---- Chapter 7: Arrays ----
  { id: 'js-ch7-s1', chapterId: 'js-ch7', number: 7.1, title: 'Creating Arrays and Array Elements', description: 'Array literals, the Array constructor and reading/writing elements.' },
  { id: 'js-ch7-s2', chapterId: 'js-ch7', number: 7.2, title: 'Sparse Arrays and Array Length', description: 'Holes, the length property and how it grows and shrinks.' },
  { id: 'js-ch7-s3', chapterId: 'js-ch7', number: 7.3, title: 'Adding, Deleting and Iterating', description: 'push/pop/shift/unshift, splice, delete and holes, and the iteration options.' },
  { id: 'js-ch7-s4', chapterId: 'js-ch7', number: 7.4, title: 'Array Methods', description: 'The full toolkit: map, filter, find, every/some, reduce, sort, and the rest.' },
  { id: 'js-ch7-s5', chapterId: 'js-ch7', number: 7.5, title: 'Multidimensional, Array-Like Objects and Strings as Arrays', description: 'Nested arrays, array-like objects and iterating strings.' },
  // ---- Chapter 8: Functions ----
  { id: 'js-ch8-s1', chapterId: 'js-ch8', number: 8.1, title: 'Defining Functions', description: 'Function declarations, expressions, arrow functions and the differences between them.' },
  { id: 'js-ch8-s2', chapterId: 'js-ch8', number: 8.2, title: 'Invoking Functions', description: 'As functions, methods, constructors and indirectly — and what this is each time.' },
  { id: 'js-ch8-s3', chapterId: 'js-ch8', number: 8.3, title: 'Function Arguments and Parameters', description: 'Default values, rest parameters, the Arguments object and parameter destructuring.' },
  { id: 'js-ch8-s4', chapterId: 'js-ch8', number: 8.4, title: 'Functions as Values and Namespaces', description: 'Passing functions around and using closures as namespaces.' },
  { id: 'js-ch8-s5', chapterId: 'js-ch8', number: 8.5, title: 'Closures', description: 'Lexical scoping and functions that capture their defining environment.' },
  { id: 'js-ch8-s6', chapterId: 'js-ch8', number: 8.6, title: 'Function Properties, Methods and the Constructor', description: 'name, length, call, apply, bind and the Function constructor.' },
  { id: 'js-ch8-s7', chapterId: 'js-ch8', number: 8.7, title: 'Functional Programming', description: 'Processing arrays with map, filter, reduce and higher-order functions.' },
  // ---- Chapter 9: Classes ----
  { id: 'js-ch9-s1', chapterId: 'js-ch9', number: 9.1, title: 'Classes and Prototypes', description: 'How prototype-based classes work before any class syntax.' },
  { id: 'js-ch9-s2', chapterId: 'js-ch9', number: 9.2, title: 'Classes and Constructors', description: 'Constructor functions, prototypes and the instanceof relationship.' },
  { id: 'js-ch9-s3', chapterId: 'js-ch9', number: 9.3, title: 'Classes with the class Keyword', description: 'The modern syntax: declarations, expressions, methods, statics and accessors.' },
  { id: 'js-ch9-s4', chapterId: 'js-ch9', number: 9.4, title: 'Adding Methods to Existing Classes', description: 'Prototype patching and its pitfalls.' },
  { id: 'js-ch9-s5', chapterId: 'js-ch9', number: 9.5, title: 'Subclasses', description: 'Inheritance with extends, super calls and the prototype chain.' },
  // ---- Chapter 10: Modules ----
  { id: 'js-ch10-s1', chapterId: 'js-ch10', number: 10.1, title: 'Modules with Classes, Objects and Closures', description: 'The pre-module era: encapsulation built from functions and closures.' },
  { id: 'js-ch10-s2', chapterId: 'js-ch10', number: 10.2, title: 'Modules in Node', description: 'CommonJS require, exports and module caching.' },
  { id: 'js-ch10-s3', chapterId: 'js-ch10', number: 10.3, title: 'Modules in ES6', description: 'import, export, default exports, renamed imports and dynamic import().' },
  // ---- Chapter 11: The JavaScript Standard Library ----
  { id: 'js-ch11-s1', chapterId: 'js-ch11', number: 11.1, title: 'Sets and Maps', description: 'The ES6 set and dictionary collections and their iteration semantics.' },
  { id: 'js-ch11-s2', chapterId: 'js-ch11', number: 11.2, title: 'Typed Arrays and Binary Data', description: 'Buffers and views for bytes: ArrayBuffer, typed arrays and DataView.' },
  { id: 'js-ch11-s3', chapterId: 'js-ch11', number: 11.3, title: 'Pattern Matching with Regular Expressions', description: 'The RegExp literal grammar, character classes, anchors, groups and repetition.' },
  { id: 'js-ch11-s4', chapterId: 'js-ch11', number: 11.4, title: 'Dates and Times, Error Classes', description: 'Creating, parsing and formatting dates, and the Error hierarchy.' },
  { id: 'js-ch11-s5', chapterId: 'js-ch11', number: 11.5, title: 'JSON Serialization and Parsing', description: 'JSON.stringify and JSON.parse with replacers and revivers.' },
  { id: 'js-ch11-s6', chapterId: 'js-ch11', number: 11.6, title: 'Internationalization, Console and URL APIs', description: 'Intl formatting and collation, console output, and the URL class.' },
  // ---- Chapter 12: Iterators and Generators ----
  { id: 'js-ch12-s1', chapterId: 'js-ch12', number: 12.1, title: 'How Iterators Work', description: 'The iterator protocol: next(), done and value, and iterable objects.' },
  { id: 'js-ch12-s2', chapterId: 'js-ch12', number: 12.2, title: 'Implementing Iterable Objects', description: 'Making your own classes work with for/of and the spread operator.' },
  { id: 'js-ch12-s3', chapterId: 'js-ch12', number: 12.3, title: 'Generators', description: 'function* and yield: writing iterators as simple sequential code.' },
  { id: 'js-ch12-s4', chapterId: 'js-ch12', number: 12.4, title: 'Advanced Generator Features', description: 'Return values, yield*, and generators as asynchronous control structures.' },
  // ---- Chapter 13: Asynchronous JavaScript ----
  { id: 'js-ch13-s1', chapterId: 'js-ch13', number: 13.1, title: 'Asynchronous Programming with Callbacks', description: 'Events, callbacks, callback hell and error-first conventions.' },
  { id: 'js-ch13-s2', chapterId: 'js-ch13', number: 13.2, title: 'Promises', description: 'Promise states, then/catch/finally, composition and sequential asynchronous code.' },
  { id: 'js-ch13-s3', chapterId: 'js-ch13', number: 13.3, title: 'async and await', description: 'Asynchronous functions, the await operator and parallel versus sequential execution.' },
  { id: 'js-ch13-s4', chapterId: 'js-ch13', number: 13.4, title: 'Asynchronous Iteration', description: 'for/await and asynchronous generators over streams of data.' },
  // ---- Chapter 14: Metaprogramming ----
  { id: 'js-ch14-s1', chapterId: 'js-ch14', number: 14.1, title: 'Property Attributes and Object Extensibility', description: 'Getting and setting writable, enumerable, configurable and get/set, and sealing objects.' },
  { id: 'js-ch14-s2', chapterId: 'js-ch14', number: 14.2, title: 'The prototype Attribute', description: 'Reading and changing an object’s prototype, prototype inheritance chains.' },
  { id: 'js-ch14-s3', chapterId: 'js-ch14', number: 14.3, title: 'Well-Known Symbols', description: 'Symbol.hasInstance, Symbol.iterator and friends as hooks into the language.' },
  { id: 'js-ch14-s4', chapterId: 'js-ch14', number: 14.4, title: 'Template Tags', description: 'Writing tag functions that process template literal strings and values.' },
  { id: 'js-ch14-s5', chapterId: 'js-ch14', number: 14.5, title: 'The Reflect API', description: 'Reflect.* methods: a functional mirror of core operators.' },
  { id: 'js-ch14-s6', chapterId: 'js-ch14', number: 14.6, title: 'Proxy Objects', description: 'Intercepting fundamental operations on objects with handlers.' },
  // ---- Chapter 15: JavaScript in Web Browsers ----
  { id: 'js-ch15-s1', chapterId: 'js-ch15', number: 15.1, title: 'Web Programming Basics', description: 'Scripts, the window object, the document tree and program lifecycle.' },
  { id: 'js-ch15-s2', chapterId: 'js-ch15', number: 15.2, title: 'Events', description: 'Event types, listeners, propagation, capturing and bubbling.' },
  { id: 'js-ch15-s3', chapterId: 'js-ch15', number: 15.3, title: 'Scripting Documents', description: 'Selecting, traversing, creating and modifying DOM nodes and attributes.' },
  { id: 'js-ch15-s4', chapterId: 'js-ch15', number: 15.4, title: 'Scripting CSS', description: 'Inline styles, computed styles, classes and stylesheets from JavaScript.' },
  { id: 'js-ch15-s5', chapterId: 'js-ch15', number: 15.5, title: 'Document Geometry and Scrolling', description: 'Coordinates, element sizing and programmatic scrolling.' },
  { id: 'js-ch15-s6', chapterId: 'js-ch15', number: 15.6, title: 'Web Components', description: 'Custom elements, shadow DOM and HTML templates.' },
  { id: 'js-ch15-s7', chapterId: 'js-ch15', number: 15.7, title: 'SVG and Canvas Graphics', description: 'Vector graphics in SVG and pixel graphics on the canvas.' },
  { id: 'js-ch15-s8', chapterId: 'js-ch15', number: 15.8, title: 'Audio APIs', description: 'Playing, synthesizing and analyzing sound in the browser.' },
  { id: 'js-ch15-s9', chapterId: 'js-ch15', number: 15.9, title: 'Location, Navigation and History', description: 'The URL bar, hyperlinks, programmatic navigation and the History API.' },
  { id: 'js-ch15-s10', chapterId: 'js-ch15', number: 15.10, title: 'Networking', description: 'fetch, XMLHttpRequest, Server-Sent Events and WebSockets.' },
  { id: 'js-ch15-s11', chapterId: 'js-ch15', number: 15.11, title: 'Storage', description: 'localStorage, sessionStorage, IndexedDB and cookies — persistence in the browser (compare OSC Ch 10 memory).' },
  { id: 'js-ch15-s12', chapterId: 'js-ch15', number: 15.12, title: 'Worker Threads and Messaging', description: 'True parallelism for JavaScript: dedicated and shared workers and postMessage.' },
  // ---- Chapter 16: Server-Side JavaScript with Node ----
  { id: 'js-ch16-s1', chapterId: 'js-ch16', number: 16.1, title: 'Node Programming Basics', description: 'Running Node, the module system, node/npm/npx and the global environment.' },
  { id: 'js-ch16-s2', chapterId: 'js-ch16', number: 16.2, title: 'Node Is Asynchronous by Default', description: 'The event-loop programming model behind every Node API.' },
  { id: 'js-ch16-s3', chapterId: 'js-ch16', number: 16.3, title: 'Buffers, Events and Streams', description: 'Byte buffers, the EventEmitter pattern and readable/writable streams.' },
  { id: 'js-ch16-s4', chapterId: 'js-ch16', number: 16.4, title: 'Process, CPU and OS Details', description: 'process, os and machine introspection from JavaScript.' },
  { id: 'js-ch16-s5', chapterId: 'js-ch16', number: 16.5, title: 'Working with Files', description: 'Reading, writing, watching and appending with the fs module.' },
  { id: 'js-ch16-s6', chapterId: 'js-ch16', number: 16.6, title: 'HTTP Clients and Servers', description: 'Building web clients and servers with the http module.' },
  { id: 'js-ch16-s7', chapterId: 'js-ch16', number: 16.7, title: 'Network Servers, Child Processes and Worker Threads', description: 'Net servers, exec and spawn, and off-thread workers in Node.' },
  // ---- Chapter 17: JavaScript Tools and Extensions ----
  { id: 'js-ch17-s1', chapterId: 'js-ch17', number: 17.1, title: 'Linting and Formatting: ESLint and Prettier', description: 'Static analysis and automatic style: configuring ESLint rules and Prettier formatting.' },
  { id: 'js-ch17-s2', chapterId: 'js-ch17', number: 17.2, title: 'Unit Testing with Jest', description: 'Writing and running tests: describe, it, expect and mocks.' },
  { id: 'js-ch17-s3', chapterId: 'js-ch17', number: 17.3, title: 'Package Management and Code Bundling', description: 'npm, package.json, semantic versioning and bundlers like webpack.' },
  { id: 'js-ch17-s4', chapterId: 'js-ch17', number: 17.4, title: 'Transpilation with Babel', description: 'Compiling modern JavaScript to run on older platforms.' },
  { id: 'js-ch17-s5', chapterId: 'js-ch17', number: 17.5, title: 'JSX: Markup Expressions in JavaScript', description: 'The React extension: embedding HTML-like syntax in expressions.' },
  { id: 'js-ch17-s6', chapterId: 'js-ch17', number: 17.6, title: 'Type Checking with Flow', description: 'Gradual typing for JavaScript with Flow annotations (and TypeScript).' },
]
