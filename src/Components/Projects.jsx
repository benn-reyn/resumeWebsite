import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "Master's Research - Instrumental Principal Component Analysis in Micro-Capitalization Stock Returns",
        description: "A novel approach to excess return decomposition, in an underexplored area of financial econometrics.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["Python", "SQL", "Jupyter Notebook", "WRDS"],
        demoUrl: "https://github.com/benn-reyn/IPCA-Microcaps/blob/main/EDA.ipynb",
        githubUrl: "https://github.com/benn-reyn/IPCA-Microcaps"
    },
    {
        id: 2,
        title: "Hybrid Regime Prediction Model",
        description: "A hyperparameter-tuned machine learning model used to classify market regime, leveraging both stochastic and fractal theory for improved prediction. Uses both XGBoost and RF.",
        image: "/hybridPhoto.png",
        tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
        demoUrl: "https://benn-reyn.github.io/Hybrid_Regime_Prediction_Engine/",
        githubUrl: "https://github.com/benn-reyn/Hybrid_Regime_Prediction_Engine"
    },
    {
        id: 3,
        title: "Collection of Econometric Analyses with Interactive Visualizations",
        description: "Will be made available in next deployment. Until then, some projectsare available on github. Many were written in R, and need to be refactored to python.",
        image: "/economicpic.jpg",
        tags: ["Python", "Data Analysis", "Economics", "Visualization", "Time Series"],
        demoUrl: "#",
        githubUrl: "https://github.com/benn-reyn"
    },
    {
        id: 4,
        title: "Backtesting Framework",
        description: "A notebook for backtesting trading strategies using historical market data, with performance metrics and visualizations.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
        demoUrl: "https://github.com/benn-reyn/strategyTesting/blob/main/strategyTesting.ipynb",
        githubUrl: "https://github.com/benn-reyn/strategyTesting"
    },
    {
        id: 5,
        title: "FinBERT - Financial Sentiment Analysis",
        description: "Will be made available in next deployment. Using FinBERT, a pre-trained language model for financial sentiment analysis, to analyze social media posts for market sentiment insights. Needs to be refactored from R & Rshiny.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["Python", "NLP", "Machine Learning", "Financial Analysis"],
        demoUrl: "#",
        githubUrl: "https://github.com/benn-reyn"
    },
    {
        id: 6,
        title: "NBA Stat-Correction Model",
        description: "In progress... A machine learning model designed to identify and correct statistical anomalies in NBA player performance data, improving the accuracy of sports analytics. Refactoring from R to Python.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["Python", "Machine Learning", "Sports Analytics"],
        demoUrl: "#",
        githubUrl: "https://github.com/benn-reyn"
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills in fullstack development, 
                    machine learning, and economic analysis. Each project represents a unique challenge 
                    and learning opportunity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                        >
                            {/* Image with overlay on hover */}
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Hover overlay with quick-action buttons */}
                                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                    {project.demoUrl !== "#" && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg text-sm font-medium hover:border-primary transition-colors"
                                        >
                                            <ExternalLink size={16} /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                
                                {/* Footer with icon links */}
                                <div className="flex justify-between items-center mt-5 pt-4 border-t border-border/50">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={project.demoUrl === "#" ? "Demo coming soon" : "Live Demo"}
                                            className={cn(
                                                "p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
                                                project.demoUrl === "#" && "opacity-40 pointer-events-none"
                                            )}
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="View Code"
                                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                        >
                                            <Github size={18} />
                                        </a>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        {project.tags.slice(0, 2).join(" • ")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-16">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2 group"
                        href="https://github.com/benn-reyn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Projects on GitHub
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-muted-foreground text-sm mt-4">
                        Explore more code, contributions, and ongoing projects
                    </p>
                </div>
            </div>
        </section>
    );
};