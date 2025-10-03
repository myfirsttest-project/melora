'use client';
import React from "react";
import '../style/hero_old.scss';

export default function Hero({ title, subtitle, description, center = true, className = "" }) {
    return (
        <section className={`hero-section ${center ? 'text-center' : 'text-left'} ${className}`}>
            {title && <h2 className="hero-title">{title}</h2>}
            {subtitle && <h3 className="hero-subtitle">{subtitle}</h3>}
            {description && <p className="hero-description">{description}</p>}
        </section>
    );
}
