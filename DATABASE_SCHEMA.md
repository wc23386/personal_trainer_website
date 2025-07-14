# Blog Database Schema

## Overview
This document outlines the database schema for the personal trainer website's blog system. The schema is designed to support multilingual content (English and Traditional Chinese) and Instagram integration.

## Blog Posts Table

### Table Name: `blog_posts`

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| `id` | VARCHAR(36) | PRIMARY KEY | Unique identifier (UUID) |
| `title_en` | TEXT | NOT NULL | Post title in English |
| `title_zh_tw` | TEXT | NOT NULL | Post title in Traditional Chinese |
| `excerpt_en` | TEXT | NOT NULL | Post excerpt in English |
| `excerpt_zh_tw` | TEXT | NOT NULL | Post excerpt in Traditional Chinese |
| `content_en` | LONGTEXT | NULL | Full post content in English |
| `content_zh_tw` | LONGTEXT | NULL | Full post content in Traditional Chinese |
| `image_url` | VARCHAR(500) | NOT NULL | URL to featured image |
| `instagram_url` | VARCHAR(500) | NOT NULL | URL to Instagram post |
| `date` | DATE | NOT NULL | Publication date |
| `read_time` | INT | NOT NULL | Estimated read time in minutes |
| `category` | ENUM | NOT NULL | Post category (fitness, nutrition, lifestyle, motivation) |
| `tags` | JSON | NULL | Array of tags |
| `is_published` | BOOLEAN | NOT NULL DEFAULT TRUE | Publication status |
| `created_at` | TIMESTAMP | NOT NULL DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

## SQL Creation Script

```sql
CREATE TABLE blog_posts (
    id VARCHAR(36) PRIMARY KEY,
    title_en TEXT NOT NULL,
    title_zh_tw TEXT NOT NULL,
    excerpt_en TEXT NOT NULL,
    excerpt_zh_tw TEXT NOT NULL,
    content_en LONGTEXT NULL,
    content_zh_tw LONGTEXT NULL,
    image_url VARCHAR(500) NOT NULL,
    instagram_url VARCHAR(500) NOT NULL,
    date DATE NOT NULL,
    read_time INT NOT NULL,
    category ENUM('fitness', 'nutrition', 'lifestyle', 'motivation') NOT NULL,
    tags JSON NULL,
    is_published BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_category (category),
    INDEX idx_date (date),
    INDEX idx_published (is_published),
    INDEX idx_category_date (category, date)
);
```

## Sample Data

```sql
INSERT INTO blog_posts (
    id, title_en, title_zh_tw, excerpt_en, excerpt_zh_tw, 
    image_url, instagram_url, date, read_time, category, tags, is_published
) VALUES (
    '1',
    '5 Essential Exercises for Beginners',
    '初學者必學的5個基礎運動',
    'Start your fitness journey with these fundamental exercises that build strength and confidence.',
    '從這些基礎運動開始您的健身旅程，建立力量和信心。',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    'https://www.instagram.com/p/C2X1Y2Z3A4B/',
    '2024-01-15',
    5,
    'fitness',
    '["beginner", "strength", "workout"]',
    TRUE
);
```

## API Endpoints

### RESTful API Structure

```
GET    /api/blog/posts          - Get all published posts
GET    /api/blog/posts/:id      - Get specific post
POST   /api/blog/posts          - Create new post
PUT    /api/blog/posts/:id      - Update existing post
DELETE /api/blog/posts/:id      - Delete post
GET    /api/blog/posts/category/:category - Get posts by category
GET    /api/blog/posts/search?tags=tag1,tag2 - Search posts by tags
```

### Example API Response

```json
{
  "id": "1",
  "title": {
    "en": "5 Essential Exercises for Beginners",
    "zh-TW": "初學者必學的5個基礎運動"
  },
  "excerpt": {
    "en": "Start your fitness journey with these fundamental exercises...",
    "zh-TW": "從這些基礎運動開始您的健身旅程..."
  },
  "imageUrl": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  "instagramUrl": "https://www.instagram.com/p/C2X1Y2Z3A4B/",
  "date": "2024-01-15",
  "readTime": 5,
  "category": "fitness",
  "tags": ["beginner", "strength", "workout"],
  "isPublished": true,
  "createdAt": "2024-01-15T10:00:00Z",
  "updatedAt": "2024-01-15T10:00:00Z"
}
```

## Implementation Notes

### Frontend Integration
- The React app uses TypeScript interfaces that match this schema
- Blog posts are fetched from the API and displayed with proper language switching
- "Read More" buttons link directly to Instagram posts
- Admin interface allows CRUD operations on blog posts

### Image Management
- Images are stored as URLs (could be from Unsplash, Instagram, or other sources)
- Consider implementing image upload functionality for custom images
- Image optimization and CDN integration recommended for production

### Instagram Integration
- Each blog post links to a corresponding Instagram post
- Instagram URLs should be validated to ensure they're valid post URLs
- Consider implementing Instagram API for automatic post fetching

### Multilingual Support
- All content fields have both English and Traditional Chinese versions
- Language switching is handled at the frontend level
- Consider implementing automatic translation services for content management

### Performance Considerations
- Add indexes on frequently queried columns (category, date, is_published)
- Implement pagination for large datasets
- Consider caching strategies for frequently accessed posts
- Use CDN for image delivery

### Security Considerations
- Implement proper authentication for admin access
- Validate and sanitize all input data
- Use prepared statements to prevent SQL injection
- Implement rate limiting for API endpoints 