"use client";
import React from "react";

const partners = [
    { name: "Partner 1", logo: "/images/bt.png" },
    { name: "Partner 2", logo: "/images/bajaj-seeklogo.png" },
    { name: "Partner 3", logo: "/images/amazon.png" },
    { name: "Partner 4", logo: "/images/KPMG_id9tLD2YU7_1.png" },
    { name: "Partner 5", logo: "/images/pwc.png" },
];

export default function PartnerLogo() {
    return (
        <section className="partner-showcase">
            <div className="partner-row">
                {partners.map((partner, idx) => (
                    <div key={idx} className="partner-item">
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            width="150"
                            height="60"
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
