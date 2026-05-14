import { Link } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";
import LanguageSwitcher from "../components/ui/LanguageSwitcher";
import { Calendar, Clock } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { useTranslation } from "react-i18next";
import SEO from "../components/ui/SEO";

export default function Blog() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';

    // Sort blog posts by id descending (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => b.id - a.id);

    return (
        <div className="container py-10 md:py-20 max-w-4xl">
            <SEO
                title="Blog - Farhod Soyilov"
                description="Read my latest thoughts on software engineering, technology, and life."
            />
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
                    <p className="text-muted-foreground text-lg">
                        {t('blog.subtitle')}
                    </p>
                </div>
                <LanguageSwitcher />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {sortedPosts.map((post) => {
                    const postContent = post[currentLang] || post['en'];

                    return (
                        <Link key={post.id} to={`/blogs/${post.id}`} className="group h-full">
                            <GlassCard hoverEffect className="cursor-pointer h-full flex flex-col overflow-hidden p-0">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={postContent.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {postContent.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm flex-grow">
                                        {postContent.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-4 items-center text-xs text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" /> {post.readTime} {t('blog.readTime')}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 rounded-md bg-accent/50 text-[10px] font-medium border border-border">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
