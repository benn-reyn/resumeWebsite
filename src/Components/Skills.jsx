import { cn } from "@/lib/utils";
import { useState } from "react";
import { Code, Brain, BarChart3, Database, TrendingUp, Calculator, Palette, Server, Cloud, Zap } from "lucide-react";

const skills = [
    { 
        name: "Machine Learning", 
        level: 90, 
        icon: Brain, 
        category: "data-science",
        description: "Predictive modeling, neural networks, and AI algorithms",
        technologies: ["Python", "TensorFlow", "Scikit-learn", "PyTorch"]
    },
    { 
        name: "FullStack Development", 
        level: 85, 
        icon: Code, 
        category: "frontend",
        description: "End-to-end web application development",
        technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
    },
    { 
        name: "Economic Analysis", 
        level: 92, 
        icon: TrendingUp, 
        category: "economics",
        description: "Market research, forecasting, and policy analysis",
        technologies: ["R", "Stata", "Excel", "Statistical Modeling"]
    },
    { 
        name: "Data Visualization", 
        level: 88, 
        icon: BarChart3, 
        category: "data-science",
        description: "Interactive dashboards and data storytelling",
        technologies: ["D3.js", "Tableau", "Plotly", "Chart.js"]
    },
    { 
        name: "Statistical Analysis", 
        level: 91, 
        icon: Calculator, 
        category: "data-science",
        description: "Hypothesis testing, regression analysis, and inference",
        technologies: ["Python", "R", "SPSS", "Statistical Methods"]
    },
    { 
        name: "Backend Development", 
        level: 82, 
        icon: Server, 
        category: "back-end",
        description: "API design, database architecture, and server management",
        technologies: ["Express.js", "PostgreSQL", "REST APIs", "Authentication"]
    },
    { 
        name: "Cloud Technologies", 
        level: 78, 
        icon: Cloud, 
        category: "back-end",
        description: "Deployment, scaling, and cloud infrastructure",
        technologies: ["AWS", "Docker", "CI/CD", "Serverless"]
    },
    { 
        name: "UI/UX Design", 
        level: 75, 
        icon: Palette, 
        category: "frontend",
        description: "User-centered design and interactive prototypes",
        technologies: ["Figma", "Tailwind CSS", "Framer Motion", "Responsive Design"]
    },
    { 
        name: "Game Theory", 
        level: 80, 
        icon: Zap, 
        category: "economics",
        description: "Strategic decision making and equilibrium analysis",
        technologies: ["Nash Equilibrium", "Auction Theory", "Behavioral Economics"]
    },
    { 
        name: "Database Management", 
        level: 85, 
        icon: Database, 
        category: "back-end",
        description: "Data modeling, optimization, and query performance",
        technologies: ["SQL", "MongoDB", "Redis", "Data Modeling"]
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
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const filteredSkills = activeCategory === "all" 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    const getCategoryIcon = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.icon : Zap;
    };

    return (
        <section id="skills" className="py-24 px-4 relative bg-gradient-to-br from-secondary/20 to-background"> 
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
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
                        return (
                            <div
                                key={skill.name}
                                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/30"
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animation: 'fadeInUp 0.6s ease-out forwards'
                                }}
                            >
                                {/* Skill Header */}
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

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium">Proficiency</span>
                                        <span className="text-sm text-primary font-bold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full transition-all duration-1000 ease-out origin-left"
                                            style={{ 
                                                width: `${skill.level}%`,
                                                animation: 'grow 1.5s ease-out forwards'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-1">
                                    {skill.technologies.map((tech, techIndex) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105"
                                            style={{ animationDelay: `${techIndex * 50 + 500}ms` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </div>
                        );
                    })}
                </div>

                {/* Stats Footer */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
                        <div className="text-3xl font-bold text-primary mb-2">{skills.length}+</div>
                        <div className="text-sm text-muted-foreground">Skills Mastered</div>
                    </div>
                    <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
                        <div className="text-3xl font-bold text-primary mb-2">4</div>
                        <div className="text-sm text-muted-foreground">Domains</div>
                    </div>
                    <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
                        <div className="text-3xl font-bold text-primary mb-2">{Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%</div>
                        <div className="text-sm text-muted-foreground">Average Proficiency</div>
                    </div>
                    <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
                        <div className="text-3xl font-bold text-primary mb-2">∞</div>
                        <div className="text-sm text-muted-foreground">Learning Capacity</div>
                    </div>
                </div>
            </div>

            {/* Add CSS animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes grow {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }
            `}</style>
        </section>
    );
};