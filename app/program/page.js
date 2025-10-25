'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "../components/Hero.js";
import '../style/_home.css';
import './_program.css';

export default function CombinedProgramsSection() {
    const programs = [
        {
            title: 'Infants',
            age: '6 months – 1.5 years',
            emoji: '👶',
            img: '/images/infant1.png',
            color: '#A8DADC',
            highlights: [
                "Sensory & Motor Development: Tummy time, soft toys, textures, and basic movements.",
                "Music & Rhythm: Simple lullabies, clapping games, and gentle songs.",
                "Bonding & Emotional Security: Parent-child interactive sessions, gentle routines."
            ],
            schedules: ["Half Day", "Full Day"]
        },
        {
            title: 'Toddlers',
            age: '1.5 – 3 years',
            emoji: '🍼',
            img: '/images/toodler.png',
            color: '#FFD6A5',
            highlights: [
                "Early Learning: Colors, shapes, numbers, simple words.",
                "Creative Play: Finger painting, simple crafts, imaginative play.",
                "Physical Development: Crawling, walking, climbing, basic outdoor games.",
                "Social & Emotional Skills: Sharing, greetings, and simple group activities."
            ],
            schedules: ["Half Day", "Full Day", "Extended Day"]
        },
        {
            title: 'Pre-Nursery',
            age: '2.5 – 3.5 years',
            emoji: '🧩',
            img: '/images/pre-nursery.png',
            color: '#FFADAD',
            highlights: [
                "Pre-Reading & Early Math: Letter recognition, counting 1–10, matching games.",
                "Arts & Crafts: Simple drawing, coloring, and clay modeling.",
                "Music & Movement: Singing rhymes, dancing, and instrument exploration.",
                "Outdoor Play & Motor Skills: Running, balancing, ball games."
            ],
            schedules: ["Half Day", "Full Day"]
        },
        {
            title: 'Nursery / LKG',
            age: '3.5 – 5 years',
            emoji: '📚',
            img: '/images/nursery.png',
            color: '#9BF6FF',
            highlights: [
                "Literacy & Language Programs: Phonics, storytelling, vocabulary building.",
                "Math & Cognitive Development: Numbers, shapes, patterns, basic problem-solving.",
                "Creative Arts: Painting, craft projects, drama, role play, and music.",
                "Physical & Social Skills: Team games, playground activities, yoga, mindfulness.",
                "Science & Discovery: Simple experiments, gardening, nature walks."
            ],
            schedules: ["Half Day", "Full Day", "Extended Day"]
        },
        {
            title: 'After School Programs',
            age: '5+ years / school-going children',
            emoji: '🏫',
            img: '/images/afterSchool.png',
            color: '#FFC6FF',
            highlights: [
                "Enrichment Activities: STEM, robotics, coding for kids, creative writing.",
                "Sports & Physical Activities: Yoga, martial arts, dance, team sports.",
                "Arts & Creative Skills: Advanced crafts, music, drama, and storytelling.",
                "Language & Cognitive Boosters: Reading clubs, second language, puzzle games."
            ],
            schedules: ["Extended Day"]
        }
    ];

    const fadeSlideLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
    const fadeSlideRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

    return (
        <section className="combined-programs-section">
            <Hero
                title="Our Programs & Schedule"
                description="Discover our engaging programs designed to nurture curiosity, creativity, and confidence in every child."
            />

            <div className="programs-grid">
                {programs.map((program, idx) => (
                    <motion.div
                        className="program-card"
                        key={idx}
                        style={{ backgroundColor: program.color + '20' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="program-image" variants={idx % 2 === 0 ? fadeSlideLeft : fadeSlideRight}>
                            <Image
                                src={program.img}
                                alt={program.title}
                                width={500}
                                height={350}
                                style={{ borderRadius: '12px', objectFit: 'cover' }}
                            />
                        </motion.div>

                        <motion.div className="program-text" variants={idx % 2 === 0 ? fadeSlideRight : fadeSlideLeft}>
                            <h3>{program.title} <span className="emoji">{program.emoji}</span></h3>
                            <p className="program-age">{program.age}</p>

                            <ul>
                                {program.highlights.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>

                            <div className="program-schedules">
                                {program.schedules.map((sched, i) => (
                                    <span className="schedule-badge" key={i}>{sched}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
