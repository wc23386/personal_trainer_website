import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { blogService } from '../services/blogService';
import { BlogPost } from '../types/Blog';
import './Blog.css';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const posts = await blogService.getAllPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const categories = [
    { value: 'all', label: { en: 'All Posts', 'zh-TW': '所有文章' } },
    { value: 'fitness', label: { en: 'Fitness', 'zh-TW': '健身' } },
    { value: 'nutrition', label: { en: 'Nutrition', 'zh-TW': '營養' } },
    { value: 'lifestyle', label: { en: 'Lifestyle', 'zh-TW': '生活風格' } }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleReadMore = (instagramUrl: string) => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <div className="blog">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog">
      <div className="container">
        <div className="blog-header">
          <h1>{t('blog.title')}</h1>
          <p>{t('blog.subtitle')}</p>
        </div>

        {/* Category Filter */}
        <div className="blog-categories">
          {categories.map(category => (
            <button
              key={category.value}
              className={`category-btn ${selectedCategory === category.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label[language]}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img 
                  src={post.imageUrl} 
                  alt={post.title[language]}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="placeholder-image hidden">
                  <FaInstagram size={40} />
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                  <span className="read-time">{post.readTime} {t('blog.readTime')}</span>
                  <span className="category">{post.category}</span>
                </div>
                <h3>{post.title[language]}</h3>
                <p>{post.excerpt[language]}</p>
                <div className="blog-tags">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="read-more-btn"
                  onClick={() => handleReadMore(post.instagramUrl)}
                >
                  <FaInstagram /> {t('blog.readMore')}
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <p>No posts found for this category.</p>
          </div>
        )}

        <div className="blog-inspiration">
          <h2>{t('blog.inspiration.title')}</h2>
          <p>{t('blog.inspiration.desc')}</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-cta"
          >
            <FaInstagram /> {t('blog.inspiration.cta')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog; 