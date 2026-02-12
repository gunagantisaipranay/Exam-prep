-- Tips for GATE CS (exam_id = 1)
INSERT INTO tips (exam_id, category, title, content, priority) VALUES
(1, 'Preparation Strategy', 'Start with Strong Fundamentals', 'Focus on core subjects like Data Structures, Algorithms, and Operating Systems first as they carry maximum weightage. Build a strong foundation before moving to advanced topics.', 10),
(1, 'Preparation Strategy', 'Topic-wise Priority', 'Prioritize: Data Structures & Algorithms (25%), OS & DBMS (20%), TOC & Compiler (18%), Networks & COA (19%), Digital Logic (18%)', 9),
(1, 'Time Management', 'Practice with Time Limits', 'Solve previous year questions within the actual exam time limit (3 hours for 65 questions). Aim for 2-3 minutes per question.', 9),
(1, 'Time Management', 'Create a Study Schedule', 'Dedicate 4-6 hours daily. Divide time: Theory (40%), Problem Solving (40%), Revision (20%)', 8),
(1, 'Recommended Books', 'Data Structures & Algorithms', 'Introduction to Algorithms by Cormen (CLRS), Data Structures by Tanenbaum', 8),
(1, 'Recommended Books', 'Operating Systems', 'Operating System Concepts by Galvin, Modern Operating Systems by Tanenbaum', 8),
(1, 'Recommended Books', 'Databases', 'Database System Concepts by Korth, Database Management Systems by Raghu Ramakrishnan', 7),
(1, 'Recommended Books', 'Computer Networks', 'Computer Networks by Tanenbaum, Data Communications and Networking by Forouzan', 7),
(1, 'Previous Year Analysis', 'High Weightage Topics', 'Data Structures (15-17 marks), Algorithms (13-15 marks), Programming (8-10 marks), OS (8-10 marks), DBMS (8-10 marks)', 7),
(1, 'Previous Year Analysis', 'Difficulty Distribution', 'Easy: 30%, Medium: 50%, Hard: 20%. Focus on medium-difficulty questions for better scores.', 6),
(1, 'Exam Day Tips', 'Question Selection Strategy', 'Attempt easy questions first (1-2 min each), then medium (3-4 min), mark hard ones for review. Don''t spend more than 5 minutes on any single question.', 6),
(1, 'Exam Day Tips', 'Negative Marking Awareness', 'Every wrong answer gets -1/3 marks. Skip questions if you''re not confident rather than guessing blindly.', 5),
(1, 'Mock Tests', 'Take Regular Mock Tests', 'Attempt at least 15-20 full-length mock tests before the exam. Analyze mistakes and improve weak areas.', 5),
(1, 'Revision Strategy', 'Create Short Notes', 'Make concise notes for formulas, algorithms, and key concepts. Revise these notes in the last week before exam.', 4),
(1, 'Common Mistakes', 'Avoid These Pitfalls', 'Don''t skip basics, don''t leave revision for the last minute, don''t ignore previous year questions.', 3);

-- Tips for UPSC (exam_id = 5)
INSERT INTO tips (exam_id, category, title, content, priority) VALUES
(5, 'Preparation Strategy', 'NCERT Foundation', 'Start with NCERT books (Class 6-12) for all subjects. They provide the fundamental knowledge required for UPSC.', 10),
(5, 'Preparation Strategy', 'Current Affairs Integration', 'Read newspapers daily (The Hindu, Indian Express). Connect current events with static syllabus topics.', 9),
(5, 'Time Management', 'Answer Writing Practice', 'Practice writing answers within word limits. Quality matters more than quantity. Aim for 150 words in 8-10 minutes.', 9),
(5, 'Time Management', 'CSAT Preparation', 'Don''t ignore CSAT. Dedicate 1-2 hours daily for logical reasoning, comprehension, and basic numeracy.', 8),
(5, 'Recommended Books', 'History', 'Ancient India by RS Sharma, Medieval India by Satish Chandra, Modern India by Bipin Chandra', 8),
(5, 'Recommended Books', 'Geography', 'Certificate Physical and Human Geography by GC Leong, Geography of India by Majid Husain', 7),
(5, 'Recommended Books', 'Polity', 'Indian Polity by M Laxmikanth, Indian Constitution at Work (NCERT Class 11)', 8),
(5, 'Recommended Books', 'Economy', 'Indian Economy by Ramesh Singh, Economic Survey, Union Budget documents', 7),
(5, 'Previous Year Analysis', 'High Frequency Topics', 'Polity & Governance (25-30 questions), History & Culture (20-25), Geography & Environment (20-25), Economy (15-20)', 7),
(5, 'Previous Year Analysis', 'Current Affairs Weight', 'Around 15-20 questions are directly from current affairs. Stay updated with last 12 months events.', 6),
(5, 'Exam Day Tips', 'Negative Marking Strategy', 'Each wrong answer: -0.33 marks (1/3 of question marks). Attempt questions you''re 70%+ confident about.', 6),
(5, 'Exam Day Tips', 'Time Allocation', '2 hours for 100 questions. Spend 1 minute per question max. Complete paper once, then review marked questions.', 5),
(5, 'Mock Tests', 'Prelims Test Series', 'Join a good test series. Attempt 30-40 mock tests. Focus on improving accuracy rather than just speed.', 5),
(5, 'Revision Strategy', 'Monthly Revision Cycles', 'Revise each subject once a month. In last 2 months, increase frequency to weekly revision.', 4);

-- Tips for JEE (exam_id = 6)
INSERT INTO tips (exam_id, category, title, content, priority) VALUES
(6, 'Preparation Strategy', 'NCERT Mastery', 'Master NCERT books for Physics, Chemistry, and Math (Class 11-12). 30-40% of JEE questions are directly from NCERT.', 10),
(6, 'Preparation Strategy', 'Subject Balance', 'Equal importance to all three subjects. Don''t neglect Chemistry even if you''re good at Physics/Math.', 9),
(6, 'Time Management', 'Chapter-wise Planning', 'Complete syllabus by December. January-March for revision and mock tests. April for final touch-ups.', 9),
(6, 'Time Management', 'Daily Study Hours', 'Aim for 6-8 hours of focused study. Divide equally: Physics (2.5h), Chemistry (2.5h), Math (2.5h)', 8),
(6, 'Recommended Books', 'Physics', 'Concepts of Physics by HC Verma, Problems in Physics by IE Irodov (advanced)', 8),
(6, 'Recommended Books', 'Chemistry', 'Physical Chemistry by OP Tandon, Organic Chemistry by Morrison & Boyd, Inorganic Chemistry by JD Lee', 8),
(6, 'Recommended Books', 'Mathematics', 'Coordinate Geometry by SL Loney, Algebra by Hall & Knight, Calculus by IA Maron', 8),
(6, 'Previous Year Analysis', 'High Weightage Topics - Physics', 'Mechanics (28%), Electrodynamics (23%), Modern Physics (17%), Thermodynamics (12%), Optics (12%), Waves (8%)', 7),
(6, 'Previous Year Analysis', 'High Weightage Topics - Chemistry', 'Organic Chemistry (40%), Physical Chemistry (35%), Inorganic Chemistry (25%)', 7),
(6, 'Previous Year Analysis', 'High Weightage Topics - Math', 'Calculus (35%), Algebra (25%), Coordinate Geometry (25%), Trigonometry (15%)', 7),
(6, 'Exam Day Tips', 'Attempt Strategy', 'Start with your strongest subject. Aim to complete each section in 1 hour. Keep 15 minutes for review.', 6),
(6, 'Exam Day Tips', 'Calculation Accuracy', 'Practice mental calculations. Most mistakes happen in calculation, not concepts. Double-check numerical answers.', 5),
(6, 'Mock Tests', 'Full-Length Mock Tests', 'Attempt 40-50 full-length mock tests. Analyze every test - identify weak areas and improve.', 5),
(6, 'Revision Strategy', 'Formula Sheets', 'Create formula sheets for quick revision. Revise all formulas daily in the last month.', 4);

-- Tips for Banking (exam_id = 8)
INSERT INTO tips (exam_id, category, title, content, priority) VALUES
(8, 'Preparation Strategy', 'Section-wise Approach', 'Master Reasoning (35 questions, 60 marks), Quant (35, 50 marks), English (30, 40 marks), GA (40, 40 marks), Computer (20, 20 marks)', 10),
(8, 'Preparation Strategy', 'Speed and Accuracy', 'Both are equally important. Aim for 85%+ accuracy with completing paper 10 minutes before time.', 9),
(8, 'Time Management', 'Sectional Time Limits', 'Reasoning: 25 min, Quant: 30 min, English: 25 min, GA: 15 min, Computer: 10 min, Review: 15 min', 9),
(8, 'Time Management', 'Attempt Strategy', 'Attempt your strongest section first. Build confidence. Don''t spend more than 45 seconds per question.', 8),
(8, 'Recommended Books', 'Reasoning', 'A Modern Approach to Verbal & Non-Verbal Reasoning by RS Aggarwal', 8),
(8, 'Recommended Books', 'Quantitative Aptitude', 'Quantitative Aptitude by RS Aggarwal, Fast Track Objective Arithmetic by Rajesh Verma', 8),
(8, 'Recommended Books', 'English', 'Objective General English by SP Bakshi, Word Power Made Easy by Norman Lewis', 7),
(8, 'Recommended Books', 'General Awareness', 'Manorama Yearbook, Banking Awareness by Arihant, Daily newspapers', 7),
(8, 'Previous Year Analysis', 'High Scoring Topics - Reasoning', 'Puzzles (10-15 marks), Seating Arrangement (10 marks), Syllogism (5 marks), Blood Relations (3-5 marks)', 7),
(8, 'Previous Year Analysis', 'High Scoring Topics - Quant', 'Data Interpretation (15-20 marks), Number Series (5 marks), Simplification (8-10 marks)', 7),
(8, 'Exam Day Tips', 'Question Selection', 'Attempt easy questions first. Skip tough puzzles initially. Return to them if time permits.', 6),
(8, 'Exam Day Tips', 'Avoid Negative Marking', 'Each wrong answer: -0.25 marks. Don''t guess blindly. Attempt only if 80%+ confident.', 5),
(8, 'Mock Tests', 'Prelims Mock Tests', 'Attempt 30-40 mock tests. Focus on sectional tests for weak areas. Join online test series.', 5),
(8, 'Current Affairs', 'Stay Updated', 'Read banking news daily. Focus on: RBI policies, Bank mergers, Economic surveys, Government schemes.', 4);
