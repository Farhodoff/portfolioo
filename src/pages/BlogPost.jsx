import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Eye, Share2, Check } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import GlassCard from "../components/ui/GlassCard";
import LanguageSwitcher from "../components/ui/LanguageSwitcher";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const [copied, setCopied] = useState(false);

    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        if (!post) {
            navigate("/blogs");
        }
    }, [post, navigate]);

    if (!post) return null;

    const postContent = post[currentLang] || post['en'];

    const handleShare = async () => {
        const shareData = {
            title: postContent.title,
            text: postContent.excerpt,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    return (
        <div className="container py-10 md:py-20 max-w-3xl">
            <div className="flex items-center justify-between mb-8">
                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    {t('blog.back')}
                </Link>
                <LanguageSwitcher />
            </div>

            <article>
                <header className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {postContent.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" /> {post.readTime} {t('blog.readTime')}
                        </span>
                        <span className="flex items-center gap-2">
                            <Eye className="h-4 w-4" /> {post.views} {t('blog.views')}
                        </span>
                    </div>
                </header>

                <GlassCard className="prose prose-invert max-w-none p-8 md:p-10 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: postContent.content }} />
                </GlassCard>

                <div className="mt-10 flex justify-between items-center pt-8 border-t border-border">
                    <p className="text-muted-foreground">
                        {t('blog.thanks')}
                    </p>
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 text-primary hover:underline transition-all"
                    >
                        {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                        {copied ? "Copied!" : t('blog.share')}
                    </button>
                </div>
            </article>
        </div>
    );
}
