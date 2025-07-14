export interface BlogPost {
  id: string;
  title: {
    en: string;
    'zh-TW': string;
  };
  excerpt: {
    en: string;
    'zh-TW': string;
  };
  content?: {
    en: string;
    'zh-TW': string;
  };
  imageUrl: string;
  instagramUrl: string;
  date: string;
  readTime: number; // in minutes
  category: 'fitness' | 'nutrition' | 'lifestyle';
  tags: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostFormData {
  titleEn: string;
  titleZh: string;
  excerptEn: string;
  excerptZh: string;
  contentEn?: string;
  contentZh?: string;
  imageUrl: string;
  instagramUrl: string;
  date: string;
  readTime: number;
  category: 'fitness' | 'nutrition' | 'lifestyle';
  tags: string[];
  isPublished: boolean;
} 