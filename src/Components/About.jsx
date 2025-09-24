import { Code, User, Briefcase } from "lucide-react";

export const About = () => {

    return <section id="about" className="py-24 px-4 relative">
        { " " }
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Fullstack Developer & Economic Analyst</h3>

                    <p className="text-muted-foreground">
                        about me
                    </p>

                    <p className="text-muted-foreground">
                        more about me
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>
                        <a href="#contact" className=" px-6 py-2 rounded-full border-primary text-primary border-2 hover:bg-primary hover:text-background transition-colors duration-300 ">
                            {" "}
                            View My Resume
                        </a>

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> FullStack development</h4>
                                <p className="text-muted-foreground"> skills list****</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Machine Learning</h4>
                                <p className="text-muted-foreground"> skills list****</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Economic Analyst</h4>
                                <p className="text-muted-foreground"> skills list****</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}