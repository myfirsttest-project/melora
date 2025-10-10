"use client";
import React from "react";
import "../style/Footer.css";
import Facebook from "./logos/Facebook";
import InstaLogo from "./logos/InstaLogo";
import YoutubeLogo from "./logos/YoutubeLogo";

const Footer = () => {
    return (
        <footer className="melora-footer">
            <div className="footer-container">
                {/* ABOUT */}
                <div className="footer-section about-footer">
                    <h3 className="subsection-title">Melora Playschool & Daycare</h3>
                    <p>Nurturing Little Minds, Brightening Big Futures</p>
                    <p>
                        Founded in 2015 with dedication to providing a nurturing, safe, and stimulating
                        environment where children can learn, grow, and thrive.
                    </p>
                </div>

                {/* LINKS */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/programs">Our Programs</a></li>
                        <li><a href="/admissions">Admissions</a></li>
                        <li><a href="/resources">Parent Resources</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* CONTACT INFO */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>📍 Plot# 50, Iris Avenue, Near City Homes, Gurgaon 21, Block K, Sector 83, Gurugram, Haryana 122004</p>
                    <p>📞 <a href="tel:+919667117642">(+91) 96671 17642</a></p>
                    <p>📧 <a href="mailto:info@meloraplayschool.in">info@meloraplayschool.in</a></p>
                </div>

                {/* SOCIAL */}
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/meloraplayschool/" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com/meloradaycare83/#" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <InstaLogo />
                        </a>
                        <a href="https://www.youtube.com/@Melora.Daycare" target="_blank" rel="noreferrer" aria-label="YouTube">
                            <YoutubeLogo />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2015 Melora DayCare and PlaySchool. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
