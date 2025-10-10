import React from "react";
import Image from "next/image";
import "./about.css";
import "../style/main.scss"

export default function About() {
    return (
        <div className="about-wrapper">
            <div className="main-section-image">
                <Image
                    src="/images/background4.png"
                    alt="Children exploring and learning"
                    width={1000}
                    height={300}
                />
            </div>
            {/* About & Vision Section */}
            <section className="section-horizontal">
                <div className="section-box-wrapper">
                    {/* About Us */}
                    <div className="section-box box-left">
                        <h3 className="subsection-title-centre">About Us</h3>
                        <p className="section-text">
                            At Melora, we believe the early years are the foundation for a lifelong love of learning.
                            Our nurturing environment fosters creativity, confidence, and social skills through
                            play-based learning.
                            With a dedicated team of passionate educators, we create a safe and stimulating space for
                            children to explore.
                        </p>
                    </div>

                    {/* Vision & Goals */}
                    <div className="section-box box-right">
                        <h3 className="subsection-title-centre">Vision & Goals</h3>
                        <p className="section-text">
                            Our vision is to be a center of excellence that fosters innovation, critical thinking, and
                            social responsibility.
                        </p>
                        <ul className="section-text">
                            <li>Deliver high-quality, student-centered education</li>
                            <li>Foster creativity, curiosity, and lifelong learning</li>
                            <li>Promote emotional, social & academic development</li>
                            <li>Inspire future leaders & global citizens</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="section-founder">
                <div className="founder-card">
                    <div className="founder-image">

                        <Image
                            src="/images/sumita.jpeg"
                            alt="Founder of Melora School"
                            width={400}
                            height={400}
                            style={{borderRadius: "10px", objectFit: "cover"}}
                        />

                    </div>
                    <div className="founder-details">
                        <h3 className="subsection-title">Meet Our Founder</h3>
                        <h5>Where Little Minds Blossom and Bright Futures Begin!</h5>
                        <br/>
                        <p>

                            Melora was born from a dream I carried for more than ten years. A decade ago, while visiting
                            Norway, I was deeply inspired by the way kindergartens there nurture children—not just
                            academically, but in every aspect of their growth.
                            <br/> <br/>
                            I saw how much emphasis was placed on helping children build their mental and physical
                            abilities, while also encouraging independence and confidence from an early age. It was a
                            system that truly believed in preparing children for life, not just for school.
                            <br/> <br/>
                            That experience stayed with me and became the spark that led to Melora. With over a decade
                            of experience in the education sector, I have dedicated my life to shaping young minds and
                            creating nurturing learning environments. My vision is to provide children with the same
                            kind of holistic foundation I witnessed in Norway—one that allows them to grow into strong,
                            confident, and independent individuals.
                        </p>
                        <br></br>

                        <h5> — Sumita Gunwal, Founder & CEO</h5>

                        <Image
                            src="/images/signature.png"
                            alt="Founder signature"
                            width={100}
                            height={50}
                            style={{objectFit: "cover"}}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
