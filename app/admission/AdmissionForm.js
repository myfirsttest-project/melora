import React, { useState } from "react";
import "../style/AdmissionForm.css";

function AdmissionForm({ onClose }) {
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
        setStatus("");

        try {
            const response = await fetch("/apis/admission", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (result.success) {
                setStatus("✅ Application submitted successfully!");
                setSubmitted(true);
            } else {
                setStatus("⚠️ Submission failed. Please try again.");
            }
        } catch (err) {
            console.error(err);
            setStatus("❌ Error submitting application.");
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
                        <button
                            type="submit"
                            disabled={loading}
                            className="apply-button"
                        >
                            {loading ? "Submitting..." : "Submit Application"}
                        </button>
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
                        className="apply-button"
                        style={{ background: "#E53935", color: "#fff" }}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}

export default AdmissionForm;
