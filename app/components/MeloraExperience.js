"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import "../style/_home.css";
import activity1 from "../../public/images/melora_happy1.jpg";
import activity2 from "../../public/images/yellowDay.jpg";
import activity3 from "../../public/images/outside.jpg";
import activity4 from "../../public/images/painting.jpg";
import activity5 from "../../public/images/sports_Melora.jpg";

const MeloraExperience = () => {
   const whyUs = [
        {icon: "💖", title: "Caring Environment", text: "Every child is loved and nurtured."},
        {icon: "🎓", title: "Experienced Educators", text: "Trained teachers guiding with creativity and patience."},
        {icon: "🎨", title: "Creative Curriculum", text: "Blending academics and play to spark curiosity."},
        {icon: "🧩", title: "Holistic Growth", text: "We focus on emotional, social, and cognitive development."},
    ];

    const activities = [
        {title: "Art & Craft Fun", image: activity1},
        {title: "Music & Dance", image: activity2},
        {title: "Outdoor Play", image: activity3},
        {title: "Story Time", image: activity4},
        {title: "Camp and Trips", image: activity5},
    ];
    const fadeUp = {
        hidden: {opacity: 0, y: 50},
        show: {opacity: 1, y: 0, transition: {duration: 0.7}},
    };
    return (
        <div className="melora-experience">
            <div className="content-wrapper">
                <h2>Why Families Love Melora</h2>
                <p className="subtitle">At Melora, we nurture joyful learners through care, curiosity, and
                    creativity — earning the trust of families who see the difference every day.</p>

                <div className="why-grid">
                    {whyUs.map((item, i) => (
                        <div key={i} className="why-card" >
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
                                    width={500}
                                    height={450}
                                    loading="lazy"
                                    quality={70}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeloraExperience;
