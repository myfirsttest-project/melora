import React from "react";
import Image from "next/image";
import "../style/HeroImage.css";

const HeroImage = ({ title, subtitle, imageSrc }) => {
    return (
        <section className="hero">
            <Image
                src={imageSrc}
                alt="HeroImage Background"
                style={{ objectFit: "cover", objectPosition: "center" }}
                height={480}
                width={3600}
            />
            <div className="hero-text">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </section>
    );
};

export default HeroImage;
