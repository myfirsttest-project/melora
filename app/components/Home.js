"use client";
import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "../style/heading.css";
import HeroSection from "./HeroSection";
import ProgramsSection from "./ProgramSection";
import MeloraExperience from "./MeloraExperience";
import Testimonials from "./Testimonials";
import Partners from "./Partners";

const Home = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

    return (
        <div className="home-container">
            <HeroSection/>
            <ProgramsSection/>
            <MeloraExperience/>
            <Testimonials/>
            <Partners/>

            {/* SCROLL TO TOP */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        className="scroll-to-top"
                        onClick={scrollToTop}
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.5}}
                        transition={{duration: 0.3}}
                    >
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
