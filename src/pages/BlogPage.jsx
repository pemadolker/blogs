import React, { useState, useMemo } from 'react'
import PostCard from '../components/PostCard.jsx'

export default function BlogPage({ posts, onOpenPost }) {
  const [activeTag, setActiveTag] = useState('all')
  const [search, setSearch] = useState('')

  const allTags = useMemo(() => {
    const t = new Set(posts.flatMap(p => p.tags || []))
    return ['all', ...t]
  }, [posts])

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const matchTag = activeTag === 'all' || (p.tags || []).includes(activeTag)
      const matchSearch = !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        (p.excerpt || '').toLowerCase().includes(search.toLowerCase()) ||
        (p.tags || []).some(t => t.toLowerCase().includes(search.toLowerCase()))
      return matchTag && matchSearch
    })
  }, [posts, activeTag, search])

  return (
    <main className="page">
      <div className="container">

        {/* Page hero */}
        <div className="page-hero">
          <p className="hero-badge" style={{ marginBottom: '1.5rem' }}>✿ All notes</p>
          <h1 className="page-hero-title">Learning Journal</h1>
          <p className="page-hero-sub">Every concept, every discovery — collected here.</p>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search notes..."
            style={{
              width: '100%', maxWidth: 400,
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              color: 'var(--ink)',
              outline: 'none',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--sakura-deep)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        {/* Tag filters */}
        <div className="filter-bar">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >{tag}</button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="empty-state">
            No posts match that filter. 🌸
          </div>
        ) : (
          <div className="cards-grid">
            {filtered.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} onClick={onOpenPost} />
            ))}
          </div>
        )}

        <div style={{ height: '5rem' }} />
      </div>
    </main>
  )
}
