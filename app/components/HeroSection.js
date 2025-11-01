"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {sendEmail} from './util/emailService';
import '../style/_home.css';
import '../style/heading.css';
import heroImg from "../../public/images/home_page.png";

const HeroSection = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        parentName: "",
        mobile: "",
        email: "",
        childAge: "",
        childName: "",
        program: "",
    });
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
    const PARENT_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_ADMISSION_TEMPLATE_ID_PARENT;


    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const templateParams = {...formData, year: new Date().getFullYear(), recipientEmail: formData.email};
        try {
            await sendEmail(templateParams, TEMPLATE_ID);
            await sendEmail({...formData, recipientEmail: formData.email}, PARENT_TEMPLATE);
            setStatus("✅ Message sent successfully! We'll connect with you soon.");
            setFormData({parentName: "", mobile: "", childAge: "", childName: "", email: "", program: ""});
        } catch {
            setStatus("❌ Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="hero">
                <Image src={heroImg} alt="Hero Background" fill style={{objectFit: "cover"}} className="hero-bg"/>
                <div className="hero-overlay">
                    <div className="hero-text" >
                        <h1>Shaping Little Minds with Big Hearts 💕</h1>
                        <p>Where learning is joyful, caring, and creative — every single day.</p>
                        <a href="/events-and-activities" className="btn secondary">Learn More</a>
                    </div>
                    <div className="hero-form-container" >
                        <div className="hero-form">
                            <h2>Enroll Your Child!</h2>
                            <form onSubmit={handleSubmit}>
                                <input name="childName" placeholder="Child's Name" required value={formData.childName}
                                       onChange={handleChange}/>
                                <input name="childAge" placeholder="Child's Age" required value={formData.childAge}
                                       onChange={handleChange}/>
                                <input name="parentName" placeholder="Parent's Name" required
                                       value={formData.parentName} onChange={handleChange}/>
                                <input type="email" name="email" placeholder="Email" required value={formData.email}
                                       onChange={handleChange}/>
                                <input type="tel" name="mobile" placeholder="Phone Number" required
                                       value={formData.mobile} onChange={handleChange}/>
                                <select name="program" required value={formData.program} onChange={handleChange}>
                                    <option value="">Select Program</option>
                                    <option value="infant">Infant</option>
                                    <option value="toddlers">Toddlers</option>
                                    <option value="pre-nursery">Pre-Nursery</option>
                                    <option value="nursery">Nursery</option>
                                    <option value="after-school">After School</option>
                                </select>
                                <button type="submit"
                                        className="btn primary">{loading ? "Submitting..." : "Submit Application"}</button>
                            </form>
                            {status &&
                                <p className={`status-message ${status.includes("❌") ? "error" : "success"}`}>{status}</p>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
