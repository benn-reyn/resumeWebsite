import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
    {name: "Machine Learning", level: "Advanced", icon: "🤖"},
    {name: "FullStack Development", level: "Intermediate", icon: "💻"},
    {name: "Economic Analysis", level: "Advanced", icon: "📊"},
    {name: "Data Visualization", level: "Intermediate", icon: "📈"},
    {name: "Game Theory", level: "Intermediate", icon: "🎲"},
    {name: "Statistical Analysis", level: "Advanced", icon: "📉"},

];


const categories = ["all", "frontend", "back-end", "data-science", "economics"];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30"> 
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/57 text-foreground hover:bd=secondary"
                    
                )}
                >
                    {category}
                </button>
            ))} 
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};