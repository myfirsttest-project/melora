"use client";
import React from "react";
import '../style/_header-footer.css';
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="melora-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Melora Playschool & Daycare</h3>
                    <p>Shaping Little Minds with Big Hearts</p>
                    <p>Founded to provide a nurturing, safe, and inspiring environment for every child.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <p><a href="/about">About Us</a></p>
                    <p><a href="/programs">Programs</a></p>
                    <p><a href="/admission">Admissions</a></p>
                    <p><a href="/contact">Contact Us</a></p>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>📍 Gurugram, Haryana</p>
                    <p>📞 <a href="tel:+919667117642">(+91) 96671 17642</a></p>
                    <p>📧 <a href="mailto:info@meloraplayschool.in">info@meloraplayschool.in</a></p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/meloraplayschool/" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <FaFacebookF/>
                        </a>
                        <a href="https://www.instagram.com/meloradaycare83/#" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FaInstagram/>
                        </a>
                        <a href="https://www.youtube.com/@Melora.Daycare" target="_blank" rel="noreferrer" aria-label="YouTube">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2015 Melora Playschool & Daycare. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;
