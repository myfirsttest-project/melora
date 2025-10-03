import React from "react";
import "../style/Home.css";
import kids1 from "../../public/images/kids1.jpg";
import kids2 from "../../public/images/kids2.jpg";
import kids3 from "../../public/images/kids3.jpg";
import Image from "next/image";
import '../style/_admission.scss';
import HeroImage from "@/app/components/HeroImage";
const Home = () => {
    return (
        <div className="home-container">
            <HeroImage imageSrc="/images/background3.png"
            />
            <section className="about">
                <h2 className="section-title">About Us</h2>
                <h4 className="mini-title"> Welcome to Melora Playschool</h4>
                <p>
                    At Melora Play School, we provide a safe, nurturing, and fun
                    environment where children learn through play. Our experienced
                    educators ensure every child feels at home, exploring the world
                    through structured activities and free play.
                </p>
            </section>

            {/* Programs Section */}
            <section className="programs">
                <h4>Our Programs</h4>
                <ul>
                    <li>👶 Toddler Care (1.5 - 2.5 years)</li>
                    <li>🎨 Nursery (2.5 - 3.5 years)</li>
                    <li>📚 Pre-KG & LKG (3.5 - 5 years)</li>
                    <li>🕒 After-School & Day Care</li>
                </ul>
            </section>

            {/* Gallery Section */}
            <section className="gallery">
                <h4 className="mini-title">Happy Moments</h4>
                <div className="gallery-images">
                    <Image src={kids1} alt="Kids playing" className="gallery-img" />
                    <Image src={kids2} alt="Classroom fun" className="gallery-img" />
                    <Image src={kids3} alt="Outdoor activity" className="gallery-img" />
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <h4 className="mini-title">Enroll Your Child Today!</h4>
                <p>Give your child the best start at Melora Play School.</p>
                <a href="/admission" className="cta-button">
                    Apply for Admission
                </a>
            </section>
        </div>
    );
};

export default Home;
