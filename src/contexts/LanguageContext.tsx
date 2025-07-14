import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh-TW';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.appointment': 'Appointment',
      'nav.testimonials': 'Testimonials',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      
      // Home Page
      'home.hero.title': 'Transforming Lives Through Fitness',
      'home.hero.cta': 'Book a Session',
      'home.about.title': 'About Me',
      'home.about.intro': 'Hi! I\'m Your Name, a certified personal trainer passionate about helping people achieve their best selves. With years of experience and a love for fitness, I\'ve guided clients of all ages and backgrounds to healthier, happier lives.',
      'home.about.more': 'I hold multiple certifications in strength, mobility, and nutrition. My approach is holistic, focusing on both body and mind. Whether you\'re a beginner, a senior, or looking for group training, I\'m here to support your journey every step of the way!',
      'home.about.readMore': 'Read More',
      'home.about.showLess': 'Show Less',
      
      // Services Page
      'services.title': 'Services',
      'services.1on1.title': '1-on-1 Personal Training',
      'services.1on1.desc': 'Personalized fitness sessions tailored to your goals and abilities.',
      'services.1on1.audience': 'All levels',
      'services.1on1.price': '$50/session',
      'services.1on1.cta': 'Book Now',
      
      'services.group.title': 'Small Group Training (1 to many)',
      'services.group.desc': 'Fun, motivating group workouts for friends or family.',
      'services.group.audience': 'Friends, families, small groups',
      'services.group.price': '$30/person',
      'services.group.cta': 'Book Now',
      
      'services.business.title': 'Business On-Site Group Training',
      'services.business.desc': 'Bring wellness to your workplace with on-site group sessions.',
      'services.business.audience': 'Companies, teams',
      'services.business.price': 'Contact for quote',
      'services.business.cta': 'Contact via LINE',
      
      'services.elderly.title': 'Elderly Health & Movement',
      'services.elderly.desc': 'Gentle, safe exercises to improve mobility and quality of life.',
      'services.elderly.audience': 'Seniors',
      'services.elderly.price': '$40/session',
      'services.elderly.cta': 'Book Now',
      
      'services.kids.title': 'Kids Physical Wellness',
      'services.kids.desc': 'Fun, active sessions to build healthy habits for kids.',
      'services.kids.audience': 'Kids, youth',
      'services.kids.price': '$30/session',
      'services.kids.cta': 'Book Now',
      
      // Appointment Page
      'appointment.title': 'Book Your Session',
      'appointment.subtitle': 'Schedule Your Training Session',
      'appointment.description': 'Choose from 1-on-1, Group, Elderly, or Kids sessions. Select your preferred date and time below.',
      'appointment.calendly.title': 'Calendly Booking Widget',
      'appointment.calendly.instructions': 'Your Calendly embed will appear here. To integrate:',
      'appointment.calendly.step1': 'Create a Calendly account',
      'appointment.calendly.step2': 'Set up your availability',
      'appointment.calendly.step3': 'Copy the embed code',
      'appointment.calendly.step4': 'Replace this placeholder',
      'appointment.calendly.setup': 'Set Up Calendly',
      'appointment.calendly.customize': 'To customize: Replace the data-url above with your actual Calendly event URL',
      
      'appointment.business.title': 'Business On-Site Group Training',
      'appointment.business.desc': 'Bring wellness to your workplace! I offer on-site group training sessions for companies and teams. Perfect for team building, wellness programs, and promoting a healthy work environment.',
      'appointment.business.included': 'What\'s Included:',
      'appointment.business.item1': 'Customized workout programs for your team',
      'appointment.business.item2': 'Flexible scheduling (lunch breaks, after work)',
      'appointment.business.item3': 'Equipment provided if needed',
      'appointment.business.item4': 'Progress tracking and wellness tips',
      'appointment.business.cta': 'Contact via LINE',
      
      // Testimonials Page
      'testimonials.title': 'Client Testimonials',
      'testimonials.more.title': 'See More Success Stories',
      'testimonials.more.desc': 'Follow me on Instagram for daily motivation, workout tips, and more client transformations!',
      'testimonials.more.cta': 'Follow on Instagram',
      
      // Testimonial Content
      'testimonials.sarah.name': 'Sarah M.',
      'testimonials.sarah.text': 'Amazing trainer! Helped me lose 20 pounds and feel confident again. The personalized approach made all the difference.',
      'testimonials.mike.name': 'Mike R.',
      'testimonials.mike.text': 'Best investment I\'ve made in myself. The trainer is knowledgeable, motivating, and really cares about your progress.',
      'testimonials.lisa.name': 'Lisa T.',
      'testimonials.lisa.text': 'Perfect for beginners! I was nervous about starting, but the trainer made me feel comfortable and supported throughout.',
      'testimonials.david.name': 'David K.',
      'testimonials.david.text': 'Incredible results in just 3 months. The trainer\'s expertise in nutrition and exercise is outstanding.',
      'testimonials.emma.name': 'Emma W.',
      'testimonials.emma.text': 'The group sessions are so much fun! Great energy and motivation. I look forward to every workout.',
      'testimonials.john.name': 'John P.',
      'testimonials.john.text': 'Professional, punctual, and passionate about fitness. Helped me achieve goals I never thought possible.',
      
      // Blog Page
      'blog.title': 'Fitness Tips & Lifestyle',
      'blog.subtitle': 'Expert advice, workout tips, and lifestyle inspiration to help you on your fitness journey',
      'blog.inspiration.title': 'Get Daily Fitness Inspiration',
      'blog.inspiration.desc': 'Follow me on Instagram for daily workout tips, nutrition advice, and motivation!',
      'blog.inspiration.cta': 'Follow on Instagram',
      'blog.readMore': 'Read More',
      
      // Blog Content
      'blog.post1.title': '5 Essential Exercises for Beginners',
      'blog.post1.excerpt': 'Start your fitness journey with these fundamental exercises that build strength and confidence.',
      'blog.post2.title': 'Nutrition Tips for Muscle Building',
      'blog.post2.excerpt': 'Learn the key nutrition principles to support your muscle building goals effectively.',
      'blog.post3.title': 'The Importance of Recovery Days',
      'blog.post3.excerpt': 'Why rest days are crucial for your fitness progress and how to optimize your recovery.',
      'blog.post4.title': 'Building Healthy Habits for Life',
      'blog.post4.excerpt': 'Transform your lifestyle with sustainable habits that last beyond your fitness journey.',
      'blog.readTime': 'min read',
      
      // Contact Page
      'contact.title': 'Get In Touch',
      'contact.subtitle': 'Ready to start your fitness journey? Reach me on any platform - I\'m here to help!',
      'contact.line.title': 'LINE Official Account',
      'contact.line.desc': 'Quick questions, booking inquiries, or just want to chat? LINE is the fastest way to reach me!',
      'contact.line.cta': 'Message on LINE',
      'contact.instagram.title': 'Instagram',
      'contact.instagram.desc': 'Follow for daily motivation, workout tips, and behind-the-scenes content. DM me anytime!',
      'contact.instagram.cta': 'Follow & DM',
      'contact.email.title': 'Email',
      'contact.email.desc': 'Prefer email? Send me a detailed message about your fitness goals and questions.',
      'contact.email.cta': 'Send Email',
      'contact.work.title': 'Let\'s Work Together',
      'contact.work.desc': 'Whether you\'re a beginner looking to start your fitness journey, a senior wanting to stay active, or a business interested in workplace wellness programs - I\'m here to help you achieve your goals!',
      'contact.reach': 'Reach me on any platform - I respond quickly and love connecting with clients!',
      
      // Common
      'common.audience': 'Audience:',
      'common.price': 'Price:',
      'common.phone': '+1 (555) 123-4567',
      'common.location': 'Your City, Country',
      'common.bookNow': 'Book Now',
      'common.language': 'Language',
    },
    'zh-TW': {
      // Navigation
      'nav.home': '首頁',
      'nav.services': '服務項目',
      'nav.appointment': '預約課程',
      'nav.testimonials': '客戶見證',
      'nav.blog': '健身部落格',
      'nav.contact': '聯絡我們',
      
      // Home Page
      'home.hero.title': '透過健身改變人生',
      'home.hero.cta': '預約課程',
      'home.about.title': '關於我',
      'home.about.intro': '嗨！我是您的名字，一位認證的私人教練，熱衷於幫助人們實現最佳自我。憑藉多年的經驗和對健身的熱愛，我已經指導了各個年齡層和背景的客戶，讓他們過上更健康、更快樂的生活。',
      'home.about.more': '我擁有力量訓練、靈活性和營養方面的多項認證。我的方法是整體性的，專注於身心平衡。無論您是初學者、長者，還是尋找團體訓練，我都在這裡支持您的每一步旅程！',
      'home.about.readMore': '閱讀更多',
      'home.about.showLess': '收起',
      
      // Services Page
      'services.title': '服務項目',
      'services.1on1.title': '一對一私人訓練',
      'services.1on1.desc': '根據您的目標和能力量身定制的個人化健身課程。',
      'services.1on1.audience': '所有程度',
      'services.1on1.price': '每堂課 $50',
      'services.1on1.cta': '立即預約',
      
      'services.group.title': '小團體訓練（一對多）',
      'services.group.desc': '為朋友或家人提供有趣、激勵人心的團體運動。',
      'services.group.audience': '朋友、家庭、小團體',
      'services.group.price': '每人 $30',
      'services.group.cta': '立即預約',
      
      'services.business.title': '企業到府團體訓練',
      'services.business.desc': '為您的工作場所帶來健康，提供到府團體訓練課程。',
      'services.business.audience': '公司、團隊',
      'services.business.price': '請洽詢報價',
      'services.business.cta': '透過 LINE 聯絡',
      
      'services.elderly.title': '長者健康與運動',
      'services.elderly.desc': '溫和、安全的運動，改善活動能力和生活品質。',
      'services.elderly.audience': '長者',
      'services.elderly.price': '每堂課 $40',
      'services.elderly.cta': '立即預約',
      
      'services.kids.title': '兒童體能健康',
      'services.kids.desc': '有趣、活潑的課程，為孩子建立健康習慣。',
      'services.kids.audience': '兒童、青少年',
      'services.kids.price': '每堂課 $30',
      'services.kids.cta': '立即預約',
      
      // Appointment Page
      'appointment.title': '預約您的課程',
      'appointment.subtitle': '安排您的訓練課程',
      'appointment.description': '選擇一對一、團體、長者或兒童課程。在下方選擇您偏好的日期和時間。',
      'appointment.calendly.title': 'Calendly 預約系統',
      'appointment.calendly.instructions': '您的 Calendly 嵌入將顯示在這裡。要整合：',
      'appointment.calendly.step1': '建立 Calendly 帳戶',
      'appointment.calendly.step2': '設定您的可用時間',
      'appointment.calendly.step3': '複製嵌入程式碼',
      'appointment.calendly.step4': '替換此預留位置',
      'appointment.calendly.setup': '設定 Calendly',
      'appointment.calendly.customize': '要自訂：將上方的 data-url 替換為您實際的 Calendly 活動網址',
      
      'appointment.business.title': '企業到府團體訓練',
      'appointment.business.desc': '為您的工作場所帶來健康！我為公司和團隊提供到府團體訓練課程。非常適合團隊建設、健康計劃和促進健康的工作環境。',
      'appointment.business.included': '包含內容：',
      'appointment.business.item1': '為您的團隊量身定制的運動計劃',
      'appointment.business.item2': '彈性排程（午休時間、下班後）',
      'appointment.business.item3': '如需要可提供設備',
      'appointment.business.item4': '進度追蹤和健康建議',
      'appointment.business.cta': '透過 LINE 聯絡',
      
      // Testimonials Page
      'testimonials.title': '客戶見證',
      'testimonials.more.title': '查看更多成功故事',
      'testimonials.more.desc': '在 Instagram 上關注我，獲得每日激勵、運動技巧和更多客戶轉變故事！',
      'testimonials.more.cta': '在 Instagram 上關注',
      
      // Testimonial Content
      'testimonials.sarah.name': 'Sarah M.',
      'testimonials.sarah.text': '超棒的教練！幫助我減重20磅並重拾自信。個人化的方法讓一切都不一樣了。',
      'testimonials.mike.name': 'Mike R.',
      'testimonials.mike.text': '這是我對自己做過最好的投資。教練知識淵博、激勵人心，真的很關心你的進步。',
      'testimonials.lisa.name': 'Lisa T.',
      'testimonials.lisa.text': '對初學者來說太完美了！我本來很緊張開始，但教練讓我感到舒適和全程支持。',
      'testimonials.david.name': 'David K.',
      'testimonials.david.text': '短短3個月就有驚人的成果。教練在營養和運動方面的專業知識非常出色。',
      'testimonials.emma.name': 'Emma W.',
      'testimonials.emma.text': '團體課程太有趣了！充滿活力和激勵。我期待每一次的運動。',
      'testimonials.john.name': 'John P.',
      'testimonials.john.text': '專業、準時且對健身充滿熱情。幫助我實現了從未想過可能達到的目標。',
      
      // Blog Page
      'blog.title': '健身技巧與生活風格',
      'blog.subtitle': '專業建議、運動技巧和生活風格靈感，幫助您在健身旅程中前進',
      'blog.inspiration.title': '獲得每日健身靈感',
      'blog.inspiration.desc': '在 Instagram 上關注我，獲得每日運動技巧、營養建議和激勵！',
      'blog.inspiration.cta': '在 Instagram 上關注',
      'blog.readMore': '閱讀更多',
      
      // Blog Content
      'blog.post1.title': '初學者必學的5個基礎運動',
      'blog.post1.excerpt': '從這些基礎運動開始您的健身旅程，建立力量和信心。',
      'blog.post2.title': '增肌營養技巧',
      'blog.post2.excerpt': '學習支持肌肉建設目標的關鍵營養原則。',
      'blog.post3.title': '恢復日的重要性',
      'blog.post3.excerpt': '為什麼休息日對您的健身進度至關重要，以及如何優化恢復。',
      'blog.post4.title': '建立終身健康習慣',
      'blog.post4.excerpt': '用可持續的習慣改變您的生活方式，讓它們在健身旅程之外也能持續。',
      'blog.readTime': '分鐘閱讀',
      
      // Contact Page
      'contact.title': '聯絡我們',
      'contact.subtitle': '準備開始您的健身旅程了嗎？透過任何平台聯絡我 - 我在這裡幫助您！',
      'contact.line.title': 'LINE 官方帳號',
      'contact.line.desc': '快速問題、預約詢問，或只是想聊天？LINE 是聯絡我的最快方式！',
      'contact.line.cta': '在 LINE 上傳送訊息',
      'contact.instagram.title': 'Instagram',
      'contact.instagram.desc': '關注每日激勵、運動技巧和幕後內容。隨時私訊我！',
      'contact.instagram.cta': '關注並私訊',
      'contact.email.title': '電子郵件',
      'contact.email.desc': '偏好電子郵件？傳送詳細訊息告訴我您的健身目標和問題。',
      'contact.email.cta': '傳送電子郵件',
      'contact.work.title': '讓我們一起合作',
      'contact.work.desc': '無論您是想要開始健身旅程的初學者、想要保持活躍的長者，還是對工作場所健康計劃感興趣的企業 - 我在這裡幫助您實現目標！',
      'contact.reach': '透過任何平台聯絡我 - 我回應迅速，喜歡與客戶建立聯繫！',
      
      // Common
      'common.audience': '適合對象：',
      'common.price': '價格：',
      'common.phone': '+1 (555) 123-4567',
      'common.location': '您的城市，國家',
      'common.bookNow': '立即預約',
      'common.language': '語言',
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 