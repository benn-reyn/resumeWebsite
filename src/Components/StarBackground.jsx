import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [clouds, setClouds] = useState([]);
    const [sunbeams, setSunbeams] = useState([]);
    const [constellations, setConstellations] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detect theme changes
    useEffect(() => {
        const checkTheme = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(isDark);
        };

        checkTheme();
        
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });

        return () => observer.disconnect();
    }, []);

    const generateStars = useCallback(() => {
        const density = isDarkMode ? 3000 : 6000; // More stars in dark mode
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / density);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            const size = Math.random() * (isDarkMode ? 3 : 2) + 0.5;
            const brightness = isDarkMode ? 
                Math.random() * 0.8 + 0.2 : 
                Math.random() * 0.3 + 0.1;

            // Different colors for different star types
            const starType = Math.random();
            let color = 'white';
            if (starType > 0.95) color = `hsl(${Math.random() * 60 + 200}, 100%, 80%)`; // Blue
            else if (starType > 0.90) color = `hsl(${Math.random() * 30 + 30}, 100%, 75%)`; // Orange
            else if (starType > 0.85) color = `hsl(${Math.random() * 20 + 350}, 100%, 85%)`; // Red

            newStars.push({
                id: i,
                size: size,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: brightness,
                animationDuration: Math.random() * 6 + 3,
                animationDelay: Math.random() * 5,
                twinkleSpeed: Math.random() * 3 + 1,
                color: color,
                isBright: Math.random() > 0.7
            });
        }
        setStars(newStars);
    }, [isDarkMode]);

    const generateMeteors = useCallback(() => {
        const numberOfMeteors = isDarkMode ? 6 : 3; // Fewer meteors in light mode
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                x: Math.random() * 100 + 10,
                y: Math.random() * 30,
                length: Math.random() * 80 + 40,
                angle: Math.random() * 30 + 15,
                speed: Math.random() * 2 + 1,
                delay: Math.random() * 30,
                opacity: isDarkMode ? Math.random() * 0.7 + 0.3 : Math.random() * 0.3 + 0.1,
            });
        }
        setMeteors(newMeteors);
    }, [isDarkMode]);

    const generateClouds = useCallback(() => {
        if (isDarkMode) {
            setClouds([]);
            return;
        }

        const numberOfClouds = 4;
        const newClouds = [];

        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 40,
                size: Math.random() * 100 + 50,
                opacity: Math.random() * 0.3 + 0.1,
                speed: Math.random() * 0.2 + 0.05,
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }
        setClouds(newClouds);
    }, [isDarkMode]);

    const generateSunbeams = useCallback(() => {
        if (isDarkMode) {
            setSunbeams([]);
            return;
        }

        const numberOfBeams = 3;
        const newBeams = [];

        for (let i = 0; i < numberOfBeams; i++) {
            newBeams.push({
                id: i,
                x: Math.random() * 30 + 10,
                y: Math.random() * 30 + 10,
                angle: Math.random() * 30 - 15,
                width: Math.random() * 100 + 50,
                opacity: Math.random() * 0.1 + 0.05,
            });
        }
        setSunbeams(newBeams);
    }, [isDarkMode]);

    const generateConstellations = useCallback(() => {
        if (!isDarkMode) {
            setConstellations([]);
            return;
        }

        const numberOfConstellations = 4;
        const newConstellations = [];

        for (let i = 0; i < numberOfConstellations; i++) {
            const points = [];
            const pointCount = Math.floor(Math.random() * 4) + 3;
            
            for (let j = 0; j < pointCount; j++) {
                points.push({
                    x: 15 + Math.random() * 70,
                    y: 15 + Math.random() * 70
                });
            }

            newConstellations.push({
                id: i,
                points: points,
                opacity: Math.random() * 0.15 + 0.05,
            });
        }
        setConstellations(newConstellations);
    }, [isDarkMode]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateClouds();
        generateSunbeams();
        generateConstellations();

        const handleResize = () => {
            generateStars();
            generateMeteors();
            generateClouds();
            generateSunbeams();
            generateConstellations();
        };

        let resizeTimeout;
        const throttledResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 250);
        };

        window.addEventListener("resize", throttledResize);
        return () => {
            window.removeEventListener("resize", throttledResize);
            clearTimeout(resizeTimeout);
        };
    }, [generateStars, generateMeteors, generateClouds, generateSunbeams, generateConstellations]);

    // Regenerate when theme changes
    useEffect(() => {
        generateStars();
        generateClouds();
        generateSunbeams();
        generateConstellations();
    }, [isDarkMode, generateStars, generateClouds, generateSunbeams, generateConstellations]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Dynamic Gradient Overlay */}
            <div className={cn(
                "absolute inset-0 transition-all duration-1000",
                isDarkMode 
                    ? "bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-black/20" 
                    : "bg-gradient-to-br from-sky-200/30 via-amber-100/20 to-orange-50/10"
            )} />

            {/* Sun/Moon Glow */}
            <div className={cn(
                "absolute w-64 h-64 rounded-full blur-3xl transition-all duration-1000",
                "top-1/4 -left-32",
                isDarkMode 
                    ? "bg-blue-400/5" 
                    : "bg-amber-300/20"
            )} />
            <div className={cn(
                "absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000",
                "bottom-1/4 -right-48",
                isDarkMode 
                    ? "bg-purple-500/5" 
                    : "bg-orange-400/15"
            )} />

            {/* Stars */}
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className={cn(
                        "absolute rounded-full animate-pulse",
                        star.isBright && "animate-twinkle"
                    )}
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                        animationDelay: `${star.animationDelay}s`,
                        backgroundColor: star.color,
                        boxShadow: star.isBright ? `0 0 ${star.size * 2}px ${star.color}` : 'none',
                        filter: `blur(${star.size * 0.3}px)`,
                    }}
                />
            ))}

            {/* Constellations (Dark Mode Only) */}
            {constellations.map((constellation) => (
                <svg
                    key={constellation.id}
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: constellation.opacity }}
                >
                    {constellation.points.map((point, index, array) => {
                        if (index === array.length - 1) return null;
                        const nextPoint = array[index + 1];
                        return (
                            <line
                                key={index}
                                x1={`${point.x}%`}
                                y1={`${point.y}%`}
                                x2={`${nextPoint.x}%`}
                                y2={`${nextPoint.y}%`}
                                stroke="currentColor"
                                strokeWidth="0.3"
                                strokeOpacity="0.4"
                                className="text-blue-300"
                            />
                        );
                    })}
                </svg>
            ))}

            {/* Clouds (Light Mode Only) */}
            {clouds.map((cloud) => (
                <div
                    key={cloud.id}
                    className="absolute opacity-20 animate-float"
                    style={{
                        left: `${cloud.x}%`,
                        top: `${cloud.y}%`,
                        width: `${cloud.size}px`,
                        height: `${cloud.size * 0.6}px`,
                        opacity: cloud.opacity,
                        animationDuration: `${cloud.speed * 100}s`,
                        animationDirection: cloud.direction > 0 ? 'normal' : 'reverse',
                        background: 'radial-gradient(circle at 30% 30%, white, transparent 70%)',
                        filter: 'blur(10px)',
                    }}
                />
            ))}

            {/* Sunbeams (Light Mode Only) */}
            {sunbeams.map((beam) => (
                <div
                    key={beam.id}
                    className="absolute animate-pulse-slow"
                    style={{
                        left: `${beam.x}%`,
                        top: `${beam.y}%`,
                        width: `${beam.width}%`,
                        height: '1px',
                        opacity: beam.opacity,
                        transform: `rotate(${beam.angle}deg)`,
                        background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                        filter: 'blur(1px)',
                    }}
                />
            ))}

            {/* Meteors */}
            {meteors.map((meteor) => (
                <div 
                    key={meteor.id} 
                    className="absolute animate-meteor"
                    style={{
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        width: `${meteor.length}px`,
                        height: '1px',
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.speed}s`,
                        opacity: meteor.opacity,
                        transform: `rotate(${meteor.angle}deg)`,
                        background: isDarkMode 
                            ? 'linear-gradient(90deg, #ffffff, #4facfe, transparent)' 
                            : 'linear-gradient(90deg, #ffd700, #ff6b6b, transparent)',
                        filter: 'blur(1px)',
                    }}
                />
            ))}

            {/* Animated CSS */}
            <style jsx>{`
                @keyframes meteor {
                    0% {
                        transform: translateX(0) translateY(0) rotate(var(--angle, 15deg));
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(-100vw) translateY(100vh) rotate(var(--angle, 15deg));
                        opacity: 0;
                    }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                @keyframes float {
                    0% { transform: translateX(-100px); }
                    100% { transform: translateX(calc(100vw + 100px)); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                }
                .animate-meteor {
                    animation: meteor linear infinite;
                }
                .animate-twinkle {
                    animation: twinkle ease-in-out infinite;
                }
                .animate-float {
                    animation: float linear infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};