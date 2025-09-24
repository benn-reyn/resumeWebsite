import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialTheme = storedTheme ? storedTheme === 'dark' : systemPrefersDark;
        
        setIsDarkMode(initialTheme);
        if (initialTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        
        console.log('Theme toggled to:', newDarkMode ? 'dark' : 'light');
    };

    if (!isMounted) {
        return (
            <button className={cn(
                "fixed top-5 right-5 z-[100] p-3 rounded-2xl",
                "bg-background/80 backdrop-blur-md border border-border shadow-lg",
                "pointer-events-auto" // Ensure it's clickable
            )}>
                <Moon className='h-6 w-6 text-muted-foreground' />
            </button>
        );
    }

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed top-5 right-5 z-[100] p-3 rounded-2xl transition-all duration-300",
                "bg-background/80 backdrop-blur-md border border-border shadow-lg",
                "hover:shadow-xl hover:scale-105 hover:border-primary/50",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "pointer-events-auto cursor-pointer", // Critical fixes
                "select-none" // Prevent text selection
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            style={{
                zIndex: 1000, // Highest priority
                pointerEvents: 'auto' // Force clickable
            }}
        >
            {isDarkMode ? (
                <Sun className='h-6 w-6 text-yellow-300'/>
            ) : (
                <Moon className='h-6 w-6 text-blue-600' />
            )} 
        </button>  
    );
};