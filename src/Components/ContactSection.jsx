import { Linkedin } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {useToast} from "@/hooks/use-toast"


export const ContactSection = () => {

    const {toast} = useToast();


    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "I'll get back to you soon!" 
            });
    });
    return (
        <section 
        id="contact"
        className="py-24 px-4 relative bg-secondary/30">
            <div className="containter mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                contact me via email at!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:reynoldsb200@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    reynolds200@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+8438190040" className="text-muted-foreground hover:text-primary transition-colors">
                                    843-819-0040
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Clemson/Charleston, SC
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a>
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" 
                    onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlfor="name" className="block text-sm font-medium mb-2"
                                > 
                                {" "}
                                Your Name</label>
                                <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Hilton Reynolds..."
                                />
                            </div>

                            <div>
                                <label htmlfor="name" className="block text-sm font-medium mb-2"
                                > 
                                {" "}
                                Your Email</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                placeholder="johndoe@gmail.com..."
                                />
                            </div>

                            <div>
                                <label htmlfor="name" className="block text-sm font-medium mb-2"
                                > 
                                {" "}
                                Your Message
                                </label>
                                <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello..."
                                />
                            </div>
                            <button 
                            type="submit" 
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                            
                            )}>
                                Send Message
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};
}