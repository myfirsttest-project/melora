"use client";
import React, { useState } from 'react';
import MeloraLogo from "../logos/MeloraLogo";
import Link from "next/link";
import "../style/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Program", href: "/program" },
        { name: "Admission", href: "/admission" },
        { name: "Events", href: "/events" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="header">
            <picture>
                {
                    /* <MeloraLogo/> */
                }
            </picture>

            <nav className="nav">
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                &#9776;
            </div>
        </header>
    );
};

export default Header;
