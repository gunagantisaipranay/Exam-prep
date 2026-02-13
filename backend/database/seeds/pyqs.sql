-- Sample PYQs for GATE CS (exam_id = 1) - Years 2020-2025
-- Data Structures Questions
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(1, 2025, 'What is the time complexity of inserting an element at the beginning of a singly linked list?', '["O(1)", "O(n)", "O(log n)", "O(n²)"]', 'A', 'Inserting at the beginning requires only updating the head pointer, which is a constant time operation O(1).', 'Data Structures', 'Easy', 1, 'GATE CS 2025'),
(1, 2025, 'Which data structure is best suited for implementing a priority queue?', '["Array", "Linked List", "Heap", "Stack"]', 'C', 'Heap provides O(log n) insertion and O(1) access to highest priority element, making it ideal for priority queues.', 'Data Structures', 'Medium', 2, 'GATE CS 2025'),
(1, 2024, 'In a binary search tree with n nodes, what is the worst-case time complexity for searching?', '["O(1)", "O(log n)", "O(n)", "O(n log n)"]', 'C', 'In worst case (skewed tree), BST degenerates to a linked list requiring O(n) time for search.', 'Data Structures', 'Medium', 2, 'GATE CS 2024'),
(1, 2024, 'How many edges are there in a complete graph with n vertices?', '["n", "n-1", "n(n-1)/2", "n²"]', 'C', 'A complete graph has an edge between every pair of vertices, giving n(n-1)/2 edges.', 'Data Structures', 'Easy', 1, 'GATE CS 2024'),
(1, 2023, 'What is the minimum number of nodes in a complete binary tree of height h?', '["2^h", "2^h - 1", "2^(h-1)", "2^h + 1"]', 'A', 'A complete binary tree of height h has minimum 2^h nodes when only left side is filled at last level.', 'Data Structures', 'Hard', 2, 'GATE CS 2023');

-- Algorithms Questions
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(1, 2025, 'Which sorting algorithm has the best average-case time complexity?', '["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"]', 'B', 'Quick Sort has average-case O(n log n) complexity, better than O(n²) for other options.', 'Algorithms', 'Medium', 2, 'GATE CS 2025'),
(1, 2024, 'What is the time complexity of the Bellman-Ford algorithm?', '["O(V)", "O(E)", "O(VE)", "O(V²)"]', 'C', 'Bellman-Ford relaxes all edges V-1 times, resulting in O(VE) complexity where V=vertices, E=edges.', 'Algorithms', 'Medium', 2, 'GATE CS 2024'),
(1, 2023, 'Which algorithm is used to find the shortest path in a graph with non-negative weights?', '["BFS", "DFS", "Dijkstra", "Bellman-Ford"]', 'C', 'Dijkstra''s algorithm finds shortest paths from source to all vertices in graphs with non-negative edge weights.', 'Algorithms', 'Easy', 1, 'GATE CS 2023'),
(1, 2022, 'What is the worst-case time complexity of the merge sort algorithm?', '["O(n)", "O(n log n)", "O(n²)", "O(2^n)"]', 'B', 'Merge sort always divides array into two halves and merges them, giving O(n log n) in all cases.', 'Algorithms', 'Easy', 1, 'GATE CS 2022'),
(1, 2021, 'Which of the following problems can be solved using dynamic programming?', '["Longest Common Subsequence", "All paths in a graph", "Primality testing", "Graph coloring"]', 'A', 'LCS has overlapping subproblems and optimal substructure, making it suitable for dynamic programming.', 'Algorithms', 'Medium', 2, 'GATE CS 2021');

-- Operating Systems Questions
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(1, 2025, 'Which page replacement algorithm is guaranteed to have the lowest page fault rate?', '["FIFO", "LRU", "Optimal", "Random"]', 'C', 'Optimal page replacement algorithm replaces page that will not be used for longest time, giving theoretical minimum page faults.', 'Operating Systems', 'Easy', 1, 'GATE CS 2025'),
(1, 2024, 'What is the purpose of TLB (Translation Lookaside Buffer)?', '["Store disk pages", "Cache page table entries", "Store process control blocks", "Manage interrupts"]', 'B', 'TLB is a cache for page table entries to speed up virtual address translation.', 'Operating Systems', 'Medium', 2, 'GATE CS 2024'),
(1, 2023, 'In which scheduling algorithm can starvation occur?', '["Round Robin", "FCFS", "Priority Scheduling", "Shortest Job First"]', 'C', 'In priority scheduling, low-priority processes may starve if high-priority processes keep arriving.', 'Operating Systems', 'Medium', 2, 'GATE CS 2023'),
(1, 2022, 'What is a critical section?', '["Code that must execute quickly", "Code where shared resources are accessed", "Code with infinite loops", "Code that handles interrupts"]', 'B', 'Critical section is a code segment where shared resources are accessed and must be protected from concurrent access.', 'Operating Systems', 'Easy', 1, 'GATE CS 2022');

-- Database Questions
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(1, 2025, 'Which normal form eliminates transitive dependencies?', '["1NF", "2NF", "3NF", "BCNF"]', 'C', 'Third Normal Form (3NF) eliminates transitive dependencies where A→B and B→C implies A→C.', 'Databases', 'Medium', 2, 'GATE CS 2025'),
(1, 2024, 'What is the purpose of the GROUP BY clause in SQL?', '["Sort results", "Filter rows", "Group rows with same values", "Join tables"]', 'C', 'GROUP BY groups rows that have the same values in specified columns, often used with aggregate functions.', 'Databases', 'Easy', 1, 'GATE CS 2024'),
(1, 2023, 'Which isolation level provides the highest level of consistency?', '["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"]', 'D', 'Serializable isolation level ensures complete isolation, preventing all concurrency anomalies.', 'Databases', 'Hard', 2, 'GATE CS 2023'),
(1, 2022, 'What is a foreign key?', '["Primary key in another table", "Key used for indexing", "Key that references primary key of another table", "Composite key"]', 'C', 'Foreign key is a field that references the primary key of another table, establishing relationships.', 'Databases', 'Easy', 1, 'GATE CS 2022');

-- Computer Networks Questions
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(1, 2025, 'What is the size of an IPv4 address?', '["16 bits", "32 bits", "64 bits", "128 bits"]', 'B', 'IPv4 addresses are 32 bits long, typically represented as four octets in dotted decimal notation.', 'Computer Networks', 'Easy', 1, 'GATE CS 2025'),
(1, 2024, 'Which layer of the OSI model handles end-to-end communication?', '["Network", "Transport", "Session", "Application"]', 'B', 'Transport layer (Layer 4) provides end-to-end communication services like TCP and UDP.', 'Computer Networks', 'Easy', 1, 'GATE CS 2024'),
(1, 2023, 'What is the maximum segment size in TCP typically?', '["512 bytes", "1024 bytes", "1460 bytes", "2048 bytes"]', 'C', 'MSS is typically 1460 bytes (1500 MTU - 20 IP header - 20 TCP header).', 'Computer Networks', 'Medium', 2, 'GATE CS 2023'),
(1, 2022, 'Which protocol is used for email retrieval?', '["SMTP", "POP3", "HTTP", "FTP"]', 'B', 'POP3 (Post Office Protocol version 3) is used to retrieve emails from a mail server.', 'Computer Networks', 'Easy', 1, 'GATE CS 2022');

-- Repeat pattern for other years (2020, 2021)
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(1, 2021, 'What is hashing used for?', '["Sorting data", "Fast data retrieval", "Data compression", "Encryption"]', 'B', 'Hashing provides O(1) average-case time complexity for insertion, deletion, and search operations.', 'Data Structures', 'Easy', 1, 'GATE CS 2021'),
(1, 2020, 'Which traversal visits root node first?', '["Inorder", "Preorder", "Postorder", "Level order"]', 'B', 'Preorder traversal visits root first, then left subtree, then right subtree (Root-Left-Right).', 'Data Structures', 'Easy', 1, 'GATE CS 2020');

-- Sample UPSC PYQs (exam_id = 5) - Years 2020-2025
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(5, 2025, 'Who was the first Mughal emperor of India?', '["Akbar", "Babur", "Humayun", "Shah Jahan"]', 'B', 'Babur founded the Mughal Empire in India in 1526 after defeating Ibrahim Lodi in the Battle of Panipat.', 'History', 'Easy', 2, 'UPSC Prelims 2025'),
(5, 2025, 'Which article of the Indian Constitution abolishes untouchability?', '["Article 14", "Article 15", "Article 17", "Article 19"]', 'C', 'Article 17 abolishes untouchability and forbids its practice in any form.', 'Polity', 'Medium', 2, 'UPSC Prelims 2025'),
(5, 2024, 'The Himalayas are an example of which type of mountains?', '["Volcanic", "Block", "Fold", "Erosional"]', 'C', 'The Himalayas are fold mountains formed by the collision of Indian and Eurasian plates.', 'Geography', 'Easy', 2, 'UPSC Prelims 2024'),
(5, 2024, 'What is fiscal deficit?', '["Total expenditure - Total revenue", "Revenue expenditure - Revenue receipts", "Total expenditure - Total receipts excluding borrowings", "Interest payments on debt"]', 'C', 'Fiscal deficit = Total expenditure - Total receipts (excluding borrowings). It shows government borrowing needs.', 'Economy', 'Medium', 2, 'UPSC Prelims 2024'),
(5, 2023, 'Who wrote the book "Discovery of India"?', '["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. BR Ambedkar"]', 'B', 'Jawaharlal Nehru wrote "The Discovery of India" during his imprisonment in 1942-1946.', 'History', 'Easy', 2, 'UPSC Prelims 2023');

-- Sample JEE Mains PYQs (exam_id = 6) - Years 2020-2025
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(6, 2025, 'What is the SI unit of force?', '["Joule", "Newton", "Watt", "Pascal"]', 'B', 'Newton (N) is the SI unit of force, defined as kg⋅m/s².', 'Physics', 'Easy', 4, 'JEE Mains 2025'),
(6, 2025, 'What is the molecular formula of benzene?', '["C₆H₆", "C₆H₁₂", "C₅H₆", "C₆H₁₄"]', 'A', 'Benzene has molecular formula C₆H₆ with a hexagonal ring structure.', 'Chemistry', 'Easy', 4, 'JEE Mains 2025'),
(6, 2025, 'What is the derivative of sin(x)?', '["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"]', 'A', 'The derivative of sin(x) with respect to x is cos(x).', 'Mathematics', 'Easy', 4, 'JEE Mains 2025'),
(6, 2024, 'What is Newton''s second law of motion?', '["F = ma", "F = mv", "F = m/a", "F = a/m"]', 'A', 'Newton''s second law states that Force equals mass times acceleration (F = ma).', 'Physics', 'Easy', 4, 'JEE Mains 2024'),
(6, 2024, 'Which gas is released during photosynthesis?', '["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"]', 'B', 'Plants release oxygen (O₂) as a byproduct during photosynthesis.', 'Chemistry', 'Easy', 4, 'JEE Mains 2024');

-- Sample Banking PYQs (exam_id = 8) - Years 2020-2025
INSERT INTO pyqs (exam_id, year, question, options, correct_answer, explanation, topic, difficulty, marks, exam_paper) VALUES
(8, 2025, 'If A is taller than B, and B is taller than C, then who is the shortest?', '["A", "B", "C", "Cannot be determined"]', 'C', 'C is shorter than B, and B is shorter than A, making C the shortest.', 'Reasoning', 'Easy', 1, 'IBPS PO 2025'),
(8, 2025, 'What is 25% of 80?', '["15", "20", "25", "30"]', 'B', '25% of 80 = (25/100) × 80 = 20.', 'Quantitative Aptitude', 'Easy', 1, 'IBPS PO 2025'),
(8, 2024, 'Choose the correct synonym for "Abundant":', '["Scarce", "Plentiful", "Rare", "Limited"]', 'B', 'Abundant means present in large quantities, synonym is Plentiful.', 'English', 'Easy', 1, 'IBPS PO 2024'),
(8, 2024, 'What is the full form of RBI?', '["Reserve Bank of India", "Regional Bank of India", "Rural Bank of India", "Retail Bank of India"]', 'A', 'RBI stands for Reserve Bank of India, the central bank of India.', 'General Awareness', 'Easy', 1, 'IBPS PO 2024'),
(8, 2023, 'What is the shortcut key for copy in Windows?', '["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"]', 'B', 'Ctrl+C is the shortcut key for copying selected text or items.', 'Computer Knowledge', 'Easy', 1, 'IBPS PO 2023');
