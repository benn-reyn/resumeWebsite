import { Code, User, Briefcase } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Fullstack Developer & Economic Analyst</h3>

                        <p className="text-muted-foreground">
                            I'm a passionate Fullstack Developer with a strong background in economic analysis, 
                            blending technical expertise with analytical thinking to create data-driven solutions. 
                            With experience in both software development and economic research, I bring a unique 
                            perspective to solving complex problems.
                        </p>

                        <p className="text-muted-foreground">
                            My journey started in economics, where I developed strong analytical skills, and 
                            evolved into fullstack development, allowing me to build practical solutions that 
                            bridge the gap between data analysis and user experience. I thrive on creating 
                            efficient, scalable applications that make a real impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="cosmic-button text-center">
                                Get in Touch
                            </a>
                            <a 
                                href="/resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full border-primary text-primary border-2 hover:bg-primary hover:text-background transition-colors duration-300 text-center"
                            >
                                View My Resume
                            </a>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">FullStack Development</h4>
                                    <p className="text-muted-foreground">
                                        React, CSS, Tailwind, Node.js, Python, R, TypeScript, PostgreSQL, REST/RESTful APIs, Git, C++, C
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">Machine Learning & Data Science</h4>
                                    <p className="text-muted-foreground">
                                        Python, Pandas, Scikit-learn, TensorFlow, Data Visualization, 
                                        Statistical Analysis, Predictive Modeling
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">Economic Analysis</h4>
                                    <p className="text-muted-foreground">
                                        Economic Modeling, Data Analysis, Market Research, Statistical Methods, 
                                        Financial Analysis, Quantitative Research
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};