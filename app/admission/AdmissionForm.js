import React, { useState } from "react";
import "../style/AdmissionForm.css";
import {sendEmail} from "../components/util/emailService";

const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ADMISSION_TEMPLATE_ID;
const PARENT_TEMPLATE_ID= process.env.NEXT_PUBLIC_EMAILJS_ADMISSION_TEMPLATE_ID_PARENT;

function AdmissionForm_NodeJS({ onClose }) {
    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        mobile: "",
        program: "",
        childAge: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            ...formData,
            year: new Date().getFullYear(),
            recipientEmail: formData.email
        };

        try {
            await sendEmail(
                templateParams,
                TEMPLATE_ID
            );
            // 2️⃣ Email to parent
            await sendEmail(
                { ...formData, recipientEmail: formData.email },
                PARENT_TEMPLATE_ID
            );
            setStatus("✅ Application submitted successfully!");
            setFormData({ parentName: "", email: "", mobile: "", program: "", childAge: "", message: "" });
            setSubmitted(true);
            setTimeout(() => {
                onClose(); // automatically close after 3 seconds
            }, 3000);
        } catch (err) {
            console.error(err);
            setStatus("❌ Failed to submit application. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admission-form-container">
            {!submitted ? (
                <>
                    <form className="admission-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="parentName"
                            placeholder="Parent's Name"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Parent's Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Phone Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
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
                        <input
                            type="number"
                            name="childAge"
                            placeholder="Child's Age"
                            value={formData.childAge}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Additional Information"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button type="submit" disabled={loading} className="apply-button-small">
                            {loading ? "Submitting..." : "Submit Application"}
                        </button>
                        {status && <p style={{ marginTop: "10px" }}>{status}</p>}
                    </form>
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
                </>
            ) : (
                <div className="submission-message success" style={{ background: "#FFD1D1", borderColor: "#E53935", color: "#721c24" }}>
                    <p>{status}</p>
                    <button
                        onClick={onClose} // notify parent to hide form
                        className="apply-button-small"
                        style={{ background: "#E53935", color: "#fff" }}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}

export default AdmissionForm_NodeJS;
