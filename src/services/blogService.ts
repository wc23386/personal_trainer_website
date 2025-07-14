import { BlogPost } from '../types/Blog';

// Mock data for blog posts
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: '5 Essential Exercises for Beginners',
      'zh-TW': '初學者必學的5個基礎運動'
    },
    excerpt: {
      en: 'Start your fitness journey with these fundamental exercises that build strength and confidence.',
      'zh-TW': '從這些基礎運動開始您的健身旅程，建立力量和信心。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    instagramUrl: 'https://www.instagram.com/p/C2X1Y2Z3A4B/',
    date: '2024-01-15',
    readTime: 5,
    category: 'fitness',
    tags: ['beginner', 'strength', 'workout'],
    isPublished: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: {
      en: 'Nutrition Tips for Muscle Building',
      'zh-TW': '增肌營養技巧'
    },
    excerpt: {
      en: 'Learn the key nutrition principles to support your muscle building goals effectively.',
      'zh-TW': '學習支持肌肉建設目標的關鍵營養原則。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
    instagramUrl: 'https://www.instagram.com/p/C2X1Y2Z3A4C/',
    date: '2024-01-10',
    readTime: 7,
    category: 'nutrition',
    tags: ['nutrition', 'muscle', 'protein'],
    isPublished: true,
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z'
  },
  {
    id: '3',
    title: {
      en: 'The Importance of Recovery Days',
      'zh-TW': '恢復日的重要性'
    },
    excerpt: {
      en: 'Why rest days are crucial for your fitness progress and how to optimize your recovery.',
      'zh-TW': '為什麼休息日對您的健身進度至關重要，以及如何優化恢復。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    instagramUrl: 'https://www.instagram.com/p/C2X1Y2Z3A4D/',
    date: '2024-01-05',
    readTime: 4,
    category: 'lifestyle',
    tags: ['recovery', 'rest', 'wellness'],
    isPublished: true,
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z'
  },
  {
    id: '4',
    title: {
      en: 'Building Healthy Habits for Life',
      'zh-TW': '建立終身健康習慣'
    },
    excerpt: {
      en: 'Transform your lifestyle with sustainable habits that last beyond your fitness journey.',
      'zh-TW': '用可持續的習慣改變您的生活方式，讓它們在健身旅程之外也能持續。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    instagramUrl: 'https://www.instagram.com/p/C2X1Y2Z3A4E/',
    date: '2024-01-01',
    readTime: 6,
    category: 'lifestyle',
    tags: ['habits', 'lifestyle', 'sustainability'],
    isPublished: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '5',
    title: {
      en: 'Morning Workout Routine for Busy People',
      'zh-TW': '忙碌人士的晨間運動習慣'
    },
    excerpt: {
      en: 'Quick and effective morning workouts that fit into your busy schedule.',
      'zh-TW': '適合您忙碌行程的快速有效晨間運動。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    instagramUrl: 'https://www.instagram.com/p/C2X1Y2Z3A4F/',
    date: '2023-12-28',
    readTime: 8,
    category: 'fitness',
    tags: ['morning', 'routine', 'busy'],
    isPublished: true,
    createdAt: '2023-12-28T10:00:00Z',
    updatedAt: '2023-12-28T10:00:00Z'
  },
  {
    id: '6',
    title: {
      en: 'Mindful Eating: Transform Your Relationship with Food',
      'zh-TW': '正念飲食：改變您與食物的關係'
    },
    excerpt: {
      en: 'Learn how mindful eating can improve your nutrition and overall well-being.',
      'zh-TW': '了解正念飲食如何改善您的營養和整體健康。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
    instagramUrl: 'https://www.instagram.com/p/C2X1Y2Z3A4G/',
    date: '2023-12-25',
    readTime: 6,
    category: 'nutrition',
    tags: ['mindful', 'eating', 'wellness'],
    isPublished: true,
    createdAt: '2023-12-25T10:00:00Z',
    updatedAt: '2023-12-25T10:00:00Z'
  }
];

export const blogService = {
  // Get all published blog posts
  getAllPosts: (): Promise<BlogPost[]> => {
    return Promise.resolve(mockBlogPosts.filter(post => post.isPublished));
  },

  // Get a single blog post by ID
  getPostById: (id: string): Promise<BlogPost | null> => {
    const post = mockBlogPosts.find(p => p.id === id && p.isPublished);
    return Promise.resolve(post || null);
  },

  // Get posts by category
  getPostsByCategory: (category: string): Promise<BlogPost[]> => {
    const posts = mockBlogPosts.filter(post => 
      post.category === category && post.isPublished
    );
    return Promise.resolve(posts);
  },

  // Search posts by tags
  searchPostsByTags: (tags: string[]): Promise<BlogPost[]> => {
    const posts = mockBlogPosts.filter(post => 
      post.isPublished && tags.some(tag => post.tags.includes(tag))
    );
    return Promise.resolve(posts);
  },

  // Get recent posts (last 6)
  getRecentPosts: (): Promise<BlogPost[]> => {
    const posts = mockBlogPosts
      .filter(post => post.isPublished)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6);
    return Promise.resolve(posts);
  }
}; 