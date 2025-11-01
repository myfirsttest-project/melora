import React from "react";
import "../style/testimonial.css";

const data = [
    {
        text: "Melora has truly become a second home for our daughter. The teachers are kind, patient, and genuinely invested in every child’s growth. We’ve seen her confidence and curiosity blossom!",
        name: "— Pooja Yadav",
        child: "Mishika, 3 yrs",
    },
    {
        text: "The after-school program at Melora strikes the perfect balance between learning and fun. Our son loves going every day — it’s structured yet full of creativity and laughter.",
        name: "— Rahul & Sneha Mehta",
        child: "Vihaan, 6 yrs",
    },
    {
        text: "From the very first day, our little one felt welcomed and cared for. The staff’s warmth and attention made the transition so easy for both baby and parents!",
        name: "— Meena D.",
        child: "Aryan, 10 months",
    },
    {
        text: "Melora beautifully blends play and learning. Our daughter looks forward to school every morning and comes home excited to tell us about her day — a true blessing for working parents.",
        name: "— Ramesh & Priya K.",
        child: "Sia, 4 yrs",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonial-section flex justify-center py-32">
            <div className="testimonials relative w-[70%]">
                {/* Heading OUTSIDE blob */}
                <h2 className="relative z-20 text-center text-4xl font-bold text-gray-800 mb-16">
                    From Our Families’ Hearts
                </h2>

                {/* Blob background */}
                <svg
                    className="absolute top-[10%] left-0 w-full h-full"
                    viewBox="0 0 1440 1000"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="meloraBlob" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#006ba1" />   /* Peach from header/footer */
                            <stop offset="50%" stopColor="#3388c3" />  /* Soft yellow from hero */
                            <stop offset="100%" stopColor="#66b0e0" /> /* Mint/green accent */
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#meloraBlob)"
                        d="M0,300 C360,500 1080,100 1440,300 L1440,1000 L0,1000 Z"
                    />
                </svg>

                {/* Testimonial cards */}
                <div className="testimonial-grid relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {data.map((t, i) => (
                        <div
                            key={i}
                            className="testimonial-card bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <p className="testimonial-text">“{t.text}”</p>
                            <h4 className="parent-name">{t.name}</h4>
                            <h4 className="child-name">{t.child}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Testimonials;
