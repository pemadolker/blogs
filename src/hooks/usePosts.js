import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'

// Map DB row (snake_case) → app post (camelCase)
function fromDB(row) {
  return {
    id:       row.id,
    title:    row.title,
    excerpt:  row.excerpt  || '',
    content:  row.content  || '',
    tags:     row.tags     || [],
    date:     row.date     || '',
    readTime: row.read_time || '',
    emoji:    row.emoji    || '🌸',
    color:    row.color    || 'linear-gradient(135deg, #fdf0f3, #f2c4ce)',
    createdAt: row.created_at,
  }
}

// Map app post → DB row (snake_case)
function toDB(post) {
  return {
    title:     post.title,
    excerpt:   post.excerpt,
    content:   post.content,
    tags:      post.tags,
    date:      post.date,
    read_time: post.readTime,
    emoji:     post.emoji,
    color:     post.color,
  }
}

export function usePosts() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  // Fetch all posts
  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      setError(error.message)
    } else {
      setPosts(data.map(fromDB))
    }
    setLoading(false)
  }, [])

  useEffect(() => { fetchPosts() }, [fetchPosts])

  // Add post
  const addPost = async (post) => {
    const { data, error } = await supabase
      .from('posts')
      .insert([toDB(post)])
      .select()
      .single()
    if (error) throw new Error(error.message)
    setPosts(prev => [fromDB(data), ...prev])
    return fromDB(data)
  }

  // Update post
  const updatePost = async (post) => {
    const { data, error } = await supabase
      .from('posts')
      .update(toDB(post))
      .eq('id', post.id)
      .select()
      .single()
    if (error) throw new Error(error.message)
    setPosts(prev => prev.map(p => p.id === post.id ? fromDB(data) : p))
    return fromDB(data)
  }

  // Delete post
  const deletePost = async (id) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)
    if (error) throw new Error(error.message)
    setPosts(prev => prev.filter(p => p.id !== id))
  }

  return { posts, loading, error, addPost, updatePost, deletePost, refetch: fetchPosts }
}
