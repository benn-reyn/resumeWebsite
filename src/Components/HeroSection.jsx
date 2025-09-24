import { ArrowDown as Arrow } from "lucide-react";

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
                    <p className="text-le md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am an economist and fullstack developer with a passion for creation and innovation.
                        I specialize in Data Science, Quantitative Economics, and Game Theoretical Analysis.
                    </p>
                </div>
            </div>
        </section>
    );
};
