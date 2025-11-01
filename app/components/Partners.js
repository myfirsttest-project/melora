import React from 'react';
import '../style/partners.css';
import Image from "next/image";

const partners = [
    "/images/partner.png",
    "/images/partner1.png",
    "/images/pwc-logo.png",
    "/images/Spient.png",
    "/images/BT.png",
    "/images/partner5.png",
];

const Partners = () => {

    return (
        <section className="section partners">
            <h2>Our Trusted Partners</h2>
            <div className="partner-logos">
                {partners.map((p, i) => (
                    <div key={i} className="partner-logo">
                        <Image
                            src={p}
                            alt={`Partner ${i + 1}`}
                            width={460}
                            height={270}
                            style={{ objectFit: "contain" }}
                            loading="lazy"
                            quality={70}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-xl drop-shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
