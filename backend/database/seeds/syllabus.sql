-- Syllabus for GATE CS (exam_id = 1)
INSERT INTO syllabus (exam_id, section, topic, subtopics, weightage, importance) VALUES
(1, 'Programming', 'C Programming', 'Variables, Data Types, Operators, Control Flow', '10%', 'High'),
(1, 'Data Structures', 'Arrays and Strings', 'Array operations, String manipulation', '12%', 'High'),
(1, 'Data Structures', 'Linked Lists', 'Singly, Doubly, Circular Linked Lists', '12%', 'High'),
(1, 'Data Structures', 'Stacks and Queues', 'Implementation, Applications', '12%', 'High'),
(1, 'Data Structures', 'Trees', 'Binary Trees, BST, AVL, Heaps', '12%', 'High'),
(1, 'Data Structures', 'Graphs', 'Representation, Traversal algorithms', '12%', 'High'),
(1, 'Algorithms', 'Searching and Sorting', 'Linear, Binary Search, Quick Sort, Merge Sort', '13%', 'High'),
(1, 'Algorithms', 'Greedy Algorithms', 'Activity Selection, Huffman Coding', '13%', 'High'),
(1, 'Algorithms', 'Dynamic Programming', 'Memoization, Tabulation, Classic problems', '13%', 'High'),
(1, 'Algorithms', 'Graph Algorithms', 'DFS, BFS, Dijkstra, Bellman-Ford', '13%', 'High'),
(1, 'Theory of Computation', 'Finite Automata', 'DFA, NFA, Epsilon-NFA', '10%', 'High'),
(1, 'Theory of Computation', 'Regular Languages', 'Regular Expressions, Pumping Lemma', '10%', 'High'),
(1, 'Theory of Computation', 'Context-Free Grammars', 'CFG, PDA, CFL', '10%', 'High'),
(1, 'Operating Systems', 'Process Management', 'Process Scheduling, Synchronization', '10%', 'High'),
(1, 'Operating Systems', 'Memory Management', 'Paging, Segmentation, Virtual Memory', '10%', 'High'),
(1, 'Operating Systems', 'File Systems', 'File organization, Directory structure', '10%', 'High'),
(1, 'Databases', 'ER Model', 'Entities, Relationships, ER diagrams', '10%', 'High'),
(1, 'Databases', 'SQL', 'Queries, Joins, Aggregation', '10%', 'High'),
(1, 'Databases', 'Normalization', '1NF, 2NF, 3NF, BCNF', '10%', 'High'),
(1, 'Databases', 'Transactions', 'ACID properties, Concurrency control', '10%', 'High'),
(1, 'Computer Networks', 'OSI Model', 'Seven layers and their functions', '10%', 'High'),
(1, 'Computer Networks', 'TCP/IP', 'TCP, UDP, IP protocols', '10%', 'High'),
(1, 'Computer Networks', 'Routing', 'Distance Vector, Link State', '10%', 'Medium'),
(1, 'Digital Logic', 'Boolean Algebra', 'Logic gates, Boolean expressions', '8%', 'Medium'),
(1, 'Digital Logic', 'Combinational Circuits', 'Multiplexers, Decoders, Adders', '8%', 'Medium'),
(1, 'Computer Organization', 'CPU Architecture', 'Instruction set, Addressing modes', '9%', 'High'),
(1, 'Computer Organization', 'Memory Hierarchy', 'Cache, RAM, Virtual memory', '9%', 'High');

-- Syllabus for UPSC (exam_id = 5)
INSERT INTO syllabus (exam_id, section, topic, subtopics, weightage, importance) VALUES
(5, 'History', 'Ancient India', 'Indus Valley, Vedic Period, Mauryan Empire', '15%', 'High'),
(5, 'History', 'Medieval India', 'Delhi Sultanate, Mughal Empire', '15%', 'High'),
(5, 'History', 'Modern India', 'British Rule, Freedom Struggle', '15%', 'High'),
(5, 'Geography', 'Physical Geography', 'Landforms, Climate, Vegetation', '12%', 'High'),
(5, 'Geography', 'Indian Geography', 'Resources, Agriculture, Industries', '12%', 'High'),
(5, 'Polity', 'Constitution', 'Fundamental Rights, Duties, DPSP', '15%', 'High'),
(5, 'Polity', 'Governance', 'Parliament, Judiciary, Executive', '15%', 'High'),
(5, 'Economy', 'Indian Economy', 'GDP, Inflation, Banking', '12%', 'High'),
(5, 'Science', 'Science & Technology', 'Physics, Chemistry, Biology basics', '10%', 'Medium'),
(5, 'Environment', 'Environment & Ecology', 'Biodiversity, Climate Change', '10%', 'Medium'),
(5, 'Current Affairs', 'Current Events', 'National and International news', '8%', 'High');

-- Syllabus for JEE Mains (exam_id = 6)
INSERT INTO syllabus (exam_id, section, topic, subtopics, weightage, importance) VALUES
(6, 'Physics', 'Mechanics', 'Kinematics, Laws of Motion, Work Energy', '20%', 'High'),
(6, 'Physics', 'Thermodynamics', 'Laws, Heat Transfer, Engines', '15%', 'High'),
(6, 'Physics', 'Electromagnetism', 'Electrostatics, Magnetism, EM Waves', '20%', 'High'),
(6, 'Physics', 'Optics', 'Ray Optics, Wave Optics', '10%', 'Medium'),
(6, 'Physics', 'Modern Physics', 'Quantum Mechanics, Nuclear Physics', '15%', 'High'),
(6, 'Chemistry', 'Physical Chemistry', 'Atomic Structure, Chemical Bonding, Thermodynamics', '25%', 'High'),
(6, 'Chemistry', 'Organic Chemistry', 'Hydrocarbons, Reactions, Mechanisms', '30%', 'High'),
(6, 'Chemistry', 'Inorganic Chemistry', 'Periodic Table, Chemical Bonding', '25%', 'High'),
(6, 'Mathematics', 'Algebra', 'Complex Numbers, Quadratic Equations, Sequences', '25%', 'High'),
(6, 'Mathematics', 'Calculus', 'Limits, Derivatives, Integration', '30%', 'High'),
(6, 'Mathematics', 'Coordinate Geometry', 'Straight Lines, Circles, Conic Sections', '20%', 'High'),
(6, 'Mathematics', 'Trigonometry', 'Ratios, Identities, Equations', '15%', 'High');

-- Syllabus for Banking (IBPS PO - exam_id = 8)
INSERT INTO syllabus (exam_id, section, topic, subtopics, weightage, importance) VALUES
(8, 'Reasoning', 'Logical Reasoning', 'Puzzles, Seating Arrangement', '25%', 'High'),
(8, 'Reasoning', 'Verbal Reasoning', 'Analogies, Syllogisms', '15%', 'High'),
(8, 'Quantitative Aptitude', 'Arithmetic', 'Percentage, Profit Loss, Time Work', '20%', 'High'),
(8, 'Quantitative Aptitude', 'Data Interpretation', 'Tables, Graphs, Charts', '20%', 'High'),
(8, 'English', 'Grammar', 'Tenses, Articles, Prepositions', '15%', 'Medium'),
(8, 'English', 'Vocabulary', 'Synonyms, Antonyms, Idioms', '10%', 'Medium'),
(8, 'English', 'Reading Comprehension', 'Passage understanding', '15%', 'High'),
(8, 'General Awareness', 'Banking Awareness', 'Banking terms, RBI policies', '20%', 'High'),
(8, 'General Awareness', 'Current Affairs', 'Recent events, Awards', '15%', 'High'),
(8, 'Computer Knowledge', 'Computer Basics', 'Hardware, Software, Internet', '15%', 'Medium');
