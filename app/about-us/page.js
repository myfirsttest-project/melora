import About from "./About";
import React from "react"
import Image from "next/image";

export const metadata = {
    title: "About Melora Play School | Early Learning & Child Development",
    description:
        "Learn about Melora Play School’s vision, mission, and approach to nurturing young minds through joyful early education in India.",
};
export default function Page() {
    return (
        <div className="app-wrapper">
            <main className="main-content">
                <div className="main-section-image">
                    <section className="partner-hero-image" style={{
                        textAlign: "center",
                        margin: "0rem 0",
                        position: "relative",
                        height: "99%",
                        width: "99%"
                    }}>
                        <Image
                            src="/images/background4.png"
                            alt="Children exploring and learning"
                            fill // makes the image fill the parent div
                            style={{objectFit: "cover", borderRadius: "15px"}}
                            priority
                        />
                    </section>
                </div>
                <About/>
            </main>
        </div>
    )
  }