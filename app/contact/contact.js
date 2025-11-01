"use client";
import React, { useState } from "react";
import "../style/_contact.css";
import { sendEmail } from "../components/util/emailService";
import Hero from "../components/Hero";

const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
const PARENT_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_ADMISSION_TEMPLATE_ID_PARENT;

export default function ContactPage() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        parentName: "",
        mobile: "",
        email: "",
        childAge: "",
        program: "",
        message: "",
        childName: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
            await sendEmail({ ...formData, recipientEmail: formData.email }, PARENT_TEMPLATE);

            setStatus("✅ Message sent successfully! We'll connect with you shortly.");
            setFormData({
                parentName: "",
                mobile: "",
                childAge: "",
                childName: "",
                email: "",
                program: "",
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
            <Hero
                title="Enroll Your Child"
                description="We’d love to hear from you! Please fill out the form below to get in touch."
            />

            <section className="contact-content">
                {/* LEFT: Info + Benefits + Contact Details */}
                <div className="contact-info" style={{ minHeight: "1090px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                        <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Why Choose Melora Playschool?</h3>

                        <p style={{ fontSize: "1.5rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                            At <strong>Melora Playschool</strong>, we nurture creativity, curiosity, and confidence in every child.
                            Our experienced educators provide a safe and stimulating environment where children learn through play and exploration.
                        </p>

                        <ul style={{ fontSize: "1.3rem", lineHeight: "1.7", marginBottom: "1.5rem", paddingLeft: "1.4rem", listStyleType: "disc" }}>
                            <li>Small class sizes for personalized attention</li>
                            <li>Innovative learning through play and activities</li>
                            <li>Focus on holistic child development</li>
                            <li>State-of-the-art facilities and safe environment</li>
                        </ul>

                        <p style={{ fontSize: "1.4rem", fontStyle: "italic", color: "#006ba1" }}>
                            Enroll today and let your child embark on a journey of learning and fun!
                        </p>
                    </div>

                    {/* Contact Details at the bottom */}
                    <div style={{ marginTop: "2rem" }}>
                        <hr style={{ borderColor: "#ccc", marginBottom: "1.5rem" }} />
                        <p style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>📍 Plot# 50, Iris Avenue, Sector 83, Gurugram, Haryana 122004</p>
                        <p style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>📞 (+91) 96671 17642</p>
                        <p style={{ fontSize: "1.3rem" }}>📧 info@meloraplayschool.in</p>
                    </div>
                </div>

                {/* RIGHT: Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit} style={{ minHeight: "1090px" }}>
                    <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Parent Inquiry Form</h3>

                    <label>
                        Child Name
                        <input type="text" name="childName" value={formData.childName} onChange={handleChange} />
                    </label>
                    <label>
                        Child Age
                        <input type="number" name="childAge" value={formData.childAge} onChange={handleChange} />
                    </label>
                    <label>
                        Parent Name
                        <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required />
                    </label>

                    <label>
                        Mobile
                        <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </label>

                    <label>
                        Email
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>

                    <label>
                        Program
                        <select name="program" value={formData.program} onChange={handleChange} required>
                            <option value="">Select Program</option>
                            <option value="Infant">Infant</option>
                            <option value="Playgroup">Playgroup</option>
                            <option value="Nursery">Nursery</option>
                            <option value="Junior KG">Junior KG</option>
                            <option value="Senior KG">Senior KG</option>
                        </select>
                    </label>

                    <label>
                        Message
                        <textarea name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
                    </label>

                    <button type="submit" disabled={loading} className="contact-button">
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </form>
            </section>

            {status && (
                <p className={`status-message ${status.includes("❌") ? "error" : "success"}`}>
                    {status}
                </p>
            )}

            <section className="contact-map">
                <h3>Come Visit Us</h3>
                <p>Be a part of the best kids’ play school in Sector 83, Gurugram.</p>
                <div className="map-placeholder">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22059.72335294903!2d76.98762297963401!3d28.392821342839216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dccbf1e70d1%3A0xd2c68a29ace28d8a!2sMELORA%20PreSchool!5e1!3m2!1sen!2sin!4v1757672936129!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
