const SAMPLE = [
  {
    id: 1,
    title: 'Unit 1: Understanding Data & the Rise of NoSQL',
    excerpt: 'Why traditional databases struggle at scale, and how NoSQL solves it with flexibility, horizontal scaling, and distributed systems.',
    content: `## 1. Data is the Foundation of Everything

Before even talking about databases, one thing became very clear to me — **data is everything.**

Every system depends on data:

- Instagram → user posts, likes, comments
- Banking apps → transactions, balances
- College systems → student records

## 2. The Problem with Traditional Databases

**RDBMS** worked well for structured data and fixed schemas. But as data grew, problems appeared:

- Difficult to scale for millions of users
- Rigid table structure
- Complex joins slow down performance
- Not suitable for unstructured data

## 3. Enter NoSQL

NoSQL = **Not Only SQL**. It doesn't mean SQL is useless — it means we need more flexible ways to handle modern data.

## 4. Key Features of NoSQL

**Schema-less** — no need to define structure in advance.

\`\`\`json
{ "name": "Pema", "skills": ["C++", "Python"] }
\`\`\`

**Horizontal Scaling** — add more machines instead of upgrading one.

**High Performance** — faster for large-scale reads and writes.

**Distributed Systems** — data lives across multiple nodes, so if one fails, others still work.

## 5. Types of NoSQL Databases

- **Key-Value** — simple and fast, like a dictionary. Good for session storage.
- **Document** — stores JSON-like data, very flexible. Most popular in web dev.
- **Column-Family** — large-scale structured data, used in analytics.
- **Graph** — focuses on relationships, like social networks.

## 6. SQL vs NoSQL

| SQL | NoSQL |
| Structured | Flexible |
| Fixed schema | Dynamic schema |
| Vertical scaling | Horizontal scaling |
| Strong consistency | Eventual consistency |

My takeaway: **SQL = stability, NoSQL = scalability.**

## 7. Personal Reflection

What stood out to me is the mindset shift — from structured to flexible, from single systems to distributed, from small data to massive data thinking.

> Data is not just stored — it is designed, managed, and scaled.`,
    tags: ['NoSQL', 'Databases', 'Unit 1'],
    date: 'March 2026',
    readTime: '6 min read',
    emoji: '💻',
    color: 'linear-gradient(135deg, #fdf0f3, #f2c4ce)',
  },
  // your other posts below...
]