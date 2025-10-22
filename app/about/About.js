'use client';
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import "../style/_about.scss";
import Hero from "../components/Hero";

const highlights = [
    {title: "Experienced Educators", desc: "Passionate teachers guiding each child with personalized attention."},
    {title: "Play-Based Learning", desc: "Learning through discovery, creativity, and structured activities."},
    {title: "Safe Environment", desc: "Secure and stimulating spaces for children to explore and grow."},
    {title: "Holistic Development", desc: "Focus on cognitive, emotional, and physical growth of every child."},
];

export default function About() {
    const fadeSlideLeft = {hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0, transition: {duration: 0.8}}};
    const fadeSlideRight = {hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0, transition: {duration: 0.8}}};

    return (
        <main className="about-wrapper">

            {/* HERO */}
            <section className="about-hero">
                <Hero
                    title="About Melora"
                    description="Inspiring the next generation through joyful learning and meaningful growth."
                />
            </section>

            {/* VISION & GOALS */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                <motion.div className="section-image" variants={fadeSlideLeft}>
                    <Image
                        src="/images/goal.webp"
                        alt="Our Vision"
                        width={500}
                        height={350}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </motion.div>
                <motion.div className="section-text" variants={fadeSlideRight}>
                    <h2>Our Vision & Goals</h2>
                    <p>
                        At Melora, our vision is to nurture confident, creative, and compassionate
                        children who are prepared to thrive in a rapidly changing world.
                    </p>
                    <p>The goals for children in our program are for them to:</p>
                    <ul>
                        <li>Be active and engaged learners.</li>
                        <li>Feel safe & secure when parents leave.</li>
                        <li>Develop positive relationships, self-confidence, and independence.</li>
                        <li>Appreciate cultural diversity.</li>
                        <li>Have fun while learning!</li>
                    </ul>
                </motion.div>
            </motion.section>

            {/* MISSION */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                <motion.div className="section-image" variants={fadeSlideLeft}>
                    <Image
                        src="/images/mission.webp"
                        alt="Our Mission"
                        width={500}
                        height={350}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </motion.div>
                <motion.div className="section-text" variants={fadeSlideRight}>
                    <h2>Our Mission</h2>
                    <p>
                        We strive to create a nurturing and stimulating environment that supports the holistic
                        development of every child — academically, emotionally, socially, and physically.
                    </p>
                    <ul>
                        <li>Deliver high-quality, student-centered education</li>
                        <li>Foster curiosity, creativity, and critical thinking</li>
                        <li>Promote emotional and social intelligence</li>
                        <li>Encourage independence and resilience</li>
                    </ul>
                </motion.div>
            </motion.section>

            {/* WHY CHOOSE US */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                <motion.div className="section-image" variants={fadeSlideLeft}>
                    <Image
                        src="/images/philosphy.webp"
                        alt="Why Choose Us"
                        width={500}
                        height={350}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </motion.div>
                <motion.div className="section-text" variants={fadeSlideRight}>
                    <h2>Why Choose Melora?</h2>
                    <motion.div
                        className="highlights-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={{visible: {transition: {staggerChildren: 0.2}}}}
                    >
                        {highlights.map((item, idx) => (
                            <motion.div
                                className="highlight-card"
                                key={idx}
                                variants={{
                                    hidden: {opacity: 0, y: 20},
                                    visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
                                }}
                            >
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* OUR LEADER */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                <motion.div className="section-image" variants={fadeSlideLeft}>
                    <Image
                        src="/images/sumita1.png"
                        alt="Founder"
                        width={500}
                        height={350}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </motion.div>
                <motion.div className="section-text" variants={fadeSlideRight}>
                    <h2>Our Leader</h2>
                    <h4>Sumita Gunwal — Founder</h4>
                    <p>
                        Melora was born from a dream I carried for more than ten years. During a visit to Norway, I was
                        inspired by holistic early education, which shaped my mission for Melora.
                    </p>
                    <Image
                        src="/images/signature.png"
                        alt="Founder signature"
                        width={120}
                        height={50}
                    />
                </motion.div>
            </motion.section>

            {/* OUR STORY */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                <motion.div className="section-image" variants={fadeSlideLeft}>
                    <Image
                        src="/images/MeloraKids3.jpeg"
                        alt="Our Story"
                        width={550}
                        height={350}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </motion.div>
                <motion.div className="section-text" variants={fadeSlideRight}>
                    <h2>Our Story</h2>
                    <p>
                        Melora was born from a dream nurtured for over a decade. During a visit to Norway, I was
                        profoundly inspired by the way kindergartens there support children—not only academically, but
                        in every aspect of their growth.

                        I observed how much care was given to developing both mental and physical abilities, while also
                        encouraging independence, curiosity, and confidence from an early age. It was a system designed
                        to prepare children for life, not just school.

                        That experience became the spark that led to the creation of Melora. With over ten years of
                        experience in education, I have dedicated my life to shaping young minds and creating nurturing
                        learning environments. My vision is to provide children with the same holistic foundation I
                        witnessed abroad—enabling them to grow into confident, capable, and independent individuals
                        ready to thrive in the world.
                    </p>
                </motion.div>
            </motion.section>

        </main>
    );
}
