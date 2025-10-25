"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import {FaBaby, FaSchool, FaPuzzlePiece, FaPaintBrush, FaSun} from 'react-icons/fa';
import '../style/_home.css';
import infant from "../../public/images/infant.png";
import toddler from "../../public/images/kids1.jpg";
import nursery from "../../public/images/kids2.jpg";
import prekg from "../../public/images/lkg.jpg";
import afterSchool from "../../public/images/kids4.jpg";


const programs = [
    {
        title: "Infant Care",
        age: "0–1 yr",
        image: infant,
        icon: <FaBaby/>,
        description: "A nurturing space where your little one feels safe, loved, and stimulated."
    },
    {
        title: "Toddler Program",
        age: "1–2 yrs",
        image: toddler,
        icon: <FaPuzzlePiece/>,
        description: "Encouraging curiosity and first friendships through stories and music."
    },
    {
        title: "Pre-Nursery",
        age: "2–3 yrs",
        image: nursery,
        icon: <FaPaintBrush/>,
        description: "Where imagination, language, and confidence begin to bloom."
    },
    {
        title: "Nursery & Early Learning",
        age: "3–5 yrs",
        image: prekg,
        icon: <FaSchool/>,
        description: "Building strong foundations in communication, creativity, and problem-solving."
    },
    {
        title: "After-School Enrichment",
        age: "2–8 yrs",
        image: afterSchool,
        icon: <FaSun/>,
        description: "A joyful space for children to explore art, reading, and recreation."
    },
];
const fadeUp = {
    hidden: {opacity: 0, y: 50},
    show: {opacity: 1, y: 0, transition: {duration: 0.7}},
};

const ProgramsSection = ({ program }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div> <div className="section programs-home">
            <h2>Our Programs</h2>
            <div className="program-cards-home">
                {programs.map((p, i) => (
                    <div key={i} className="program-cards-home1" >
                        <Image src={p.image} alt={p.title} width={500} height={450} loading="lazy"
                               quality={70}
                               sizes="(max-width: 768px) 100vw, 50vw"/>
                        <div className="program-icon">{p.icon}</div>
                        <h3>{p.title}</h3>
                        <p className="age">{p.age}</p>
                        <p className="description-main">{p.description}</p>
                    </div>
                ))}
            </div>
        </div></div>
    )
};

export default ProgramsSection;