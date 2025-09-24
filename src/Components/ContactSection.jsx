import { Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            await emailjs.send(
                'service_xk3wrd4', 
                'template_lqqtxon', 
                data,
                'dt68r31SQ2XsgLMSz'
            );
            
            toast({
                title: "Message Sent!",
                description: "I'll get back to you soon!" 
            });
            e.target.reset(); // Clear the form after successful submission
        } catch (error) {
            console.error('Error sending email:', error);
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out to me via email or phone. I'm always open to discussing new opportunities and projects.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 mt-1">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a 
                                        href="mailto:reynoldsb200@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        reynoldsb200@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 mt-1">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a 
                                        href="tel:+18438190040" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        (843) 819-0040
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 mt-1">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">
                                        Clemson/Charleston, SC
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://linkedin.com/in/your-profile" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                >
                                    <Linkedin className="h-5 w-5 text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-card p-8 rounded-lg shadow-sm border">
                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors disabled:opacity-50"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors disabled:opacity-50"
                                        placeholder="johndoe@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-colors disabled:opacity-50"
                                        placeholder="Hello, I'd like to discuss..."
                                    />
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className={cn(
                                        "w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        isLoading && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {isLoading ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};