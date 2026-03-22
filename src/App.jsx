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
  const { posts, addPost, deletePost, updatePost } = usePosts()
  const [page, setPage] = useState('home')
  const [activePost, setActivePost] = useState(null)

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const goHome = () => { setPage('home'); setActivePost(null); scrollTop() }
  const goBlog = () => { setPage('blog'); setActivePost(null); scrollTop() }

  const handleNav = (p) => {
    if (p === 'home') goHome()
    else if (p === 'blog') goBlog()
    else if (p === 'write') { setPage('write'); scrollTop() }
  }

  const handleOpenPost = (post) => {
    setActivePost(post)
    setPage('post')
    scrollTop()
  }

  const handleSave = (post) => {
    if (page === 'edit') {
      updatePost(post)
      setActivePost(post)
      setPage('post')
      showToast('✏️ Note updated!')
    } else {
      addPost(post)
      goBlog()
      showToast('✿ Note published!')
    }
    scrollTop()
  }

  const handleDelete = (id) => {
    deletePost(id)
    goBlog()
    showToast('🗑 Note deleted')
  }

  const handleEdit = (post) => {
    setActivePost(post)
    setPage('edit')
    scrollTop()
  }

  const handleCancelWrite = () => {
    if (page === 'edit') { setPage('post'); scrollTop() }
    else goHome()
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Petals />
      <Nav page={page} setPage={handleNav} />

      <div style={{ flex: 1 }}>
        {page === 'home' && (
          <HomePage posts={posts} setPage={handleNav} onOpenPost={handleOpenPost} />
        )}
        {page === 'blog' && (
          <BlogPage posts={posts} onOpenPost={handleOpenPost} />
        )}
        {page === 'post' && activePost && (
          <PostPage
            post={activePost}
            onBack={goBlog}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        {(page === 'write' || page === 'edit') && (
          <WritePage
            initialPost={page === 'edit' ? activePost : null}
            onSave={handleSave}
            onCancel={handleCancelWrite}
          />
        )}
      </div>

      <Footer />
      <Toast />
    </div>
  )
}
