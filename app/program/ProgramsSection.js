'use client';
import '../style/_admission.scss';
import React from "react";
import Hero from "@/app/components/Hero";

export default function ProgramsSection() {
    const programs = [
        { title: 'Infant', age: '9 Months', emoji: '👶', desc: 'Gentle start for our youngest learners, focusing on trust, sensory exploration, and bonding.' },
        { title: 'Toddlers', age: '12–24 Months', emoji: '🍼', desc: 'Encourages movement, communication, and early social skills through play and routines.' },
        { title: 'Preschool', age: '24–36 Months', emoji: '🎨', desc: 'Balanced learning and play. Children build confidence and early concepts like colors and shapes.' },
        { title: 'Pre-Nursery', age: '36–48 Months', emoji: '🧩', desc: 'Focus on language, independence, literacy, and emotional self-regulation through creative play.' },
        { title: 'LKG', age: '48–60 Months', emoji: '📚', desc: 'Pre-K program preparing children for structured learning: phonics, numbers, problem-solving.' },
        { title: 'After School', age: '24 Months – 8 Years', emoji: '🏫', desc: 'Fun, safe environment for after-school activities, learning, and social development.' },
    ];

    return (
        <section className="section-programs">
            <Hero
                title="Our Programs"
                subtitle="Explore our nurturing and engaging programs designed to foster curiosity, creativity, and confidence in every child."
            />
            <div className="programs-grid">
                {programs.map((program, index) => (
                    <div className="program-card" key={index}>
                        <div className="program-emoji">{program.emoji}</div>
                        <h3>{program.title}</h3>
                        <p className="program-age">{program.age}</p>
                        <p className="program-desc">{program.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
