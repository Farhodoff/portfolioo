import { Link } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";
import LanguageSwitcher from "../components/ui/LanguageSwitcher";
import { Calendar, Clock, Eye } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { useTranslation } from "react-i18next";

export default function Blog() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';

    return (
        <div className="container py-10 md:py-20 max-w-3xl">
            <div className="mb-12 flex items-end justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
                    <p className="text-muted-foreground text-lg">
                        {t('blog.subtitle')}
                    </p>
                </div>
                <LanguageSwitcher />
            </div>

            <div className="grid gap-6">
                {blogPosts.map((post) => {
                    // Fallback to English if current lang data is missing (though our data is complete)
                    const postContent = post[currentLang] || post['en'];

                    return (
                        <Link key={post.id} to={`/blogs/${post.id}`}>
                            <GlassCard hoverEffect className="cursor-pointer group h-full">
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {postContent.title}
                                </h2>
                                <p className="text-muted-foreground mb-4 line-clamp-2">
                                    {postContent.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-4 items-center text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {post.readTime} {t('blog.readTime')}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Eye className="h-3 w-3" /> {post.views} {t('blog.views')}
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 rounded-md bg-accent/50 text-xs font-medium border border-border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
