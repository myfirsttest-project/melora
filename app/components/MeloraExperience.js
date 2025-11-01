"use client"
import React from "react"
import Image from "next/image"
import "../style/melora-experience.css"
import '../style/main.css';
import "../style/heading.css";
import activity1 from "../../public/images/melora_happy1.jpg"
import activity2 from "../../public/images/yellowDay.jpg"
import activity3 from "../../public/images/outside.jpg"
import activity4 from "../../public/images/painting.jpg"
import activity5 from "../../public/images/sports_Melora.jpg"

const MeloraExperience = () => {
    const whyUs = [
        {
            icon: "💖",
            title: "Caring Environment",
            text: "Every child is loved and nurtured in a safe, warm setting."
        },
        {
            icon: "🎓",
            title: "Experienced Educators",
            text: "Our trained teachers guide children with creativity and patience."
        },
        {
            icon: "🎨",
            title: "Creative Curriculum",
            text: "We blend academics and play to spark curiosity and imagination."
        },
        {
            icon: "🌱",
            title: "Holistic Growth",
            text:
                "Focusing on emotional, social, and cognitive development for all children."
        }
    ]

    const activities = [
        { title: "Play & un", image: activity1 },
        { title: "Caring and Learning", image: activity2 },
        { title: "Outdoor Play", image: activity3 },
        { title: "Paint and Learn", image: activity4 },
        { title: "Sports", image: activity5 }
    ]

    return (
        <section className="melora-experience">
            <div>
                <h2>Why Choose Us</h2>
                <p className="subtitle">
                    At Melora, we nurture joyful learners through care, curiosity, and
                    creativity — earning the trust of families who see the difference
                    every day.
                </p>

                <div className="why-grid">
                    {whyUs.map((item, i) => (
                        <div
                            key={i}
                            className="why-card fade-in-up"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* JOYFUL DAY / LIVE EXAMPLES */}
                <div className="joyful-showcase">
                    <div className="scroll-track">
                        {[...activities, ...activities].map((a, i) => (
                            <div key={i} className="activity-card">
                                <Image
                                    src={a.image}
                                    alt={a.title}
                                    width={450}
                                    height={450}
                                    loading="lazy"
                                    className="activity-img"
                                />
                                <div className="overlay">
                                    <span className="activity-title">{a.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeloraExperience
