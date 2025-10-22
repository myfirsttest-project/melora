"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "../style/_home.scss";

// Images
import heroImg from "../../public/images/home_page.png";
import infant from "../../public/images/infant.png";
import toddler from "../../public/images/kids1.jpg";
import nursery from "../../public/images/kids2.jpg";
import prekg from "../../public/images/lkg.jpg";
import afterSchool from "../../public/images/kids4.jpg";
import activity1 from "../../public/images/meloraKids.jpg";
import activity2 from "../../public/images/meloraKids1.jpeg";
import activity3 from "../../public/images/sports2.jpeg";
import activity4 from "../../public/images/meloraClass1.jpeg";
import activity5 from "../../public/images/trip2.jpeg";
import goalImg from "../../public/images/goal.webp";

// Icons
import { FaBaby, FaPuzzlePiece, FaPaintBrush, FaSchool, FaSun } from "react-icons/fa";

// Email service
import { sendEmail } from "./util/emailService";

const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
const PARENT_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_ADMISSION_TEMPLATE_ID_PARENT;

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Home = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [showTop, setShowTop] = useState(false);

    const [formData, setFormData] = useState({
        parentName: "",
        mobile: "",
        email: "",
        childAge: "",
        childName: "",
        program: "",
    });

    // Program cards
    const programs = [
        { title: "Infant Care", age: "0–1 yr", image: infant, icon: <FaBaby />, description: "A nurturing space where your little one feels safe, loved, and stimulated." },
        { title: "Toddler Program", age: "1–2 yrs", image: toddler, icon: <FaPuzzlePiece />, description: "Encouraging curiosity and first friendships through stories and music." },
        { title: "Pre-Nursery", age: "2–3 yrs", image: nursery, icon: <FaPaintBrush />, description: "Where imagination, language, and confidence begin to bloom." },
        { title: "Nursery & Early Learning", age: "3–5 yrs", image: prekg, icon: <FaSchool />, description: "Building strong foundations in communication, creativity, and problem-solving." },
        { title: "After-School Enrichment", age: "2–8 yrs", image: afterSchool, icon: <FaSun />, description: "A joyful space for children to explore art, reading, and recreation." },
    ];

    const whyUs = [
        { icon: "💖", title: "Caring Environment", text: "Every child is loved and nurtured." },
        { icon: "🎓", title: "Experienced Educators", text: "Trained teachers guiding with creativity and patience." },
        { icon: "🎨", title: "Creative Curriculum", text: "Blending academics and play to spark curiosity." },
        { icon: "🧩", title: "Holistic Growth", text: "We focus on emotional, social, and cognitive development." },
    ];

    const activities = [
        { title: "Art & Craft Fun", image: activity1 },
        { title: "Music & Dance", image: activity2 },
        { title: "Outdoor Play", image: activity3 },
        { title: "Story Time", image: activity4 },
        { title: "Camp and Trips", image: activity5 },
    ];

    const testimonials = [
        { text: "Melora has been a second home for our daughter...", name: "— Pooja Yadav", child: "Mishika, 3 yrs", rating: "⭐⭐⭐⭐⭐" },
        { text: "We were impressed with how structured yet fun the after-school program is...", name: "— Rahul & Sneha Mehta", child: "Vihaan, 6 yrs", rating: "⭐⭐⭐⭐⭐" },
        { text: "From day one, our child felt welcomed and happy...", name: "— Meena D.", child: "Aryan, 10 months", rating: "⭐⭐⭐⭐⭐" },
        { text: "Melora balances learning and play beautifully...", name: "— Ramesh & Priya K.", child: "Sia, 4 yrs", rating: "⭐⭐⭐⭐⭐" },
    ];

    const partners = [
        "/images/partner.png",
        "/images/partner1.png",
        "/images/partner2.png",
        "/images/partner3.svg",
        "/images/partner4.png",
        "/images/partner5.png",
    ];

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const templateParams = { ...formData, year: new Date().getFullYear(), recipientEmail: formData.email };
        try {
            await sendEmail(templateParams, TEMPLATE_ID);
            await sendEmail({ ...formData, recipientEmail: formData.email }, PARENT_TEMPLATE);
            setStatus("✅ Message sent successfully! We'll connect with you soon.");
            setFormData({ parentName: "", mobile: "", childAge: "", childName: "", email: "", program: "" });
        } catch {
            setStatus("❌ Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div>
            {/* HERO */}
            <section className="hero">
                <Image src={heroImg} alt="Hero Background" fill objectFit="cover" className="hero-bg" />
                <div className="hero-overlay">
                    <motion.div className="hero-text" variants={fadeUp} initial="hidden" animate="show">
                        <h1>Shaping Little Minds with Big Hearts 💕</h1>
                        <p>Where learning is joyful, caring, and creative — every single day.</p>
                        <a href="/events" className="btn secondary">Open Gallery</a>
                    </motion.div>

                    <motion.div className="hero-form-container" variants={fadeUp} initial="hidden" animate="show">
                        <div className="hero-form">
                            <h2>Enroll Your Child!</h2>
                            <form onSubmit={handleSubmit}>
                                <input name="childName" placeholder="Child's Name" required value={formData.childName} onChange={handleChange} />
                                <input name="childAge" placeholder="Child's Age" required value={formData.childAge} onChange={handleChange} />
                                <input name="parentName" placeholder="Parent's Name" required value={formData.parentName} onChange={handleChange} />
                                <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                                <input type="tel" name="mobile" placeholder="Phone Number" required value={formData.mobile} onChange={handleChange} />
                                <select name="program" required value={formData.program} onChange={handleChange}>
                                    <option value="">Select Program</option>
                                    <option value="infant">Infant</option>
                                    <option value="toddlers">Toddlers</option>
                                    <option value="pre-nursery">Pre-Nursery</option>
                                    <option value="nursery">Nursery</option>
                                    <option value="after-school">After School</option>
                                </select>
                                <button type="submit" className="btn primary">{loading ? "Submitting..." : "Submit Application"}</button>
                            </form>
                            {status && <p className={`status-message ${status.includes("❌") ? "error" : "success"}`}>{status}</p>}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PROGRAMS */}
            <motion.section className="section programs-home" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2>Our Programs</h2>
                <div className="program-cards-home">
                    {programs.map((p, i) => (
                        <motion.div key={i} className="program-cards-home1" variants={fadeUp}>
                            <Image src={p.image} alt={p.title} width={500} height={450} />
                            <div className="program-icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p className="age">{p.age}</p>
                            <p className="description-main">{p.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Choose Melora */}

            <motion.section
                className="melora-experience"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="content-wrapper">
                    <h2>Why Families Love Melora</h2>
                    <p className="subtitle">
                        At Melora, we nurture joyful learners through care, curiosity, and creativity — earning the trust of families who see the difference every day.
                    </p>

                    {/* WHY CHOOSE GRID */}
                    <div className="why-grid">
                        {whyUs.map((item, i) => (
                            <motion.div key={i} className="why-card" whileHover={{ scale: 1.05 }}>
                                <div className="icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* JOYFUL DAY / LIVE EXAMPLES */}
                    <div className="joyful-showcase">
                        <motion.div
                            className="scroll-track"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            {[...activities, ...activities].map((a, i) => (
                                <div key={i} className="activity-card">
                                    <Image src={a.image} alt={a.title} width={480} height={350} objectFit="cover" />
                                    <div className="overlay">
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        <div className="cta-card">
                            <Image src={goalImg} alt="Visit Melora" width={380} height={300} objectFit="cover" />
                            <a href="/contact" className="contact-btn">Book a Tour</a>
                        </div>
                    </div>
                </div>
            </motion.section>
            {/* TESTIMONIALS */}
            <motion.section
                className="section testimonials"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="testimonial-container">
                    {/* Heading inside container */}
                    <div className="testimonial-heading">
                        <h2>From Our Families’ Hearts</h2>
                    </div>

                    <div className="testimonial-grid">
                        {testimonials.map((t, i) => (
                            <motion.div key={i} className={`testimonial-card card-${i}`} whileHover={{ y: -5 }}>
                                <div className="rating">{t.rating}</div>
                                <p className="testimonial-text">“{t.text}”</p>
                                <h4 className="parent-name">{t.name}</h4>
                                <p className="child-name">{t.child}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>



            {/* PARTNERS */}
            <motion.section className="section partners" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2>Our Trusted Partners</h2>
                <div className="partner-logos">
                    {partners.map((p, i) => (
                        <div key={i} className="partner-logo">
                            <Image src={p} alt={`Partner ${i + 1}`} width={150} height={80} objectFit="contain" />
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* SCROLL TO TOP */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        className="scroll-to-top"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        ⬆
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
