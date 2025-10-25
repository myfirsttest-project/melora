import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../style/_home.css';

const testimonial = [
    {
        text: "Melora has truly become a second home for our daughter. The teachers are kind, patient, and genuinely invested in every child’s growth. We’ve seen her confidence and curiosity blossom!",
        name: "— Pooja Yadav",
        child: "Mishika, 3 yrs",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        text: "The after-school program at Melora strikes the perfect balance between learning and fun. Our son loves going every day — it’s structured yet full of creativity and laughter.",
        name: "— Rahul & Sneha Mehta",
        child: "Vihaan, 6 yrs",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        text: "From the very first day, our little one felt welcomed and cared for. The staff’s warmth and attention made the transition so easy for both baby and parents!",
        name: "— Meena D.",
        child: "Aryan, 10 months",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Melora beautifully blends play and learning. Our daughter looks forward to school every morning and comes home excited to tell us about her day — a true blessing for working parents.",
        name: "— Ramesh & Priya K.",
        child: "Sia, 4 yrs",
        rating: "⭐⭐⭐⭐⭐"
    },
];

const Testimonials = () =>  {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1});
    return (
        <div
            className="section testimonials">
            <div className="testimonial-container">
                <div className="testimonial-heading">
                    <h2>From Our Families’ Hearts</h2>
                </div>
                <div className="testimonial-grid">
                    {testimonial.map((t, i) => (
                        <div key={i} className="testimonial-card" >
                            <div className="rating">{t.rating}</div>
                            <p className="testimonial-text">“{t.text}”</p>
                            <h4 className="parent-name">{t.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
