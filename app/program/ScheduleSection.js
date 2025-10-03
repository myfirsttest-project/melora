'use client';
import React from "react";
import '../style/_admission.scss';


export default function ScheduleSection() {
    const schedules = [
        { title: 'Half Day', desc: 'Morning program with fun learning activities.', className: 'half-day' },
        { title: 'Full Day', desc: 'Complete day care and structured learning.', className: 'full-day' },
        { title: 'Extended Day', desc: 'Extended hours for after-school activities and homework support.', className: 'extended-day' },
    ];

    return (
        <section className="section-schedule">
            <h2 className="section-title">Schedule & Timings</h2>
            <h3 className="subsection-title-centre">Choose a schedule that fits your child’s routine and learning needs.</h3>
            <div className="schedule-grid">
                {schedules.map((sched, idx) => (
                    <div className={`schedule-card ${sched.className}`} key={idx}>
                        <h3>{sched.title}</h3>
                        <p>{sched.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
