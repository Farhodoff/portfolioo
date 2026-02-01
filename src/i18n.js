import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    blog: {
                        title: "Blog",
                        subtitle: "Sharing my thoughts on software engineering, productivity, and life.",
                        back: "Back to blogs",
                        readTime: "min read",
                        views: "views",
                        share: "Share Article",
                        thanks: "Thanks for reading!"
                    }
                }
            },
            uz: {
                translation: {
                    blog: {
                        title: "Blog",
                        subtitle: "Dasturiy injiniring, unumdorlik va hayot haqida o'z fikrlarimni ulashaman.",
                        back: "Bloglarga qaytish",
                        readTime: "daqiqa o'qish",
                        views: "ko'rishlar",
                        share: "Maqolani ulashish",
                        thanks: "O'qiganingiz uchun rahmat!"
                    }
                }
            }
        }
    });

export default i18n;
