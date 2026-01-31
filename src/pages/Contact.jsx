import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        // NOTE: In a real app, these should be environment variables
        // But for this cloning task, we'll check if they are set
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setTimeout(() => {
                setStatus("error");
                setErrorMessage("EmailJS credentials not configured. Please set VITE_EMAILJS_... in .env file.");
            }, 1000);
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    setStatus("success");
                    form.current.reset();
                    setTimeout(() => setStatus("idle"), 5000);
                },
                (error) => {
                    setStatus("error");
                    setErrorMessage("Failed to send message: " + (error.text || "Unknown error"));
                },
            );
    };

    return (
        <div className="container py-10 md:py-20 max-w-2xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                <p className="text-muted-foreground text-lg">
                    Got a question or proposal, or just want to say hello? Go ahead.
                </p>
            </div>

            <GlassCard className="p-8">
                {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
                        <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                            <CheckCircle className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">Thanks for reaching out. I'll get back to you shortly.</p>
                        <Button onClick={() => setStatus("idle")} variant="outline">Send another message</Button>
                    </div>
                ) : (
                    <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="user_name" className="text-sm font-medium">Your Name</label>
                                <input
                                    name="user_name"
                                    id="user_name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="user_email" className="text-sm font-medium">Email Address</label>
                                <input
                                    name="user_email"
                                    id="user_email"
                                    type="email"
                                    required
                                    placeholder="soyilovfarhod157@gmail.com"
                                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <input
                                name="subject"
                                id="subject"
                                type="text"
                                required
                                placeholder="Project Inquiry"
                                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                required
                                placeholder="Your message..."
                                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                            />
                        </div>

                        {status === "error" && (
                            <div className="flex items-center gap-2 p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                                <AlertCircle className="h-4 w-4" />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <Button type="submit" size="lg" className="w-full md:w-auto" disabled={status === "loading"}>
                            {status === "loading" ? (
                                <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending... </>
                            ) : (
                                <> <Send className="mr-2 h-4 w-4" /> Send Message </>
                            )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground mt-4">
                            I usually respond within 24 hours.
                        </p>
                    </form>
                )}
            </GlassCard>
        </div>
    );
}
