import React from "react";
import Image from "next/image";
import "../style/_hero.scss";

const HeroImage = ({ title, subtitle, imageSrc }) => {
    return (
        <section className="hero">
            <div className="hero-image">
            <Image
                src={imageSrc}
                alt="HeroImage Background"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="hero-text">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
            </div>
        </section>
    );
};

export default HeroImage;
