'use client';
import React from "react";
import Image from "next/image";
import "../style/_about.scss";
import Hero from "../components/Hero";

const highlights = [
    { title: "Experienced Educators", desc: "Passionate teachers guiding each child with personalized attention." },
    { title: "Play-Based Learning", desc: "Learning through discovery, creativity, and structured activities." },
    { title: "Safe Environment", desc: "Secure and stimulating spaces for children to explore and grow." },
    { title: "Holistic Development", desc: "Focus on cognitive, emotional, and physical growth of every child." },
];

export default function About() {
    return (
        <main className="about-wrapper">

            {/* Hero Section */}
            <section className="about-hero">
                <Hero
                    title="About Melora"
                    description="Nurturing Curiosity, Creativity, and Confidence in Every Child"
                />
            </section>

            {/* About & Vision Cards */}
            <section className="section-cards">
                <article className="section-card">
                    <h3 className="card-title">Our Mission</h3>
                    <p className="card-text">
                        To provide a holistic, play-based learning environment where children grow academically, socially, and emotionally.
                        At Melora, we believe the early years are the foundation for a lifelong love of learning.
                        Our nurturing environment fosters creativity, confidence, and social skills through play-based learning.
                        With a dedicated team of passionate educators, we create a safe and stimulating space for children to explore and grow.
                    </p>
                </article>

                <article className="section-card">
                    <h3 className="card-title">Vision & Goals</h3>
                    <ul className="card-text">
                        <li>Deliver high-quality, student-centered education</li>
                        <li>Foster creativity, curiosity, and lifelong learning</li>
                        <li>Promote emotional, social & academic development</li>
                        <li>Inspire future leaders & global citizens</li>
                    </ul>
                </article>
            </section>

            {/* Founder Section */}
            <section className="section-founder">
                <div className="founder-card">
                    <div className="founder-image">
                        <Image
                            src="/images/sumita.jpeg"
                            alt="Founder of Melora School"
                            width={400}
                            height={600}
                            sizes="(max-width: 768px) 100vw, 400px"
                            style={{ borderRadius: "10px", objectFit: "cover" }}
                            priority
                        />
                    </div>
                    <div className="founder-details">
                        <h3 className="founder-title">Meet Our Founder</h3>
                        <h5 className="founder-subtitle">Sumita Gunwal — Founder & CEO</h5>
                        <p className="founder-text">
                            Melora was born from a dream I carried for more than ten years. A decade ago, while visiting
                            Norway, I was deeply inspired by the way kindergartens there nurture children—not just
                            academically, but in every aspect of their growth.
                            <br /><br />
                            I saw how much emphasis was placed on helping children build their mental and physical
                            abilities, while also encouraging independence and confidence from an early age. It was a
                            system that truly believed in preparing children for life, not just for school.
                            <br /><br />
                            That experience stayed with me and became the spark that led to Melora. With over a decade
                            of experience in the education sector, I have dedicated my life to shaping young minds and
                            creating nurturing learning environments. My vision is to provide children with the same
                            kind of holistic foundation I witnessed in Norway—one that allows them to grow into strong,
                            confident, and independent individuals.
                        </p>
                        <p className="founder-text">
                            Our mission is to build strong foundations for lifelong learning, creativity, and emotional intelligence.
                        </p>
                        <Image
                            src="/images/signature.png"
                            alt="Founder signature"
                            width={120}
                            height={50}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section-highlights">
                <h2 className="highlights-title">Why Choose Melora?</h2>
                <div className="highlights-grid">
                    {highlights.map((item, idx) => (
                        <article className="highlight-card" key={idx}>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

        </main>
    );
}
