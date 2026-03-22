import React, { useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Petals from './components/Petals.jsx'
import Toast, { showToast } from './components/Toast.jsx'
import HomePage from './pages/HomePage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import PostPage from './pages/PostPage.jsx'
import WritePage from './pages/WritePage.jsx'
import { usePosts } from './hooks/usePosts.js'

export default function App() {
  const { posts, loading, error, addPost, updatePost, deletePost } = usePosts()
  const [page, setPage]           = useState('home')
  const [activePost, setActivePost] = useState(null)
  const [saving, setSaving]       = useState(false)

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const goTo = (p) => { setPage(p); scrollTop() }

  const handleOpenPost = (post) => { setActivePost(post); goTo('post') }

  const handleSave = async (post) => {
    setSaving(true)
    try {
      if (page === 'edit') {
        const updated = await updatePost(post)
        setActivePost(updated)
        goTo('post')
        showToast('✿ Note updated!')
      } else {
        await addPost(post)
        goTo('blog')
        showToast('✿ Note published!')
      }
    } catch (e) {
      showToast('⚠️ Error saving — check console')
      console.error(e)
    }
    setSaving(false)
  }

  const handleDelete = async (id) => {
    try {
      await deletePost(id)
      goTo('blog')
      showToast('Note deleted')
    } catch (e) {
      showToast('⚠️ Error deleting')
      console.error(e)
    }
  }

  const handleEdit = (post) => { setActivePost(post); goTo('edit') }

  const handleSetPage = (p) => {
    if (p === 'post' || p === 'edit') return
    setActivePost(null)
    goTo(p)
  }

  const navPage = ['write','edit'].includes(page) ? 'write'
    : ['post','blog'].includes(page) ? 'blog'
    : 'home'

  // Global loading screen on first fetch
  if (loading && posts.length === 0) {
    return (
      <>
        <Petals />
        <Nav page="home" setPage={() => {}} />
        <div style={{
          minHeight:'80vh', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', gap:'1rem',
          position:'relative', zIndex:1,
        }}>
          <div style={{fontSize:'2.5rem', animation:'spin 1.5s linear infinite'}}>🌸</div>
          <p style={{color:'var(--ink-faint)', fontSize:'0.9rem', letterSpacing:'0.08em'}}>
            Loading notes...
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
        <Footer />
      </>
    )
  }

  // Error state
  if (error) {
    return (
      <>
        <Petals />
        <Nav page="home" setPage={() => {}} />
        <div style={{
          minHeight:'80vh', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', gap:'1rem',
          position:'relative', zIndex:1, padding:'2rem', textAlign:'center',
        }}>
          <div style={{fontSize:'2rem'}}>⚠️</div>
          <p style={{color:'var(--ink-soft)', fontSize:'0.95rem', maxWidth:'400px', lineHeight:1.8}}>
            Could not connect to the database.<br/>
            <span style={{color:'var(--ink-faint)', fontSize:'0.85rem'}}>{error}</span>
          </p>
          <button
            className="hero-cta"
            onClick={() => window.location.reload()}
            style={{marginTop:'0.5rem'}}
          >Try again</button>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Petals />
      <Nav page={navPage} setPage={handleSetPage} />

      {page === 'home' && (
        <HomePage posts={posts} setPage={goTo} onOpenPost={handleOpenPost} />
      )}
      {page === 'blog' && (
        <BlogPage posts={posts} onOpenPost={handleOpenPost} />
      )}
      {page === 'post' && activePost && (
        <PostPage
          post={activePost}
          onBack={() => goTo('blog')}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
      {(page === 'write' || page === 'edit') && (
        <WritePage
          initialPost={page === 'edit' ? activePost : null}
          onSave={handleSave}
          onCancel={() => goTo(page === 'edit' ? 'post' : 'blog')}
          saving={saving}
        />
      )}

      <Footer />
      <Toast />
    </>
  )
}
