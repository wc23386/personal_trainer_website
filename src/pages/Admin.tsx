import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { blogService } from '../services/blogService';
import { BlogPost, BlogPostFormData } from '../types/Blog';
import './Admin.css';

const Admin: React.FC = () => {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState<BlogPostFormData>({
    titleEn: '',
    titleZh: '',
    excerptEn: '',
    excerptZh: '',
    contentEn: '',
    contentZh: '',
    imageUrl: '',
    instagramUrl: '',
    date: new Date().toISOString().split('T')[0],
    readTime: 5,
    category: 'fitness',
    tags: [],
    isPublished: true
  });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const allPosts = await blogService.getAllPosts();
      setPosts(allPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({
      ...prev,
      tags
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPost: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title: {
        en: formData.titleEn,
        'zh-TW': formData.titleZh
      },
      excerpt: {
        en: formData.excerptEn,
        'zh-TW': formData.excerptZh
      },
      content: formData.contentEn && formData.contentZh ? {
        en: formData.contentEn,
        'zh-TW': formData.contentZh
      } : undefined,
      imageUrl: formData.imageUrl,
      instagramUrl: formData.instagramUrl,
      date: formData.date,
      readTime: formData.readTime,
      category: formData.category as 'fitness' | 'nutrition' | 'lifestyle',
      tags: formData.tags,
      isPublished: formData.isPublished,
      createdAt: editingPost?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // In a real app, you would save to a database here
    console.log('Saving post:', newPost);
    
    // For now, just close the form and reload posts
    setShowForm(false);
    setEditingPost(null);
    resetForm();
    await loadPosts();
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      titleEn: post.title.en,
      titleZh: post.title['zh-TW'],
      excerptEn: post.excerpt.en,
      excerptZh: post.excerpt['zh-TW'],
      contentEn: post.content?.en || '',
      contentZh: post.content?.['zh-TW'] || '',
      imageUrl: post.imageUrl,
      instagramUrl: post.instagramUrl,
      date: post.date,
      readTime: post.readTime,
      category: post.category,
      tags: post.tags,
      isPublished: post.isPublished
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      // In a real app, you would delete from database here
      console.log('Deleting post:', id);
      await loadPosts();
    }
  };

  const resetForm = () => {
    setFormData({
      titleEn: '',
      titleZh: '',
      excerptEn: '',
      excerptZh: '',
      contentEn: '',
      contentZh: '',
      imageUrl: '',
      instagramUrl: '',
      date: new Date().toISOString().split('T')[0],
      readTime: 5,
      category: 'fitness',
      tags: [],
      isPublished: true
    });
  };

  const categories = [
    { value: 'fitness', label: { en: 'Fitness', 'zh-TW': '健身' } },
    { value: 'nutrition', label: { en: 'Nutrition', 'zh-TW': '營養' } },
    { value: 'lifestyle', label: { en: 'Lifestyle', 'zh-TW': '生活風格' } }
  ];

  if (loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  return (
    <div className="admin">
      <div className="container">
        <div className="admin-header">
          <h1>Blog Admin</h1>
          <button 
            className="add-post-btn"
            onClick={() => {
              setShowForm(true);
              setEditingPost(null);
              resetForm();
            }}
          >
            <span className="icon">+</span> Add New Post
          </button>
        </div>

        {showForm && (
          <div className="admin-form-container">
            <form onSubmit={handleSubmit} className="admin-form">
              <h2>{editingPost ? 'Edit Post' : 'Add New Post'}</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Title (English)</label>
                  <input
                    type="text"
                    name="titleEn"
                    value={formData.titleEn}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Title (繁體中文)</label>
                  <input
                    type="text"
                    name="titleZh"
                    value={formData.titleZh}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Excerpt (English)</label>
                  <textarea
                    name="excerptEn"
                    value={formData.excerptEn}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </div>
                <div className="form-group">
                  <label>Excerpt (繁體中文)</label>
                  <textarea
                    name="excerptZh"
                    value={formData.excerptZh}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    required
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="form-group">
                  <label>Instagram URL</label>
                  <input
                    type="url"
                    name="instagramUrl"
                    value={formData.instagramUrl}
                    onChange={handleInputChange}
                    required
                    placeholder="https://www.instagram.com/p/..."
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Read Time (minutes)</label>
                  <input
                    type="number"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    min="1"
                    max="60"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label[language]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Tags (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags.join(', ')}
                  onChange={handleTagsChange}
                  placeholder="fitness, workout, beginner"
                />
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                  />
                  Published
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingPost ? 'Update Post' : 'Create Post'}
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => {
                    setShowForm(false);
                    setEditingPost(null);
                    resetForm();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="posts-list">
          <h2>All Posts ({posts.length})</h2>
          <div className="posts-grid">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-image">
                  <img src={post.imageUrl} alt={post.title[language]} />
                  <div className="post-status">
                    {post.isPublished ? <span className="icon">👁️</span> : <span className="icon">👁️‍🗨️</span>}
                  </div>
                </div>
                <div className="post-content">
                  <h3>{post.title[language]}</h3>
                  <p>{post.excerpt[language]}</p>
                  <div className="post-meta">
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="category">{post.category}</span>
                    <span className="read-time">{post.readTime} min</span>
                  </div>
                  <div className="post-actions">
                    <button 
                      className="edit-btn"
                      onClick={() => handleEdit(post)}
                    >
                      <span className="icon">✏️</span> Edit
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(post.id)}
                    >
                      <span className="icon">🗑️</span> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin; 