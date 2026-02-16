const BackendData = [
  {
    id: 1,
    question: "Backend কি এবং Frontend এর সাথে পার্থক্য কী?",
    answer: "Backend: সার্ভার, ডেটাবেস ও API এর কাজ করে। User directly interact করে না। Frontend: User interface তৈরি করে, user যেটা দেখে ও interact করে।"
  },
  {
    id: 2,
    question: "API কী?",
    answer: "API (Application Programming Interface) হলো rules ও endpoints যা দিয়ে frontend ও backend communicate করে। উদাহরণ: GET /users API দিয়ে সব user এর data fetch করা যায়।"
  },
  {
    id: 3,
    question: "HTTP Methods এর পার্থক্য কী?",
    answer: "GET: data fetch করার জন্য। POST: নতুন data create করার জন্য। PUT: existing data update করার জন্য। PATCH: partial update করার জন্য। DELETE: data delete করার জন্য।"
  },
  {
    id: 4,
    question: "REST API কী?",
    answer: "REST হলো architectural style যা resource (data) এর উপর কাজ করে। Stateless HTTP methods ব্যবহার করে JSON response"
  },
  {
    id: 5,
    question: "What is Middleware in Express.js?",
    answer: "Middleware হলো function যা request এবং response এর মাঝে execute হয়। উদাহরণ: authentication, logging, error handling।"
  },
  {
    id: 6,
    question: "Difference between SQL and NoSQL?",
    answer: "SQL (Relational DB): structured data, tables, schema-based। যেমন: MySQL, PostgreSQL, NoSQL (Non-relational DB): flexible, document/JSON based। যেমন: MongoDB"
  },
  {
    id: 7,
    question: "What is JWT (JSON Web Token)?",
    answer: "JWT হলো token based authentication system। User login করলে server JWT generate করে। Frontend request এর সাথে token পাঠায়। Server verify করে user authenticate করে।"
  },
  {
    id: 8,
    question: "What is CORS and why it occurs in Backend?",
    answer: "CORS হলো security feature যা different domain থেকে request restrict করে। Solution: server এ proper header (Access-Control-Allow-Origin) add করতে হয়।"
  },
  {
    id: 9,
    question: "Difference between PUT and PATCH?",
    answer: "PUT: Full resource replace করে। PATCH: শুধু part of resource update করে।"
  },
  {
    id: 10,
    question: "Difference between synchronous and asynchronous programming?",
    answer: "Synchronous: একটার পর একটা কাজ হয়, পরের কাজ আগের কাজ শেষ হলে হয়। Asynchronous: একই সাথে multiple কাজ চলতে পারে, Promise বা async/await ব্যবহার করে।"
  },
  {
    id: 11,
    question: "What is ORM? (Object Relational Mapping)",
    answer: "ORM হলো tool যা database table কে programming language এর object হিসেবে represent করে। উদাহরণ: Sequelize (Node.js), TypeORM"
  },
  {
    id: 12,
    question: "What is a database transaction?",
    answer: "Transaction হলো একসাথে multiple database operations execute করা। ACID property: Atomicity, Consistency, Isolation, Durability"
  },
  {
    id: 13,
    question: "What is a server and how does it work?",
    answer: "Server হলো program বা machine যা request গ্রহণ করে এবং response পাঠায়। Example: Node.js server receives HTTP request, processes it, sends JSON response।"
  },
  {
    id: 14,
    question: "Difference between relational and non-relational databases?",
    answer: "Relational → structured, tables, SQL queries | Non-relational → flexible schema, JSON/documents, NoSQL"
  },
  {
    id: 15,
    question: "Can I use React with Tailwind CSS?",
    answer: "Yes, React works perfectly with Tailwind CSS."
  },
  {
    id: 16,
    question: "What is Node.js and why is it used?",
    answer: "Node.js হলো JavaScript runtime যা server-side এ JS চালায়। Single-threaded, event-driven, Fast, scalable, Backend API তৈরি করতে ব্যবহৃত"
  },
  {
    id: 17,
    question: "What is Express.js?",
    answer: "Express.js হলো Node.js এর lightweight framework। Routing সহজ করে | Middleware support করে | REST API বানাতে সাহায্য করে"
  },
  {
    id: 18,
    question: "How do you connect Node.js with MongoDB?",
    answer: "MongoDB driver অথবা Mongoose ব্যবহার করে। Mongoose দিয়ে schema তৈরি করে model তৈরি করা হয়। তারপর CRUD operations করা যায়।"
  },
  {
    id: 19,
    question: "What is RESTful API endpoint?",
    answer: "REST API তে URL resource এর উপর ভিত্তি করে তৈরি হয়। উদাহরণ: 1) GET /users → get all users  2)POST /users → create new user  3)PUT /users/:id → update user  4)DELETE /users/:id → delete user"
  },
  {
    id: 20,
    question: "What is API versioning?",
    answer: "API versioning হলো API update বা breaking changes এ old client support করার জন্য। URL versioning: /api/v1/users | Header versioning: Accept: application/vnd.app.v1+json"
  },
  {
    id: 21,
    question: "Difference between SQL JOIN types?",
    answer: "1) INNER JOIN: only matching rows  2) LEFT JOIN: left table এর সব row + match হলে right table  3) RIGHT JOIN: right table এর সব row + match হলে left table  4)FULL OUTER JOIN: left + right সব row"
  },
  {
    id: 22,
    question: "What is hashing and why is it used?",
    answer: "Hashing হলো sensitive data (password) encrypt করা। One-way encryption Example: bcrypt, SHA-256"
  },
  {
    id: 23,
    question: "What is session and cookie?",
    answer: "Session: server-side storage, user login maintain করে | Cookie: client-side small data store, server access করতে পারে"
  },
];

export default BackendData;