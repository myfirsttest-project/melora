"use client";
import React, { useState } from "react";
import "../style/_contact.css";
import { sendEmail } from "../components/util/emailService";
import Image from "next/image";
import Hero from "../components/Hero";
import { Star, Handshake, Briefcase, Rocket } from "lucide-react"; //

const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
const PARTNER_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_ADMISSION_TEMPLATE_ID_PARENT;

export default function PartnerPage() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        mobile: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            ...formData,
            year: new Date().getFullYear(),
            recipientEmail: formData.email,
        };

        try {
            await sendEmail(templateParams, TEMPLATE_ID);
            await sendEmail({ ...formData, recipientEmail: formData.email }, PARTNER_TEMPLATE);

            setStatus("✅ Thanks for contacting us — we’ll connect with you shortly!");
            setFormData({
                companyName: "",
                contactPerson: "",
                mobile: "",
                email: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            setStatus("❌ Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="contact-wrapper">
            {/* ===== HERO ===== */}
            <Hero
                title="Become a Partner with Melora"
                description="Join hands with Melora to build a nurturing, creative, and future-ready learning ecosystem."
            />

            {/* ===== MAIN CONTENT ===== */}
            <section className="partner-content">
                {/* LEFT SIDE — INFO */}
                <div className="partner-info">
                    <h3 className="partner-heading">Collaborate. Grow. Inspire.</h3>

                    <div className="partner-image-wrapper">
                        <Image
                            src="/images/handshake.png"
                            alt="Partner with Melora"
                            fill
                            style={{ objectFit: "cover", borderRadius: "18px" }}
                            priority
                        />
                    </div>

                    <div className="partner-text">
                        <p>
                            Melora invites individuals and organizations who share our passion for education
                            and child development to collaborate with us.
                        </p>

                        <h4>Why Partner With Melora?</h4>
                        <ul className="partner-benefits">
                            <li>
                                <Star className="benefit-icon" /> Empower young learners through quality education
                            </li>
                            <li>
                                <Handshake className="benefit-icon" /> Build long-term collaborations with shared values
                            </li>
                            <li>
                                <Briefcase className="benefit-icon" /> Co-create events, workshops, and initiatives
                            </li>
                            <li>
                                <Rocket className="benefit-icon" /> Strengthen your brand through meaningful impact
                            </li>
                        </ul>

                        <p className="partner-cta">
                            Together, we can nurture creativity, confidence, and curiosity — one child at a time.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE — FORM */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Partner Inquiry Form</h3>

                    <label>
                        Company/Organization Name
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Contact Person
                        <input
                            type="text"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Mobile
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Message
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </label>

                    <button type="submit" disabled={loading} className="contact-button">
                        {loading ? "Submitting..." : "Submit Request"}
                    </button>
                </form>
            </section>

            {status && (
                <section>
                    <p
                        className={`status-message ${
                            status.includes("❌")
                                ? "error"
                                : status.includes("⚠️")
                                    ? "warning"
                                    : "success"
                        }`}
                    >
                        {status}
                    </p>
                </section>
            )}
        </main>
    );
}
