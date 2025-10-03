import React, {useState} from "react";
import "../style/_contact.scss";


export default function ContactPage() {
    const [, setStatus] = useState("");

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
        setStatus("Sending...");

        try {
            const res = await fetch("/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                setFormData({parentName: "", mobile: "", childAge: "", email: "", program: "", message: ""});
            } else {
                const data = await res.json();
                setStatus("❌ Failed: " + data.error);
            }
        } catch (err) {
            setStatus("❌ Error: " + err.message);
        }
        alert("Thank you! We will get back to you soon.");
    };

    return (
        <main className="contact-wrapper">
            <section className="contact-hero">
                <h3>Contact Melora Playschool</h3>
                <p>We’d love to hear from you! Please fill out the form below to get in touch.</p>
            </section>
            <section className="contact-content">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>📍 Plot# 50, Iris Avenue, Sector 83, Gurugram, Haryana 122004</p>
                    <p>📞 (+91) 96671 17642</p>
                    <p>📧 info@meloraplayschool.in</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Parent Name:
                        <input
                            type="text"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Mobile:
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Child Age:
                        <input
                            type="number"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </label>

                    <fieldset>
                        <legend>Program Interested In:</legend>
                        <label><input type="radio" name="program" value="Infant" onChange={handleChange}
                                      required/> Infant</label>
                        <label><input type="radio" name="program" value="Toddler"
                                      onChange={handleChange}/> Toddler</label>
                        <label><input type="radio" name="program" value="Nursery"
                                      onChange={handleChange}/> Nursery</label>
                        <label><input type="radio" name="program" value="Daycare"
                                      onChange={handleChange}/> Daycare</label>
                        <label><input type="radio" name="program" value="Afterschool"
                                      onChange={handleChange}/> Afterschool</label>
                    </fieldset>

                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                        ></textarea>
                    </label>

                    <button type="submit" className="contact-button">Submit</button>
                </form>
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
