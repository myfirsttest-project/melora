"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../style/Header.css";
import MeloraLogo from "./logos/MeloraLogo";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about-us" },
        { name: "Program", href: "/programs" },
        { name: "Admission", href: "/admission" },
        { name: "Events", href: "/events" },
    ];

    return (
        <header className="header">
            {/* Logo */}
            <div className="logo">
                <picture>
                    {
                        <MeloraLogo/>
                    }
                </picture>
            </div>

            {/* Navigation */}
            <nav className={`nav ${menuOpen ? "active" : ""}`}>
                <ul className="nav-links">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-buttons">
                    <Link href="/contact-us" className="nav-btn btn-enroll">
                        Enroll Your Child
                    </Link>
                    <Link href="/partner" className="nav-btn btn-partner">
                        Become a Partner
                    </Link>
                </div>
            </nav>

            {/* Mobile Toggle */}
            <div
                className="nav-toggle"
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                ☰
            </div>
        </header>
    );
};

export default Header;
