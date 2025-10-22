'use client';
import React, {useState} from "react";
import "../style/_contact.scss";
import {sendEmail} from "../components/util/emailService";
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
            recipientEmail: formData.email, // needed for parent template
        };


        try {
            await sendEmail(
                templateParams,
                TEMPLATE_ID
            );
            // 2️⃣ Email to parent
            await sendEmail(
                { ...formData, recipientEmail: formData.email },
                PARENT_TEMPLATE
            );

            setStatus("✅ Message sent successfully, we will connect with you shortly !");
            setFormData({parentName: "", mobile: "", childAge: "", email: "", program: "", message: ""});
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
                title="Enroll your child"
                description="We’d love to hear from you! Please fill out the form below to get in touch."
            />
            <section className="contact-content">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>📍 Plot# 50, Iris Avenue, Sector 83, Gurugram, Haryana 122004</p>
                    <p>📞 (+91) 96671 17642</p>
                    <p>📧 info@meloraplayschool.in</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Parent Name
                        <input
                            type="text"
                            name="parentName"
                            value={formData.parentName}
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
                        Child Age
                        <input
                            type="number"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </label>

                    <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Program</option>
                        <option value="Infant">Infant</option>
                        <option value="Playgroup">Playgroup</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Junior KG">Junior KG</option>
                        <option value="Senior KG">Senior KG</option>
                    </select>
                <br/><br/>
                    <label>
                        Message
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                        ></textarea>
                    </label>

                    <button type="submit" disabled={loading} className="contact-button"> {loading ? "Submitting..." : "Submit Application"}</button>
                </form>
            </section>
            <section>
                {status && (
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
                )}
            </section>
            <section className="contact-map">
                <h3>Come be a part of the best kids play school in Sector 83 Gurugram, Vatika India</h3>
                {/* Placeholder for Google Map */}
                <div className="map-placeholder">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22059.72335294903!2d76.98762297963401!3d28.392821342839216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dccbf1e70d1%3A0xd2c68a29ace28d8a!2sMELORA%20PreSchool%20-%20Best%20Play%20School%20%7C%20Nursery%20school%20%7C%20DayCare%20%7C%20Vatika%20India%20Next%20Sector%2083%20Gurugram!5e1!3m2!1sno!2sno!4v1757672936129!5m2!1sno!2sno"
                        width="100%"
                        height="350"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </section>
        </main>
    );
}
