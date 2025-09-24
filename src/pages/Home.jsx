import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackground";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "@/Components/HeroSection";
import { About } from "@/Components/About";
import { Skills } from "@/Components/Skills";
import { ProjectsSection} from "@/Components/Projects";
import { ContactSection } from "@/Components/ContactSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
         <ThemeToggle />
        {/* Background */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <About />
            <Skills />
            <ProjectsSection />
            <ContactSection />
        </main>
        {/* Footer */ }
    </div>
}; 