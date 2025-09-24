import { ExternalLink, Github, ArrowRight} from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of project one.",
        image: "https://via.placeholder.com/400x300",
        tags: ["Insert skills"],
        demoUrl: "#",
        githubUrl: "#"
    }
]

export const ProjectsSection = () => {
    return ( <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
            </h2>  
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> 
            paragraph    
            </p> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                        key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                        </div>

                        <div className="p-6">
                         <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-2"> {project.title} </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <div  className="flex space-x-3">
                                <a rel="noopener noreferrer"
                                href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>
                                </a>
                                <a 
                                rel="noopener noreferrer"
                                href={project.githubUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/benn-reyn">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>  
        </section>
    );
};