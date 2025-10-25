'use client';
import React, { useState } from "react";
import AdmissionForm from "./AdmissionForm";
import '../style/_admission.css';
import Hero from "../components/Hero";
import { motion } from "framer-motion";

export default function AdmissionPage() {
    const [showForm, setShowForm] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    const steps = [
        { step: "Submit Application", desc: "Fill out the admission form online or visit us in person to begin the process." },
        { step: "Schedule a Tour", desc: "Visit our campus, explore classrooms, and interact with our educators." },
        { step: "Child Interaction", desc: "Your child will join a short informal play session to get comfortable." },
        { step: "Enrollment Confirmation", desc: "Once accepted, submit documents and confirm your child’s admission." },
    ];

    const eligibility = [
        {
            emoji: "👶",
            title: "Infant",
            age: "9–18 Months",
            timings: "9:00 AM – 18:00 PM",
            description: "Gentle care and sensory play for your little one’s early development."
        },
        {
            emoji: "🍼",
            title: "Toddlers",
            age: "1.5–3 Years",
            timings: "9:00 AM – 18:00 PM",
            description: "Interactive activities to encourage curiosity, movement, and basic skills."
        },
        {
            emoji: "🎨",
            title: "Pre-Nursery",
            age: "2.5–3.5 Years",
            timings: "9:00 AM – 2:00 PM",
            description: "Play-based learning focusing on communication, creativity, and confidence."
        },
        {
            emoji: "🧩",
            title: "Nursery / LKG",
            age: "3–5 Years",
            timings: "9:00 AM – 3:00 PM",
            description: "Structured learning through fun, preparing kids for formal education."
        },
        {
            emoji: "🏫",
            title: "After School",
            age: "5+ Years",
            timings: "3:00 PM – 6:00 PM",
            description: "Homework help, enrichment activities, arts, and sports for school-age kids."
        },
    ];

    return (
        <main className="admission-wrapper">

            {/* HERO */}
            <Hero
                title="Admissions at Melora"
                description="We’re excited to welcome new families! Our simple and transparent admission process helps you make the best choice for your child’s bright beginning."
            />

            {/* PROCESS SECTION */}
            <motion.section
                className="admission-process-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h2 className="section-title">Admission Process</h2>
                <div className="timeline">
                    {steps.map((item, idx) => (
                        <motion.div
                            className="timeline-step"
                            key={idx}
                            variants={fadeIn}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="step-circle">{idx + 1}</div>
                            <div className="step-details">
                                <h4>{item.step}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ELIGIBILITY SECTION */}
            <motion.section
                className="eligibility-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h2 className="section-title">Eligibility</h2>
                <div className="eligibility-grid">
                    {eligibility.map((item, idx) => (
                        <motion.div
                            className="eligibility-card"
                            key={idx}
                            variants={fadeIn}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <span className="emoji">{item.emoji}</span>
                            <h3>{item.title}</h3>
                            <p className="age">{item.age}</p>
                            <p className="timings">{item.timings}</p>
                            <p className="description">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            {/* CONTACT / APPLY */}
            <section className="admission-contact">
                <h3>Get Started Today</h3>
                <p>Ready to enroll or learn more? Reach out and take the first step toward your child’s joyful learning journey.</p>
                <p className="contact-info">
                    📞 <strong>+91 96671 17642</strong> &nbsp;&nbsp; | &nbsp;&nbsp;
                    📧 <strong>info@meloraschool.in</strong>
                </p>
                <button className="apply-button" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Close Form" : "Apply Now"}
                </button>

                {showForm && <AdmissionForm onClose={() => setShowForm(false)} />}
            </section>
        </main>
    );
}
