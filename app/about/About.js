"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import "../style/_about.css";

const highlights = [
    { title: "Experienced Educators", desc: "Passionate teachers guiding each child with personalized attention." },
    { title: "Play-Based Learning", desc: "Learning through discovery, creativity, and structured activities." },
    { title: "Safe Environment", desc: "Secure and stimulating spaces for children to explore and grow." },
    { title: "Holistic Development", desc: "Focus on cognitive, emotional, and physical growth of every child." },
];

export default function About() {
    const fadeVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <main className="about-wrapper">
            {/* HERO */}
            <section className="about-hero">
                <Hero
                    title="About Melora"
                    description="Inspiring the next generation through joyful learning and meaningful growth."
                />
            </section>

            {/* OUR VISION & GOALS */}
            <motion.section
                className="about-section"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="section-text">
                    <h2>Our Vision & Goals</h2>
                    <p>
                        At Melora, our vision is to nurture confident, creative, and compassionate
                        children who are prepared to thrive in a rapidly changing world.
                    </p>
                    <ul>
                        <li>Be active and engaged learners.</li>
                        <li>Feel safe and secure when parents leave.</li>
                        <li>Develop confidence and independence.</li>
                        <li>Appreciate diversity and teamwork.</li>
                        <li>Have fun while learning!</li>
                    </ul>
                </div>
                <div className="section-image small">
                    <Image
                        src="/images/goal.webp"
                        alt="Our Vision"
                        fill
                        style={{ objectFit: "cover", borderRadius: "12px" }}
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </div>
            </motion.section>

            {/* OUR MISSION */}
            <motion.section
                className="about-section reverse"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="section-image small">
                    <Image
                        src="/images/mission.webp"
                        alt="Our Mission"
                        fill
                        style={{ objectFit: "cover", borderRadius: "12px" }}
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </div>
                <div className="section-text">
                    <h2>Our Mission</h2>
                    <p>
                        We strive to create a nurturing and stimulating environment that supports the
                        holistic development of every child — academically, emotionally, socially,
                        and physically.
                    </p>
                    <ul>
                        <li>Deliver high-quality, child-centered education</li>
                        <li>Foster curiosity and creativity</li>
                        <li>Encourage emotional intelligence</li>
                        <li>Promote resilience and independence</li>
                    </ul>
                </div>
            </motion.section>

            {/* WHY CHOOSE US */}
            <motion.section
                className="about-section"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="section-text">
                    <h2>Why Choose Melora?</h2>
                    <div className="highlights-grid">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="highlight-card">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section-image small">
                    <Image
                        src="/images/philosphy.webp"
                        alt="Why Choose Us"
                        fill
                        style={{ objectFit: "cover", borderRadius: "12px" }}
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </div>
            </motion.section>

            {/* OUR LEADER */}
            <motion.section
                className="about-section reverse"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="section-image small">
                    <Image
                        src="/images/sumita1.png"
                        alt="Founder"
                        fill
                        style={{ objectFit: "cover", borderRadius: "12px" }}
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </div>
                <div className="section-text">
                    <h2>Our Leader</h2>
                    <p>
                        Melora was founded by <strong>Sumita Gunwal</strong> — an educator with over
                        15 years of experience. Her vision is to make early learning joyful,
                        nurturing, and meaningful.
                    </p>
                    <p>
                        Her passion for child development and holistic growth shapes every aspect of
                        Melora — creating a safe, inspiring space where children flourish.
                    </p>
                    <h4>Sumita Gunwal — Founder</h4>
                    <Image
                        src="/images/signature.png"
                        alt="Founder signature"
                        width={120}
                        height={50}
                    />
                </div>
            </motion.section>

            {/* OUR STORY */}
            <motion.section
                className="about-section"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="section-text">
                    <h2>Our Story</h2>
                    <p>
                        Melora was born from a dream to create a place where early learning feels
                        natural, joyful, and deeply human. Inspired by the Norwegian kindergarten
                        philosophy, we focus on care, curiosity, and respect for every child —
                        nurturing knowledge, confidence, and emotional intelligence.
                    </p>
                </div>
                <div className="section-image small">
                    <Image
                        src="/images/meloraKids3.jpeg"
                        alt="Our Story"
                        fill
                        style={{ objectFit: "cover", borderRadius: "12px" }}
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </div>
            </motion.section>
        </main>
    );
}
