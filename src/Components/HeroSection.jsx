import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            Hilton
                        </span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
                            Reynolds
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am an economist and fullstack developer with a passion for creation and innovation.
                        I specialize in Data Science, Quantitative Economics, and Game Theoretical Analysis.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-delay-3">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" aria-label="Scroll down">
                    <ArrowDown className="h-6 w-6 text-primary opacity-70" />
                </a>
            </div>
        </section>
    );
};
