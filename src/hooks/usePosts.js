import { useState, useEffect } from 'react'

const KEY = 'sakura_notes_v1'

const SAMPLE = [
  {
    id: 1,
    title: 'Introduction to Database Management Systems',
    excerpt: 'ACID properties, types of databases, basic SQL queries, and ER diagrams — my notes from Unit 1 of DBMS.',
    content: `A **Database Management System (DBMS)** is software that allows us to store, retrieve, and manage data efficiently. Instead of dumping everything into plain text files, a DBMS gives us structure, relationships, and powerful querying.

## What is a Database?

A database is an organized collection of structured information stored electronically. Think of it like a super-powered spreadsheet where data is related, searchable, and consistent.

> A DBMS is the middleman between the user and the database — it handles all the messy complexity so we don't have to.

## ACID Properties

Transactions in a reliable DBMS follow ACID properties:

- **Atomicity** — A transaction is all or nothing. If one part fails, the whole thing rolls back.
- **Consistency** — Data must always go from one valid state to another.
- **Isolation** — Concurrent transactions don't interfere with each other.
- **Durability** — Once committed, data stays committed (even if the server crashes).

## My Key Takeaways

After this unit, what really clicked is that ACID isn't just a buzzword — it's what makes databases trustworthy enough to store bank transactions or hospital records.

The choice between SQL and NoSQL really comes down to your data shape and access patterns. There's no universal winner — just the right tool for the job 🌸`,
    tags: ['DBMS', 'Databases', 'SQL'],
    date: 'March 2025',
    color: 'linear-gradient(135deg, #fdf0f3, #f2c4ce)',
    emoji: '💻',
    readTime: '5 min read',
  },
]

export function usePosts() {
  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY)
      return raw ? JSON.parse(raw) : SAMPLE
    } catch {
      return SAMPLE
    }
  })

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(posts)) } catch {}
  }, [posts])

  const addPost    = (p) => setPosts(prev => [p, ...prev])
  const deletePost = (id) => setPosts(prev => prev.filter(p => p.id !== id))
  const updatePost = (updated) => setPosts(prev => prev.map(p => p.id === updated.id ? updated : p))

  return { posts, addPost, deletePost, updatePost }
}
