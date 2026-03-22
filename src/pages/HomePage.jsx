import React from 'react'
import PostCard from '../components/PostCard.jsx'

export default function HomePage({ posts, setPage, onOpenPost }) {
  const recent = posts.slice(0, 3)

  return (
    <main className="page">

      {/* Hero */}
      <section className="hero">
        <div className="hero-kanji"></div>
        <span className="hero-badge">✿ My Learning Journal</span>
        <h1 className="hero-title">
          My little corner<br />
          of <span className="accent">notes &amp; learnings</span>
        </h1>
        <div className="hero-divider" />
        <p className="hero-sub">
          A quiet place where I collect things I have learned —<br />
          code, concepts, and tiny discoveries, one petal at a time.
        <p> Written for future-me, shared for you </p>
        </p>
        <br />
        <button className="hero-cta" onClick={() => setPage('blog')}>
          Read the blog &nbsp;→
        </button>
      </section>

      {/* Recent posts */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-mark">✿</span>
            <span className="section-label">Recent Notes</span>
            <div className="section-line" />
            <button
              onClick={() => setPage('blog')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '0.8rem', color: 'var(--ink-faint)',
                whiteSpace: 'nowrap', letterSpacing: '0.06em',
                fontFamily: 'var(--font-body)',
              }}
            >See all →</button>
          </div>

          {recent.length === 0 ? (
            <div className="empty-state">
              No posts yet — hit <strong>Write</strong> to add your first note! 🌸
            </div>
          ) : (
            <div className="cards-grid">
              {recent.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} onClick={onOpenPost} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-mark">✿</span>
            <span className="section-label">About this space</span>
            <div className="section-line" />
          </div>
          <div className="about-text">
            <p>
              Pema Dolker
              <p>ペマ・ドルカー</p>
             
              Software engineering student and perpetual learner. This blog is my digital garden — a place to plant ideas, grow understanding, and share what I discover. I write about databases, algorithms, systems design, and everything else that sparks my curiosity.
            </p>
            <p>Think of this as my second brain, but prettier. 🌸</p>
          </div>
        </div>
      </section>

    </main>
  )
}
