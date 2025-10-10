"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "./HeroImage";

import kids1 from "../../public/images/Kids1.jpg";
import kids2 from "../../public/images/kids2.jpg";
import kids3 from "../../public/images/kids3.jpg";

import "../style/_home.scss";
import PartnerLogo from "./PartnerLogo";


const Home = () => (
    <div className="home-container">
        {/* Hero Section */}
        <HeroImage imageSrc="/images/background3.png" />

        {/* About Section */}
        <section className="about">
            <h4 className="section-title">Welcome to Melora Playschool</h4>
            <p>
                At Melora Play School, we provide a safe, nurturing, and fun environment
                where children learn through play. Our experienced educators ensure
                every child feels at home, exploring the world through structured
                activities and play.
            </p>
        </section>

        {/* ✅ Partners Section (Moved Above Programs) */}
        <section className="programs">
            <h4>Our Trusted Partners</h4>
            <PartnerLogo />
        </section>

        {/* Programs Section */}
        <section className="programs">
            <h4>Our Programs</h4>
            <ul>
                <li>👶 Toddler Care (1.5 – 2.5 years)</li>
                <li>🎨 Nursery (2.5 – 3.5 years)</li>
                <li>📚 Pre-KG & LKG (3.5 – 5 years)</li>
                <li>🕒 After-School & Day Care</li>
            </ul>
        </section>

        {/* Gallery Section */}
        <section className="gallery">
            <h4 className="mini-title">Happy Moments</h4>
            <div className="gallery-images">
                {[kids1, kids2, kids3].map((img, i) => (
                    <Image key={i} src={img} alt={`Gallery ${i + 1}`} className="gallery-img" />
                ))}
            </div>
        </section>
    </div>
);

export default Home;
