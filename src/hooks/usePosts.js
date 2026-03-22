// import { useState, useEffect } from 'react'

// const KEY = 'sakura_notes_v1'

// const SAMPLE = [
//   {
//     id: 1,
//     title: 'Introduction to Database Management Systems',
//     excerpt: 'ACID properties, types of databases, basic SQL queries, and ER diagrams — my notes from Unit 1 of DBMS.',
//     content: `A **Database Management System (DBMS)** is software that allows us to store, retrieve, and manage data efficiently. Instead of dumping everything into plain text files, a DBMS gives us structure, relationships, and powerful querying.

// ## What is a Database?

// A database is an organized collection of structured information stored electronically. Think of it like a super-powered spreadsheet where data is related, searchable, and consistent.

// > A DBMS is the middleman between the user and the database — it handles all the messy complexity so we don't have to.

// ## ACID Properties

// Transactions in a reliable DBMS follow ACID properties:

// - **Atomicity** — A transaction is all or nothing. If one part fails, the whole thing rolls back.
// - **Consistency** — Data must always go from one valid state to another.
// - **Isolation** — Concurrent transactions don't interfere with each other.
// - **Durability** — Once committed, data stays committed (even if the server crashes).

// ## My Key Takeaways

// After this unit, what really clicked is that ACID isn't just a buzzword — it's what makes databases trustworthy enough to store bank transactions or hospital records.

// The choice between SQL and NoSQL really comes down to your data shape and access patterns. There's no universal winner — just the right tool for the job 🌸`,
//     tags: ['DBMS', 'Databases', 'SQL'],
//     date: 'March 2025',
//     color: 'linear-gradient(135deg, #fdf0f3, #f2c4ce)',
//     emoji: '💻',
//     readTime: '5 min read',
//   },
//   {
//     id: 2,
//     title: 'Unit 1: Understanding Data & the Rise of NoSQL',
//     excerpt: 'Why traditional databases struggle at scale, and how NoSQL solves it with flexibility, horizontal scaling, and distributed systems.',
//     content: `## 1. Data is the Foundation of Everything

// Before even talking about databases, one thing became very clear to me:

// **Data is everything.**

// As a software engineering student, we often focus on coding, frameworks, and building applications. But without data, none of these systems actually work.

// Think about it like this:

// **You can't build bricks without clay.**

// In the same way:

// **You can't build applications without data.**

// Every system depends on data:

// - Instagram → user posts, likes, comments
// - Banking apps → transactions, balances
// - College systems → student records

// So the real challenge is not just storing data, but:

// - Managing it
// - Scaling it
// - Accessing it efficiently

// ## 2. The Problem with Traditional Databases

// Initially, databases were designed using **Relational Database Management Systems (RDBMS)**.

// They worked well for:

// - Structured data
// - Fixed schemas
// - Small to medium applications

// But as data kept growing, problems started appearing:

// ### Limitations:

// - Difficult to scale for millions of users
// - Rigid table structure
// - Complex joins slow down performance
// - Not suitable for unstructured data (like JSON, media, logs)

// > Traditional databases are like well-organized cupboards — great for neat items, but not for messy real-world data.

// ## 3. Enter NoSQL: A New Way of Thinking

// To solve these problems, **NoSQL databases** were introduced.

// NoSQL = **Not Only SQL**

// It doesn't mean SQL is useless — it just means we need more flexible ways to handle modern data.

// ## 4. Core Idea Behind NoSQL

// NoSQL is built on one simple idea:

// > "Handle data the way it actually exists in real life."

// Instead of forcing data into tables:

// - It allows flexible structures
// - It supports massive scaling
// - It handles real-time data

// ## 5. Key Features of NoSQL

// ### Flexible Data (Schema-less)

// You don't need to define everything in advance. Example:

// \`\`\`json
// {
//   "name": "Pema",
//   "skills": ["C++", "Python"]
// }
// \`\`\`

// Later, you can add:

// \`\`\`json
// {
//   "hobbies": ["reading"]
// }
// \`\`\`

// No problem. No redesign needed.

// ### Horizontal Scaling

// Instead of upgrading one machine, add more machines (servers). This is how big companies handle millions of users.

// ### High Performance

// - Faster for large-scale reads/writes
// - Optimized for modern applications

// ### Distributed Systems

// Data is stored across multiple nodes. If one fails, others still work.

// ## 6. Types of NoSQL Databases

// NoSQL is not just one thing — it is a category.

// ### Key-Value Stores

// - Simple and fast
// - Like a dictionary
// - Use case: session storage

// ### Document Databases

// - Store JSON-like data
// - Very flexible
// - Most popular in web development

// ### Column-Family Databases

// - Store large-scale structured data
// - Used in analytics

// ### Graph Databases

// - Focus on relationships
// - Example: social networks

// ## 7. Why Data Handling Matters So Much

// **The problem is not data — the problem is handling data.**

// Today's systems deal with:

// - Huge volume (Big Data)
// - Variety (structured + unstructured)
// - Velocity (real-time data)

// This is often called the **3 Vs of Big Data**: Volume, Variety, and Velocity. And this is exactly why NoSQL exists.

// ## 8. SQL vs NoSQL (My Understanding)

// | SQL | NoSQL |
// | Structured | Flexible |
// | Fixed schema | Dynamic schema |
// | Vertical scaling | Horizontal scaling |
// | Strong consistency | Eventual consistency |

// My takeaway:

// - SQL = stability
// - NoSQL = scalability

// ## 9. Real-World Thinking

// Instead of just theory, I tried to think practically:

// - If I build a banking system → use SQL
// - If I build a social media app → use NoSQL

// Because banking needs strict accuracy, and social media needs speed and scalability.

// ## 10. A Developer's Realization

// At first, I thought: "Why not just use one database for everything?"

// But now I understand: **Different problems need different tools.**

// And more importantly: **Good software engineering is about choosing the right tool, not just writing code.**

// ## 11. Personal Reflection

// What stood out to me most in this unit is not just NoSQL itself, but the mindset shift:

// - From structured → flexible
// - From single system → distributed systems
// - From small data → massive data thinking

// > Data is not just stored — it is designed, managed, and scaled.

// ## 12. Conclusion

// To conclude:

// - Data is the foundation of all applications
// - Traditional databases are powerful but limited
// - NoSQL provides flexibility and scalability
// - Choosing the right database depends on the problem

// **"Without data, software is empty. Without proper data handling, software fails."**`,
//     tags: ['NoSQL', 'Databases', 'Unit 1'],
//     date: 'March 2026',
//     readTime: '8 min read',
//     emoji: '🗄️',
//     color: 'linear-gradient(135deg, #f0f9ff, #bae6fd)',
//   },
// ]

// export function usePosts() {
//   const [posts, setPosts] = useState(() => {
//     try {
//       const raw = localStorage.getItem(KEY)
//       if (raw) {
//         const stored = JSON.parse(raw)
//         const storedIds = new Set(stored.map(p => p.id))
//         const newSample = SAMPLE.filter(p => !storedIds.has(p.id))
//         return newSample.length > 0 ? [...stored, ...newSample] : stored
//       }
//       return SAMPLE
//     } catch {
//       return SAMPLE
//     }
//   })

//   useEffect(() => {
//     try { localStorage.setItem(KEY, JSON.stringify(posts)) } catch {}
//   }, [posts])

//   const addPost    = (p) => setPosts(prev => [p, ...prev])
//   const deletePost = (id) => setPosts(prev => prev.filter(p => p.id !== id))
//   const updatePost = (updated) => setPosts(prev => prev.map(p => p.id === updated.id ? updated : p))

//   return { posts, addPost, deletePost, updatePost }
// }


import { useState, useEffect } from 'react'

const KEY = 'sakura_notes_v1'

const SAMPLE = [
  {
    id: 1,
    title: 'Unit 1: Understanding Data & the Rise of NoSQL',
    excerpt: 'Why traditional databases struggle at scale, and how NoSQL solves it with flexibility, horizontal scaling, and distributed systems.',
    content: `## 1. Data is the Foundation of Everything


Before even talking about databases, one thing became very clear to me:

**Data is everything.**

As a software engineering student, we often focus on coding, frameworks, and building applications. But without data, none of these systems actually work.

Think about it like this:

**You can't build bricks without clay.**

In the same way:

**You can't build applications without data.**

Every system depends on data:

- Instagram → user posts, likes, comments
- Banking apps → transactions, balances
- College systems → student records

So the real challenge is not just storing data, but:

- Managing it
- Scaling it
- Accessing it efficiently

## 2. The Problem with Traditional Databases

Initially, databases were designed using **Relational Database Management Systems (RDBMS)**.

They worked well for:

- Structured data
- Fixed schemas
- Small to medium applications

But as data kept growing, problems started appearing:

### Limitations:

- Difficult to scale for millions of users
- Rigid table structure
- Complex joins slow down performance
- Not suitable for unstructured data (like JSON, media, logs)

> Traditional databases are like well-organized cupboards — great for neat items, but not for messy real-world data.

## 3. Enter NoSQL: A New Way of Thinking

To solve these problems, **NoSQL databases** were introduced.

NoSQL = **Not Only SQL**

It doesn't mean SQL is useless — it just means we need more flexible ways to handle modern data.

## 4. Core Idea Behind NoSQL

NoSQL is built on one simple idea:

> "Handle data the way it actually exists in real life."

Instead of forcing data into tables:

- It allows flexible structures
- It supports massive scaling
- It handles real-time data

## 5. Key Features of NoSQL

### Flexible Data (Schema-less)

You don't need to define everything in advance. Example:

\`\`\`json
{
  "name": "Pema",
  "skills": ["C++", "Python"]
}
\`\`\`

Later, you can add:

\`\`\`json
{
  "hobbies": ["reading"]
}
\`\`\`

No problem. No redesign needed.

### Horizontal Scaling

Instead of upgrading one machine, add more machines (servers). This is how big companies handle millions of users.

### High Performance

- Faster for large-scale reads/writes
- Optimized for modern applications

### Distributed Systems

Data is stored across multiple nodes. If one fails, others still work.

## 6. Types of NoSQL Databases

NoSQL is not just one thing — it is a category.

### Key-Value Stores

- Simple and fast
- Like a dictionary
- Use case: session storage

### Document Databases

- Store JSON-like data
- Very flexible
- Most popular in web development

### Column-Family Databases

- Store large-scale structured data
- Used in analytics

### Graph Databases

- Focus on relationships
- Example: social networks

## 7. Why Data Handling Matters So Much

**The problem is not data — the problem is handling data.**

Today's systems deal with:

- Huge volume (Big Data)
- Variety (structured + unstructured)
- Velocity (real-time data)

This is often called the **3 Vs of Big Data**: Volume, Variety, and Velocity. And this is exactly why NoSQL exists.

## 8. SQL vs NoSQL (My Understanding)

| SQL | NoSQL |
| Structured | Flexible |
| Fixed schema | Dynamic schema |
| Vertical scaling | Horizontal scaling |
| Strong consistency | Eventual consistency |

My takeaway:

- SQL = stability
- NoSQL = scalability

## 9. Real-World Thinking

Instead of just theory, I tried to think practically:

- If I build a banking system → use SQL
- If I build a social media app → use NoSQL

Because banking needs strict accuracy, and social media needs speed and scalability.

## 10. A Developer's Realization

At first, I thought: "Why not just use one database for everything?"

But now I understand: **Different problems need different tools.**

And more importantly: **Good software engineering is about choosing the right tool, not just writing code.**

## 11. Personal Reflection

What stood out to me most in this unit is not just NoSQL itself, but the mindset shift:

- From structured → flexible
- From single system → distributed systems
- From small data → massive data thinking

> Data is not just stored — it is designed, managed, and scaled.

## 12. Conclusion

To conclude:

- Data is the foundation of all applications
- Traditional databases are powerful but limited
- NoSQL provides flexibility and scalability
- Choosing the right database depends on the problem

**"Without data, software is empty. Without proper data handling, software fails."**`,

    tags: ['NoSQL', 'Databases', 'Unit 1'],
    date: 'March 2026',
    readTime: '8 min read',
    emoji: '🗄️',
    color: 'linear-gradient(135deg, #f0f9ff, #bae6fd)',
  },
]

export function usePosts() {
  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY)

      if (raw) {
        let stored = JSON.parse(raw)

        // ✅ REMOVE old unwanted post (id: 1)
        stored = stored.filter(p => p.id !== 1)

        // ✅ Merge with SAMPLE safely
        const storedIds = new Set(stored.map(p => p.id))
        const newSample = SAMPLE.filter(p => !storedIds.has(p.id))

        return newSample.length > 0 ? [...stored, ...newSample] : stored
      }

      return SAMPLE
    } catch {
      return SAMPLE
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(posts))
    } catch {}
  }, [posts])

  const addPost = (p) => setPosts(prev => [p, ...prev])
  const deletePost = (id) => setPosts(prev => prev.filter(p => p.id !== id))
  const updatePost = (updated) =>
    setPosts(prev => prev.map(p => (p.id === updated.id ? updated : p)))

  return { posts, addPost, deletePost, updatePost }
}