'use client';
import React from "react";
import '../style/_header-footer.css';

function Hero({
                  title,
                  subtitle,
                  description,
                  overlay = true,
                  center = true,
                  className = ""
              }) {
    return (
        <section
            className={`hero-section ${center ? "text-center" : "text-left"} ${className}`}
        >
            <div className="hero-content">
                {title && <h1 className="hero-title">{title}</h1>}
                {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
                {description && <p className="hero-description">{description}</p>}
            </div>
            {overlay && <div className="hero-overlay"></div>}
        </section>
    );
}

export default Hero;