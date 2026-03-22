import React from 'react'

export default function Nav({ page, setPage }) {
  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => setPage('home')}>
        <span className="logo-kanji">桜</span>
        Sakura Notes
      </button>
      <ul className="nav-links">
        <li>
          <button
            className={page === 'home' ? 'active' : ''}
            onClick={() => setPage('home')}
          >Home</button>
        </li>
        <li>
          <button
            className={page === 'blog' || page === 'post' ? 'active' : ''}
            onClick={() => setPage('blog')}
          >Blog</button>
        </li>
        <li>
          <button
            className={page === 'write' || page === 'edit' ? 'active' : ''}
            onClick={() => setPage('write')}
          >Write</button>
        </li>
      </ul>
    </nav>
  )
}
