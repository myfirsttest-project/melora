'use client';
import React from "react";
import Image from "next/image";
import "../style/_about.css";
import Hero from "../components/Hero";

const highlights = [
    {
        title: "Experienced Educators",
        desc: "Passionate teachers providing personalized attention to each child."
    },
    {
        title: "Play-Based Learning",
        desc: "Encouraging exploration, creativity, and structured discovery."
    },
    {
        title: "Safe Environment",
        desc: "Secure and stimulating spaces where children feel confident to explore."
    },
    {
        title: "Holistic Development",
        desc: "Supporting the cognitive, emotional, social, and physical growth of every child."
    },
];

const visionParagraphs = [
    "Our vision is to nurture confident, creative, and compassionate children who are prepared to thrive in a rapidly evolving world.",
    "We aim to foster a love of learning, a strong sense of empathy, and the skills necessary for lifelong growth."
];

const missionParagraphs = [
    "Our mission is to provide a nurturing, stimulating, and safe environment where every child’s holistic development is supported — academically, emotionally, socially, and physically.",
    "We encourage curiosity, independence, creativity, and resilience, empowering children to grow into well-rounded, confident individuals."
];

const founderParagraphs = [
    "My journey with Melora began with a simple belief: early education should awaken a child’s curiosity, creativity, and confidence.",
    "With over 15 years of experience in the education sector, I have witnessed how the right environment can transform a child’s approach to learning and life.",
    "Melora was founded to create a nurturing space where children feel valued, supported, and inspired — not only to excel academically but also to grow into kind, confident, and capable individuals ready to thrive in the world."
];

const ourStoryParagraphs = [
    "Melora was born from a dream nurtured for over a decade: to create a place where early learning feels joyful, meaningful, and deeply human.",
    "During my time in Norway, I discovered a kindergarten philosophy rooted in care, curiosity, and respect for every child. It inspired me to bring the same principles to India — nurturing not only knowledge but also character, confidence, and emotional well-being.",
    "With more than 15 years in education, I have dedicated my life to shaping a space where children grow through play, exploration, and wonder.",
    "At Melora, we follow the Norwegian approach, fostering independence, kindness, and creativity so every child can flourish and step into the world with joy and confidence."
];

export default function About() {
    return (
        <main className="about-wrapper">
                <Hero
                    title="About Melora"
                    description="Inspiring the next generation through joyful learning and meaningful growth."
                />

            <section className="about-section fade-in">
                <div className="section-image">
                    <Image
                        src="/images/vision.jpg"
                        alt="Our Vision"
                        width={500}
                        height={250}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </div>
                <div className="section-text">
                    <h2>Our Vision & Goals</h2>
                    {visionParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                    <p>The goals for children in our program are for them to:</p>
                    <ul className="bullet-list">
                        <li>Be active and engaged learners.</li>
                        <li>Feel safe & secure when parents leave.</li>
                        <li>Develop positive relationships, self-confidence, and independence.</li>
                        <li>Appreciate cultural diversity.</li>
                        <li>Have fun while learning!</li>
                    </ul>
                </div>
            </section>

            {/* MISSION */}
            <section className="about-section fade-in">
                <div className="section-image">
                    <Image
                        src="/images/mission.webp"
                        alt="Our Mission"
                        width={500}
                        height={250}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </div>
                <div className="section-text">
                    <h2>Our Mission</h2>
                    {missionParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                    <ul className="bullet-list">
                        <li>Deliver high-quality, student-centered education</li>
                        <li>Foster curiosity, creativity, and critical thinking</li>
                        <li>Promote emotional and social intelligence</li>
                        <li>Encourage independence and resilience</li>
                    </ul>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="about-section fade-in">
                <div className="section-image">
                    <Image
                        src="/images/philosphy.webp"
                        alt="Why Choose Us"
                        width={500}
                        height={250}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </div>
                <div className="section-text">
                    <h2>Why Choose Melora?</h2>
                    <div className="highlights-grid">
                        {highlights.map((item, idx) => (
                            <div className="highlight-card" key={idx}>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR LEADER */}
            <section className="about-section">
                <div className="section-image">
                    <Image
                        src="/images/sumita1.png"
                        alt="Founder"
                        width={500}
                        height={250}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </div>
                <div className="section-text">
                    <h2>Our Leader</h2>
                    {founderParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                    <h4>Sumita Gunwal — Founder</h4>
                    <Image
                        src="/images/signature.png"
                        alt="Founder signature"
                        width={120}
                        height={50}
                    />
                </div>
            </section>

            {/* OUR STORY */}
            <section className="about-section">
                <div className="section-image">
                    <Image
                        src="/images/about1.jpg"
                        alt="Our Story"
                        width={500}
                        height={250}
                        style={{borderRadius: "12px", objectFit: "cover"}}
                    />
                </div>
                <div className="section-text">
                    <h2>Our Story</h2>
                    {ourStoryParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
            </section>

        </main>
    );
}
