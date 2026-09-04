import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";
import LanguageSwitcher from "../components/ui/LanguageSwitcher";
import { Calendar, Clock, Search, Sparkles, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { useTranslation } from "react-i18next";
import SEO from "../components/ui/SEO";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Sort blog posts by id descending (newest first)
    const sortedPosts = useMemo(() => {
        return [...blogPosts].sort((a, b) => b.id - a.id);
    }, []);

    // Extract unique categories from tags
    const categories = ["All", "AI", "ML", "NLP", "DSA", "Web"];

    // Filter posts by category and search
    const filteredPosts = useMemo(() => {
        return sortedPosts.filter((post) => {
            const postContent = post[currentLang] || post['en'];
            const matchesCategory = 
                selectedCategory === "All" || 
                post.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase());
            
            const matchesSearch = 
                !searchQuery.trim() ||
                postContent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                postContent.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesCategory && matchesSearch;
        });
    }, [sortedPosts, selectedCategory, searchQuery, currentLang]);

    const isDefaultView = selectedCategory === "All" && !searchQuery.trim();
    const featuredPost = isDefaultView && sortedPosts.length > 0 ? sortedPosts[0] : null;
    const remainingPosts = isDefaultView ? sortedPosts.slice(1) : filteredPosts;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <div className="container py-10 md:py-20 max-w-5xl overflow-x-hidden">
            <SEO
                title="Blog - Farhod Soyilov"
                description="Read my latest thoughts on software engineering, web architecture, React, and artificial intelligence."
            />

            {/* Page Header */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/50">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        ENGINEERING INSIGHTS
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {t('blog.title')}
                    </h1>
                    <p className="text-muted-foreground text-lg mt-2 max-w-xl">
                        {t('blog.subtitle')}
                    </p>
                </motion.div>
                <div className="shrink-0">
                    <LanguageSwitcher />
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                                selectedCategory === category
                                    ? "bg-primary text-primary-foreground shadow-sm scale-105"
                                    : "bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                        >
                            {category === "All" && currentLang === "uz" ? "Barchasi" : category}
                        </button>
                    ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={currentLang === "uz" ? "Maqolani qidirish..." : "Search articles..."}
                        className="w-full pl-9 pr-4 py-1.5 rounded-full text-xs bg-background/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                        >
                            ×
                        </button>
                    )}
                </div>
            </div>

            {/* FEATURED POST (Hero Card on Default View) */}
            {featuredPost && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    {(() => {
                        const postContent = featuredPost[currentLang] || featuredPost['en'];
                        return (
                            <Link to={`/blogs/${featuredPost.id}`} className="group block">
                                <GlassCard className="p-0 overflow-hidden border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                        {/* Image Section */}
                                        <div className="lg:col-span-7 relative aspect-video overflow-hidden bg-muted">
                                            <img
                                                src={featuredPost.image}
                                                alt={postContent.title}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                                            <div className="absolute top-4 left-4 flex items-center gap-2">
                                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-lg flex items-center gap-1.5">
                                                    <Sparkles className="w-3 h-3" />
                                                    {currentLang === "uz" ? "Yangi Maqola" : "Featured"}
                                                </span>
                                                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md border border-white/20">
                                                    {featuredPost.tags[0]}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar className="h-3.5 w-3.5 text-primary" /> {featuredPost.date}
                                                    </span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock className="h-3.5 w-3.5 text-primary" /> {featuredPost.readTime} {t('blog.readTime')}
                                                    </span>
                                                </div>

                                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                                                    {postContent.title}
                                                </h2>

                                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                                                    {postContent.excerpt}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex flex-wrap gap-1.5 mb-6">
                                                    {featuredPost.tags.map(tag => (
                                                        <span 
                                                            key={tag} 
                                                            className="px-2.5 py-0.5 rounded-md bg-secondary/80 text-[11px] font-medium text-secondary-foreground border border-border/60"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1.5 transition-transform duration-200">
                                                    {currentLang === "uz" ? "Maqolani o‘qish" : "Read Full Article"}
                                                    <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        );
                    })()}
                </motion.div>
            )}

            {/* REMAINING POSTS GRID (2x2 Balanced Grid) */}
            {remainingPosts.length > 0 ? (
                <div>
                    {isDefaultView && (
                        <h3 className="text-lg font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
                            <Tag className="w-4 h-4 text-primary" />
                            {currentLang === "uz" ? "Barcha Maqolalar" : "All Articles"}
                        </h3>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {remainingPosts.map((post, idx) => {
                            const postContent = post[currentLang] || post['en'];

                            return (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    className="h-full"
                                >
                                        <Link to={`/blogs/${post.id}`} className="group h-full block">
                                            <GlassCard className="cursor-pointer h-full flex flex-col overflow-hidden p-0 border-border/70 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl">
                                                {/* Image Container with 16:9 Aspect Ratio */}
                                                <div className="relative aspect-video w-full overflow-hidden bg-muted/50">
                                                    <img
                                                        src={post.image}
                                                        alt={postContent.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-background/80 text-foreground backdrop-blur-md border border-border shadow-sm">
                                                            {post.tags[0]}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 flex flex-col flex-grow justify-between">
                                                    <div>
                                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="h-3 w-3" /> {post.date}
                                                            </span>
                                                            <span>•</span>
                                                            <span className="flex items-center gap-1">
                                                                <Clock className="h-3 w-3" /> {post.readTime} {t('blog.readTime')}
                                                            </span>
                                                        </div>

                                                        <h2 className="text-xl font-bold mb-2.5 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                                            {postContent.title}
                                                        </h2>
                                                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-4">
                                                            {postContent.excerpt}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                                                            {post.tags.map(tag => (
                                                                <span 
                                                                    key={tag} 
                                                                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground"
                                                                >
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </GlassCard>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                    </div>
                </div>
            ) : (
                <GlassCard className="p-12 text-center my-8">
                    <p className="text-muted-foreground text-sm mb-4">
                        {currentLang === "uz" 
                            ? "Qidiruv bo‘yicha hech qanday maqola topilmadi." 
                            : "No articles found matching your criteria."}
                    </p>
                    <button
                        onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                        className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                        {currentLang === "uz" ? "Filtrlarni tozalash" : "Reset Filters"}
                    </button>
                </GlassCard>
            )}
        </div>
    );
}
