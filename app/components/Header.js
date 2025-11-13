"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MeloraLogo from "./logos/MeloraLogo";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Program", href: "/program" },
        { name: "Admission", href: "/admission" },
        { name: "Events", href: "/event" }
    ];

    return (
        <header className="header">
            {/* Logo Section */}
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
                    <Link href="/contact" className="nav-btn">Enroll Today</Link>
                    <Link href="/partner" className="nav-btn">
                        Become a Partner
                    </Link>
                </div>
            </nav>

            {/* Mobile Toggle */}
            <div className="nav-toggle" onClick={toggleMenu}>
                {menuOpen ? <X /> : <Menu />}
            </div>
        </header>
    );
}
