'use client';
import React, { useState } from "react";
import AdmissionForm from "./AdmissionForm";
import '../style/main.scss';
import Hero from "../components/Hero";

export default function AdmissionPage() {
    const [showForm, setShowForm] = useState(false);

    return (
        <main className="admission-wrapper">
            {/* Hero */}
            <Hero
                title="Admissions at Melora School"
                subtitle="Join our nurturing and creative community"
                description="We’re excited to welcome new families. Our admission process is simple, transparent, and designed to help you make the best choice for your child."
            />

            {/* Timeline & Eligibility */}
            <section className="admission-process-eligibility">
                <h2 className="section-title">Application Process & Age Eligibility</h2>
                <div className="timeline-section">
                    {[
                        { step: "Submit Application", desc: "Fill out the form online or visit us in person." },
                        { step: "Schedule a Tour", desc: "Take a guided tour of our campus and speak with our team." },
                        { step: "Child Interaction", desc: "Your child is invited for a short informal observation session." },
                        { step: "Enrollment", desc: "Once accepted, complete paperwork and secure the spot." },
                    ].map((item, idx) => (
                        <div className="timeline-step" key={idx}>
                            <div className="step-number">{idx + 1}</div>
                            <div className="step-content">
                                <h4>{item.step}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="eligibility-grid">
                    {[
                        { emoji: "👶", title: "Infant", age: "9 Months" },
                        { emoji: "🍼", title: "Toddlers", age: "12–24 Months" },
                        { emoji: "🎨", title: "Preschool", age: "24–36 Months" },
                        { emoji: "🧩", title: "Pre-Nursery", age: "36–48 Months" },
                        { emoji: "📚", title: "LKG", age: "48–60 Months" },
                        { emoji: "🏫", title: "After School", age: "24 Months – 8 Years" },
                    ].map((item, idx) => (
                        <div className="eligibility-card" key={idx}>
                            <span className="emoji">{item.emoji}</span>
                            <h3>{item.title}</h3>
                            <p>{item.age}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="admission-contact compact">
                <h3 className="contact-title-small">Get Started Today</h3>
                <p className="contact-text-small">Ready to enroll or learn more? We’d love to speak with you.</p>
                <p className="contact-info-small">
                    📞 <strong>Call:</strong> +91 96671 17642 <br />
                    📧 <strong>Email:</strong> info@meloraschool.in
                </p>
                <button className="apply-button-small" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Close Form" : "Apply Now"}
                </button>

                {showForm && <AdmissionForm onClose={() => setShowForm(false)} />}
            </section>
        </main>
    );
}
