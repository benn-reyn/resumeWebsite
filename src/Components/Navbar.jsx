import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav 
            className={cn(
                "fixed w-full z-50 transition-all duration-300", 
                isScrolled 
                    ? "py-3 bg-background/90 backdrop-blur-md border-b border-border/60" 
                    : "py-5 bg-background/70",
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
                {/* Logo/Brand */}
                <a 
                    className="text-xl font-bold text-primary flex items-center group"
                    href="#hero"
                    onClick={closeMenu}
                >
                    <span className="relative z-10 group-hover:text-primary/90 transition-colors">
                        <span className="text-foreground">Hilton's</span> Portfolio
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50 hover:bg-accent rounded-lg transition-colors"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Menu */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 -translate-y-4 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-center">
                        {navItems.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.href} 
                                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                                onClick={closeMenu}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    
                    {/* Close hint for mobile */}
                    <div className="absolute bottom-8 text-muted-foreground text-sm">
                        Click anywhere to close
                    </div>
                </div>

                {/* Overlay for closing mobile menu */}
                {isMenuOpen && (
                    <div 
                        className="fixed inset-0 z-30 md:hidden"
                        onClick={closeMenu}
                    />
                )}
            </div>
        </nav>
    );
};