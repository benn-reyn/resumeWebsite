import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "Interactive Portfolio",
        description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and a contact form.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["React", "TypeScript", "Tailwind CSS", "EmailJS"],
        demoUrl: "#",
        githubUrl: "https://github.com/benn-reyn/Interactive_Portfolio"
    },
    {
        id: 2,
        title: "Machine Learning Projects",
        description: "Collection of ML projects including predictive modeling, data analysis, and algorithm implementations using Python and scikit-learn.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
        demoUrl: "#",
        githubUrl: "https://github.com/benn-reyn"
    },
    {
        id: 3,
        title: "Economic Analysis Tools",
        description: "Data analysis and visualization tools for economic research with interactive dashboards and statistical modeling capabilities.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["Python", "Data Analysis", "Economics", "Visualization"],
        demoUrl: "#",
        githubUrl: "https://github.com/benn-reyn"
    },
    {
        id: 4,
        title: "FullStack Application",
        description: "A complete fullstack application with REST API, database integration, and modern frontend framework.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["Node.js", "React", "MongoDB", "Express"],
        demoUrl: "#",
        githubUrl: "https://github.com/benn-reyn"
    },
    {
        id: 5,
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for real-time data visualization and analytics with filtering and export capabilities.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["JavaScript", "D3.js", "Chart.js", "API Integration"],
        demoUrl: "#",
        githubUrl: "https://github.com/benn-reyn"
    },
    {
        id: 6,
        title: "API Development",
        description: "RESTful API development with authentication, database operations, and comprehensive documentation.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
        tags: ["REST API", "Authentication", "PostgreSQL", "Swagger"],
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
                            className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 card-hover"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                
                                <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/50">
                                    <div className="flex space-x-3">
                                        <a 
                                            rel="noopener noreferrer"
                                            href={project.demoUrl} 
                                            target="_blank"
                                            className={cn(
                                                "p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
                                                project.demoUrl === "#" && "opacity-50 cursor-not-allowed"
                                            )}
                                            title={project.demoUrl === "#" ? "Demo coming soon" : "Live Demo"}
                                        >
                                            <ExternalLink size={18}/>
                                        </a>
                                        <a 
                                            rel="noopener noreferrer"
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                            title="View Code"
                                        >
                                            <Github size={18}/>
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