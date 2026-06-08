import { Code, User, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const cards = [
    {
        icon: Code,
        title: "FullStack Development",
        body: "Python, C++, SQL, R, Node.js, CSS, Tailwind, TypeScript, React, Express, MongoDB, RESTful APIs, Git, Docker, Cloud Deployment"
    },
    {
        icon: User,
        title: "Machine Learning & Data Science",
        body: "Keras, Pandas, Scikit-learn, TensorFlow, PyTorch, Data Engineering, Statistical Analysis, Predictive Modeling"
    },
    {
        icon: Briefcase,
        title: "Time Series Modeling",
        body: "Econometrics, Game Theory, Time Series Analysis, Accounting, Quantitative Finance, Policy Analysis"
    }
];

export const About = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="py-24 px-4 relative" ref={sectionRef}>
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div
                        className="space-y-6 transition-all duration-700"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(-30px)'
                        }}
                    >
                        <h3 className="text-2xl font-semibold">Versatile Analyst and Systems Thinker</h3>

                        <p className="text-muted-foreground">
                            I'm a fullstack developer with a strong background in econometric analysis and time-series modeling,, 
                            blending technical expertise with systems thinking to solve complex problems efficiently. 
                            With experience in both software development and economic research, I bring a versatile approach to problem-solving.
                        </p>

                        <p className="text-muted-foreground">
                            My journey started in Data Science, where I developed strong technical and analytical skills, and 
                            in the last two years expanded into Data Engineering (as meaningful DS neccessitates ETL and pipeline proficiency), 
                            allowing me to build practical solutions as well as performant automated systems that bridge the gap between data analysis 
                            and user experience. I thrive on creating efficient, scalable applications that make a real impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="cosmic-button text-center">
                                Get in Touch
                            </a>
                            <a 
                                href="/Resume-1.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                            >
                                View My Resume
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        {cards.map(({ icon: Icon, title, body }, i) => (
                            <div
                                key={title}
                                className="gradient-border p-6 card-hover transition-all duration-700"
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateX(0)' : 'translateX(30px)',
                                    transitionDelay: `${i * 150}ms`
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg mb-2">{title}</h4>
                                        <p className="text-muted-foreground">{body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};