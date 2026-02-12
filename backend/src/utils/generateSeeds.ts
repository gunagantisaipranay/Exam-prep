import fs from 'fs';
import path from 'path';

// GATE CS Syllabus Data
const gateCS_Syllabus = [
  { section: 'Programming', topics: ['C Programming', 'Data Types', 'Control Structures', 'Functions', 'Pointers'], weightage: '10%', importance: 'High' },
  { section: 'Data Structures', topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Hashing'], weightage: '12%', importance: 'High' },
  { section: 'Algorithms', topics: ['Searching', 'Sorting', 'Greedy', 'Dynamic Programming', 'Graph Algorithms'], weightage: '13%', importance: 'High' },
  { section: 'Theory of Computation', topics: ['Finite Automata', 'Regular Languages', 'Context-Free Grammars', 'Turing Machines'], weightage: '10%', importance: 'High' },
  { section: 'Compiler Design', topics: ['Lexical Analysis', 'Syntax Analysis', 'Code Generation', 'Optimization'], weightage: '8%', importance: 'Medium' },
  { section: 'Operating Systems', topics: ['Process Management', 'Memory Management', 'File Systems', 'Deadlocks'], weightage: '10%', importance: 'High' },
  { section: 'Databases', topics: ['ER Model', 'SQL', 'Normalization', 'Transactions', 'Indexing'], weightage: '10%', importance: 'High' },
  { section: 'Computer Networks', topics: ['OSI Model', 'TCP/IP', 'Routing', 'Network Security'], weightage: '10%', importance: 'High' },
  { section: 'Digital Logic', topics: ['Boolean Algebra', 'Combinational Circuits', 'Sequential Circuits'], weightage: '8%', importance: 'Medium' },
  { section: 'Computer Organization', topics: ['CPU Architecture', 'Memory Hierarchy', 'I/O Systems', 'Pipelining'], weightage: '9%', importance: 'High' }
];

// Sample PYQ questions for GATE CS
const sampleGateCSPYQs = [
  {
    topic: 'Data Structures',
    question: 'What is the time complexity of inserting an element at the beginning of a singly linked list?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correct_answer: 'A',
    explanation: 'Inserting at the beginning requires only updating the head pointer, which is a constant time operation.',
    difficulty: 'Easy',
    marks: 1
  },
  {
    topic: 'Algorithms',
    question: 'Which sorting algorithm has the best average-case time complexity?',
    options: ['Bubble Sort', 'Quick Sort', 'Insertion Sort', 'Selection Sort'],
    correct_answer: 'B',
    explanation: 'Quick Sort has an average-case time complexity of O(n log n), which is better than O(n²) for bubble, insertion, and selection sort.',
    difficulty: 'Medium',
    marks: 2
  },
  {
    topic: 'Operating Systems',
    question: 'Which of the following is NOT a page replacement algorithm?',
    options: ['FIFO', 'LRU', 'Optimal', 'Round Robin'],
    correct_answer: 'D',
    explanation: 'Round Robin is a CPU scheduling algorithm, not a page replacement algorithm.',
    difficulty: 'Easy',
    marks: 1
  },
  {
    topic: 'Databases',
    question: 'What is the highest normal form of the following relation? R(A, B, C) with FD: A→B, B→C',
    options: ['1NF', '2NF', '3NF', 'BCNF'],
    correct_answer: 'C',
    explanation: 'The relation is in 3NF as there are no transitive dependencies from any key.',
    difficulty: 'Hard',
    marks: 2
  },
  {
    topic: 'Computer Networks',
    question: 'What is the size of an IPv4 address?',
    options: ['16 bits', '32 bits', '64 bits', '128 bits'],
    correct_answer: 'B',
    explanation: 'IPv4 addresses are 32 bits long, typically represented in dotted decimal notation.',
    difficulty: 'Easy',
    marks: 1
  }
];

// GATE CS Tips
const gateCS_Tips = [
  { category: 'Preparation Strategy', title: 'Start with Strong Fundamentals', content: 'Focus on core subjects like Data Structures, Algorithms, and Operating Systems first as they carry maximum weightage.', priority: 10 },
  { category: 'Time Management', title: 'Practice with Time Limits', content: 'Solve previous year questions within the actual exam time limit to improve speed and accuracy.', priority: 9 },
  { category: 'Recommended Books', title: 'Must-Read Books for GATE CS', content: 'Data Structures - Cormen (CLRS), Operating Systems - Galvin, Database Systems - Korth', priority: 8 },
  { category: 'Previous Year Analysis', title: 'Topic-wise Weightage Analysis', content: 'Data Structures & Algorithms (25%), OS & Databases (20%), TOC & Compiler (18%), Networks & COA (19%)', priority: 7 },
  { category: 'Exam Day Tips', title: 'Strategy for Exam Day', content: 'Attempt easy questions first, mark difficult ones for review, and manage time wisely across sections.', priority: 6 }
];

// Generate SQL INSERT statements
function generateSyllabusSql(examId: number, examName: string, syllabusData: any[]): string {
  let sql = `-- Syllabus for ${examName}\n`;
  syllabusData.forEach(item => {
    item.topics.forEach((topic: string) => {
      sql += `INSERT INTO syllabus (exam_id, section, topic, subtopics, weightage, importance) VALUES (${examId}, '${item.section}', '${topic}', '', '${item.weightage}', '${item.importance}');\n`;
    });
  });
  return sql + '\n';
}

function generateTipsSql(examId: number, examName: string, tips: any[]): string {
  let sql = `-- Tips for ${examName}\n`;
  tips.forEach(tip => {
    sql += `INSERT INTO tips (exam_id, category, title, content, priority) VALUES (${examId}, '${tip.category}', '${tip.title}', '${tip.content}', ${tip.priority});\n`;
  });
  return sql + '\n';
}

function generatePYQsSql(examId: number, examName: string, questions: any[], years: number[]): string {
  let sql = `-- PYQs for ${examName}\n`;
  years.forEach(year => {
    questions.forEach(q => {
      const optionsJson = JSON.stringify(q.options).replace(/'/g, "''");
      sql += `INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES (${examId}, ${year}, '${q.question.replace(/'/g, "''")}', '${optionsJson}', '${q.correct_answer}', '${q.explanation.replace(/'/g, "''")}', '${q.topic}', '${q.difficulty}', ${q.marks}, '${examName} ${year}');\n`;
    });
  });
  return sql + '\n';
}

// Generate all seed files
let syllabusData = '';
let tipsData = '';
let pyqsData = '';

// GATE CS (exam_id = 1)
syllabusData += generateSyllabusSql(1, 'GATE CS', gateCS_Syllabus);
tipsData += generateTipsSql(1, 'GATE CS', gateCS_Tips);
pyqsData += generatePYQsSql(1, 'GATE CS', sampleGateCSPYQs, [2020, 2021, 2022, 2023, 2024, 2025]);

// Write to files
fs.writeFileSync(path.join(__dirname, '../../database/seeds/syllabus.sql'), syllabusData);
fs.writeFileSync(path.join(__dirname, '../../database/seeds/tips.sql'), tipsData);
fs.writeFileSync(path.join(__dirname, '../../database/seeds/pyqs.sql'), pyqsData);

console.log('✅ Seed data files generated successfully!');
