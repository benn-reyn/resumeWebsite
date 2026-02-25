import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Code, Brain, BarChart3, Database, TrendingUp, Calculator, Palette, Server, Cloud, Zap } from "lucide-react";

const skills = [
    { 
        name: "Machine Learning", level: 90, icon: Brain, category: "data-science",
        description: "Predictive modeling, deep learning, and automation",
        technologies: ["Python", "Keras", "Scikit-learn", "PyTorch"]
    },
    { 
        name: "Econometrics", level: 98, icon: TrendingUp, category: "economics",
        description: "Economic Theory and Time Series Analysis for causal inference and forecasting",
        technologies: ["R", "Python", "Excel", "Jupyter Notebooks"]
    },
    { 
        name: "Game Theory", level: 93, icon: Zap, category: "economics",
        description: "Mathematical modeling of strategic interactions and decision-making",
        technologies: ["Convex Optimization", "KKT", "Gradient Methods", "Lagrangian methods"]
    },
    { 
        name: "Backend Development", level: 82, icon: Server, category: "back-end",
        description: "API design, database architecture, and server management",
        technologies: ["Express.js", "PostgreSQL", "REST APIs", "Authentication"]
    },
    { 
        name: "Frontend Development & UI/UX Design", level: 80, icon: Code, category: "frontend",
        description: "End-to-end web application development",
        technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS", "JavaScript", "Figma", "Responsive Design"]
    },
    { 
        name: "Database Management", level: 85, icon: Database, category: "back-end",
        description: "Data modeling, optimization, and query performance",
        technologies: ["SQL", "Schema Design", "Indexing", "Data Warehousing"]
    }
];

const categories = [
    { id: "all", name: "All Skills", icon: Zap },
    { id: "frontend", name: "Frontend", icon: Code },
    { id: "back-end", name: "Backend", icon: Server },
    { id: "data-science", name: "Data Science", icon: Brain },
    { id: "economics", name: "Economics", icon: TrendingUp }
];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCards, setVisibleCards] = useState(new Set());
    const sectionRef = useRef(null);

    const filteredSkills = activeCategory === "all" 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    // Trigger progress bar animations when cards enter viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => new Set([...prev, entry.target.dataset.skillName]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = sectionRef.current?.querySelectorAll('[data-skill-name]');
        cards?.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, [filteredSkills]);

    // Reset visible cards on category change so bars re-animate
    useEffect(() => {
        setVisibleCards(new Set());
    }, [activeCategory]);

    return (
        <section id="skills" className="py-24 px-4 relative bg-gradient-to-br from-secondary/20 to-background" ref={sectionRef}>
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Technical Expertise
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A blend of technical prowess and analytical thinking that drives innovative solutions
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button 
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={cn(
                                    "group flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 border-2",
                                    activeCategory === category.id
                                        ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/25"
                                        : "bg-card/50 border-border/50 text-foreground hover:border-primary/50 hover:shadow-md"
                                )}
                            >
                                <IconComponent size={20} className={cn(
                                    "transition-transform duration-300",
                                    activeCategory === category.id && "scale-110"
                                )} />
                                <span className="font-medium">{category.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        const isVisible = visibleCards.has(skill.name);
                        return (
                            <div
                                key={skill.name}
                                data-skill-name={skill.name}
                                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/30"
                                style={{
                                    opacity: 0,
                                    animation: `fadeInUp 0.6s ease-out ${index * 80}ms forwards`
                                }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                                        <IconComponent className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                                    </div>
                                </div>

                                {/* Progress Bar — animates when scrolled into view */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium">Proficiency</span>
                                        <span className="text-sm text-primary font-bold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1">
                                    {skill.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20 transition-all duration-300 group-hover:bg-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </div>
                        );
                    })}
                </div>

                {/* Stats Footer */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { value: `${skills.length}+`, label: "Skills Mastered" },
                        { value: "4", label: "Domains" },
                        { value: `${Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%`, label: "Avg Proficiency" },
                        { value: "∞", label: "Learning Capacity" },
                    ].map(({ value, label }) => (
                        <div key={label} className="bg-card/50 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300">
                            <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                            <div className="text-sm text-muted-foreground">{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};