import { useState } from "react";
import { motion } from "framer-motion";
import { 
    Download, 
    Printer, 
    Eye, 
    FileText, 
    Mail, 
    Phone, 
    MapPin, 
    Globe, 
    Github, 
    Linkedin, 
    Briefcase, 
    GraduationCap, 
    Award, 
    Layers, 
    ExternalLink,
    CheckCircle2,
    Sparkles
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import SkillTag from "../components/ui/SkillTag";
import SEO from "../components/ui/SEO";
import { CV_DATA } from "../data/cvData";

export default function CV() {
    const [viewMode, setViewMode] = useState("web"); // "web" or "pdf"
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(CV_DATA.personalInfo.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handlePrint = () => {
        window.print();
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <div className="container py-10 md:py-16 max-w-5xl overflow-x-hidden print:p-0 print:max-w-none">
            <SEO
                title="Curriculum Vitae (CV) - Farhod Soyilov"
                description="Professional CV and Resume of Farhod Soyilov, Full-Stack Developer specializing in FastAPI, Django, Node.js, React, and Next.js."
            />

            {/* Top Bar: Title & Action Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border/60 mb-8 print:hidden">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        CURRICULUM VITAE
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Curriculum Vitae & Resume
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Download or browse Farhod Soyilov's verified professional resume.
                    </p>
                </div>

                {/* Main Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                    <Button 
                        href={CV_DATA.personalInfo.pdfUrl}
                        download={CV_DATA.personalInfo.pdfFilename}
                        size="md"
                        className="shadow-md hover:shadow-primary/25 transition-all gap-2"
                    >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                    </Button>

                    <Button 
                        onClick={handlePrint}
                        variant="outline"
                        size="md"
                        className="gap-2"
                    >
                        <Printer className="w-4 h-4" />
                        <span>Print</span>
                    </Button>

                    {/* View Switcher Tabs */}
                    <div className="flex items-center bg-muted/70 p-1 rounded-lg border border-border/50 text-xs">
                        <button
                            onClick={() => setViewMode("web")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                                viewMode === "web"
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Web View</span>
                        </button>
                        <button
                            onClick={() => setViewMode("pdf")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                                viewMode === "pdf"
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            <Eye className="w-3.5 h-3.5" />
                            <span>PDF Viewer</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* CONDITIONAL RENDERING: PDF VIEWER OR WEB CV */}
            {viewMode === "pdf" ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between p-4 rounded-xl border border-border/80 bg-muted/40 backdrop-blur-sm text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Eye className="w-4 h-4 text-primary" />
                            <span>Showing embedded document preview for <strong>{CV_DATA.personalInfo.pdfFilename}</strong></span>
                        </div>
                        <a
                            href={CV_DATA.personalInfo.pdfUrl}
                            download={CV_DATA.personalInfo.pdfFilename}
                            className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline text-xs md:text-sm"
                        >
                            <Download className="w-4 h-4" /> Download Original PDF
                        </a>
                    </div>

                    <div className="w-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                        <iframe
                            src={`${CV_DATA.personalInfo.pdfUrl}#toolbar=1&navpanes=0`}
                            title="Farhod Soyilov CV Preview"
                            className="w-full h-[900px] border-none"
                        />
                    </div>
                </div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-10"
                >
                    {/* CV Header / Candidate Profile Card */}
                    <motion.div variants={itemVariants}>
                        <GlassCard className="p-8 md:p-10 relative overflow-hidden border-border/80 shadow-xl print:shadow-none print:border-none print:p-0">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                        {CV_DATA.personalInfo.fullName}
                                    </h2>
                                    <p className="text-lg md:text-xl font-semibold text-primary mt-1">
                                        {CV_DATA.personalInfo.title}
                                    </p>
                                    <p className="text-sm font-mono text-muted-foreground mt-0.5">
                                        {CV_DATA.personalInfo.subtitle}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 print:hidden">
                                    <button
                                        onClick={handleCopyEmail}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-background/50 hover:bg-accent transition-colors"
                                    >
                                        <Mail className="w-3.5 h-3.5 text-primary" />
                                        <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                                    </button>
                                    <a
                                        href={CV_DATA.personalInfo.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-background/50 hover:bg-accent transition-colors"
                                    >
                                        <Github className="w-3.5 h-3.5" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href={CV_DATA.personalInfo.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-background/50 hover:bg-accent transition-colors"
                                    >
                                        <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>

                            {/* Contact Badges Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-6 mt-6 border-t border-border/60 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span>{CV_DATA.personalInfo.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Phone className="w-4 h-4 text-primary shrink-0" />
                                    <a href={`tel:${CV_DATA.personalInfo.phone}`} className="hover:text-foreground transition-colors">
                                        {CV_DATA.personalInfo.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Mail className="w-4 h-4 text-primary shrink-0" />
                                    <a href={`mailto:${CV_DATA.personalInfo.email}`} className="hover:text-foreground transition-colors truncate">
                                        {CV_DATA.personalInfo.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Globe className="w-4 h-4 text-primary shrink-0" />
                                    <a href={CV_DATA.personalInfo.website} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                                        {CV_DATA.personalInfo.websiteLabel}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Github className="w-4 h-4 text-primary shrink-0" />
                                    <a href={CV_DATA.personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                                        {CV_DATA.personalInfo.githubLabel}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Linkedin className="w-4 h-4 text-primary shrink-0" />
                                    <a href={CV_DATA.personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                                        {CV_DATA.personalInfo.linkedinLabel}
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Professional Summary */}
                    <motion.div variants={itemVariants}>
                        <GlassCard className="p-6 md:p-8 print:border-none print:p-0">
                            <h3 className="text-lg font-bold flex items-center gap-2 text-foreground mb-3">
                                <Sparkles className="w-5 h-5 text-primary" />
                                Professional Summary
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                {CV_DATA.summary}
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div variants={itemVariants}>
                        <GlassCard className="p-6 md:p-8 print:border-none print:p-0">
                            <h3 className="text-lg font-bold flex items-center gap-2 text-foreground mb-6">
                                <Briefcase className="w-5 h-5 text-primary" />
                                Work Experience
                            </h3>

                            <div className="border-l-2 border-border pl-6 space-y-10 relative">
                                {CV_DATA.experience.map((job, idx) => (
                                    <div key={idx} className="relative group">
                                        {/* Timeline indicator dot */}
                                        <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-background border-2 border-primary ring-4 ring-background transition-all group-hover:scale-125" />

                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                                            <div>
                                                <h4 className="text-xl font-bold text-foreground">
                                                    {job.role}
                                                </h4>
                                                <p className="text-sm font-semibold text-primary">
                                                    {job.company}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                                <span className="px-2 py-0.5 rounded bg-muted border border-border/60">
                                                    {job.location}
                                                </span>
                                                <span>•</span>
                                                <span className="font-mono">{job.period}</span>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <ul className="space-y-2 mt-3 text-muted-foreground text-sm leading-relaxed">
                                            {job.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="flex items-start gap-2.5">
                                                    <span className="text-primary font-bold mt-1 text-base leading-none">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Technologies used */}
                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {job.technologies.map((tech) => (
                                                <span 
                                                    key={tech}
                                                    className="text-xs px-2.5 py-0.5 rounded-md bg-secondary/80 text-secondary-foreground font-mono"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Technical Skills */}
                    <motion.div variants={itemVariants}>
                        <GlassCard className="p-6 md:p-8 print:border-none print:p-0">
                            <h3 className="text-lg font-bold flex items-center gap-2 text-foreground mb-6">
                                <Layers className="w-5 h-5 text-primary" />
                                Technical Skills
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                        Backend & Systems
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {CV_DATA.skills.backend.map((skill) => (
                                            <SkillTag key={skill} name={skill} />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                        Frontend & Mobile
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {CV_DATA.skills.frontend.map((skill) => (
                                            <SkillTag key={skill} name={skill} />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                        Databases & ORMs
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {CV_DATA.skills.databases.map((skill) => (
                                            <SkillTag key={skill} name={skill} />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                        DevOps, Tools & APIs
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {CV_DATA.skills.tools.map((skill) => (
                                            <SkillTag key={skill} name={skill} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Key Projects */}
                    <motion.div variants={itemVariants}>
                        <GlassCard className="p-6 md:p-8 print:border-none print:p-0">
                            <h3 className="text-lg font-bold flex items-center gap-2 text-foreground mb-6">
                                <FileText className="w-5 h-5 text-primary" />
                                Key Projects
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {CV_DATA.projects.map((proj, pIdx) => (
                                    <div 
                                        key={pIdx} 
                                        className="flex flex-col justify-between p-5 rounded-xl border border-border/70 bg-background/40 hover:border-primary/50 transition-colors"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="text-base font-bold text-foreground">
                                                    {proj.title}
                                                </h4>
                                                {proj.github && (
                                                    <a
                                                        href={proj.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-muted-foreground hover:text-primary transition-colors"
                                                        aria-label={`${proj.title} repository`}
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                                {proj.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            {proj.tech.map((t) => (
                                                <span 
                                                    key={t}
                                                    className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Education & Certifications */}
                    <motion.div variants={itemVariants}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Education */}
                            <GlassCard className="p-6 md:p-8 print:border-none print:p-0">
                                <h3 className="text-lg font-bold flex items-center gap-2 text-foreground mb-4">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                    Education
                                </h3>
                                {CV_DATA.education.map((edu, eIdx) => (
                                    <div key={eIdx} className="space-y-1">
                                        <h4 className="text-base font-bold text-foreground">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-sm font-semibold text-primary">
                                            {edu.institution}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                                            <span>{edu.location}</span>
                                            <span className="font-mono">{edu.period}</span>
                                        </div>
                                    </div>
                                ))}
                            </GlassCard>

                            {/* Languages & Certifications */}
                            <GlassCard className="p-6 md:p-8 print:border-none print:p-0">
                                <h3 className="text-lg font-bold flex items-center gap-2 text-foreground mb-4">
                                    <Award className="w-5 h-5 text-primary" />
                                    Languages & Certifications
                                </h3>
                                <div className="space-y-3">
                                    {CV_DATA.languagesAndCertifications.map((lang, lIdx) => (
                                        <div key={lIdx} className="flex items-center justify-between text-sm py-1 border-b border-border/40 last:border-none">
                                            <span className="font-medium text-foreground">{lang.language}</span>
                                            <div className="flex items-center gap-2">
                                                {lang.badge && (
                                                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                                        {lang.badge}
                                                    </span>
                                                )}
                                                <span className="text-xs text-muted-foreground">{lang.level}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Bottom Floating/Call to action banner */}
                    <motion.div variants={itemVariants} className="pt-4 print:hidden">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/20 to-primary/5 border border-primary/20">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-full bg-primary/20 text-primary">
                                    <Download className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-foreground">
                                        Need an offline copy?
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        Download the official, ATS-optimized PDF version of this resume.
                                    </p>
                                </div>
                            </div>

                            <Button 
                                href={CV_DATA.personalInfo.pdfUrl}
                                download={CV_DATA.personalInfo.pdfFilename}
                                size="md"
                                className="w-full sm:w-auto shrink-0 gap-2"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download Farhod's CV (PDF)</span>
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
