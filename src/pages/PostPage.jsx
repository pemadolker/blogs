import React, { useState } from 'react'

/* Very simple markdown-like renderer for the content field */
function renderContent(text) {
  if (!text) return []
  const lines = text.split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim()
      const codeLines = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i}><code>{codeLines.join('\n')}</code></pre>
      )
      i++
      continue
    }

    // h2
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i}>{line.slice(3)}</h2>)
      i++; continue
    }
    // h3
    if (line.startsWith('### ')) {
      elements.push(<h3 key={i}>{line.slice(4)}</h3>)
      i++; continue
    }
    // blockquote
    if (line.startsWith('> ')) {
      elements.push(<blockquote key={i}>{inlineFormat(line.slice(2))}</blockquote>)
      i++; continue
    }
    // unordered list — collect consecutive items
    if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(<li key={i}>{inlineFormat(lines[i].slice(2))}</li>)
        i++
      }
      elements.push(<ul key={'ul' + i}>{items}</ul>)
      continue
    }
    // blank line → skip
    if (line.trim() === '') { i++; continue }

    // paragraph
    elements.push(<p key={i}>{inlineFormat(line)}</p>)
    i++
  }

  return elements
}

function inlineFormat(text) {
  // bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function PostPage({ post, onBack, onEdit, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const EMOJIS = ['🌸','📝','💻','🌿','☁️','✨','📚','🍵','🔬','🧩']
  const emoji = post.emoji || EMOJIS[post.id % EMOJIS.length]

  return (
    <main className="page">
      <div className="post-container">

        <button className="back-link" onClick={onBack}>
          ← Back to all notes
        </button>

        <header className="post-header">
          <div className="post-tags">
            {(post.tags || []).map(t => (
              <span key={t} className="tag sakura">{t}</span>
            ))}
          </div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span>📅 {post.date}</span>
            {post.readTime && <><span>·</span><span>⏱ {post.readTime}</span></>}
          </div>
          <div className="post-divider" />
        </header>

        <article className="post-content">
          {renderContent(post.content || post.excerpt || '')}
        </article>

        {/* Actions */}
        <div className="post-actions">
          <button className="btn-edit" onClick={() => onEdit(post)}>✏️ Edit</button>
          {confirmDelete ? (
            <>
              <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)', alignSelf: 'center' }}>
                Are you sure?
              </span>
              <button className="btn-cancel" onClick={() => setConfirmDelete(false)}>Cancel</button>
              <button className="btn-delete" onClick={() => onDelete(post.id)}>Yes, delete</button>
            </>
          ) : (
            <button className="btn-delete" onClick={() => setConfirmDelete(true)}>🗑 Delete</button>
          )}
        </div>

      </div>
    </main>
  )
}
