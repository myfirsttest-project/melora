"use client";
import React, {useState} from "react";
import "../style/_contact.scss";
import {sendEmail} from "../components/util/emailService";
import Image from "next/image";

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
        message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

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
            await sendEmail({...formData, recipientEmail: formData.email}, PARTNER_TEMPLATE);

            setStatus("✅ Thanks for contacting, we will connect with you shortly");
            setFormData({
                companyName: "",
                contactPerson: "",
                mobile: "",
                email: "",
                message: ""
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
            <section className="contact-hero">
                <h3>Become a Partner with Melora Playschool</h3>
                <p>We welcome organizations and individuals to collaborate with us. Fill the form below to join
                    hands!</p>
            </section>
            <section className="contact-content">
                <div className="contact-info">
                    <section className="partner-hero-image" style={{
                        textAlign: "center",
                        margin: "0rem 0",
                        position: "relative",
                        height: "99%",
                        width: "99%"
                    }}>
                        <Image
                            src="/images/handshake.png"
                            alt="Partner with Melora"
                            fill // makes the image fill the parent div
                            style={{objectFit: "cover", borderRadius: "15px"}}
                            priority
                        />
                        <h3>Contact Information</h3>

                        <p>📍 Plot# 50, Iris Avenue, Sector 83, Gurugram, Haryana 122004</p>
                        <p>📞 (+91) 96671 17642</p>
                        <p>📧 info@meloraplayschool.in</p>
                    </section>

                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
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
