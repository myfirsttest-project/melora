import React from "react"
import './style/App.css';
import Home from "../app/components/Home";

export const metadata = {
    title: "About Melora Play School | Early Learning & Child Development",
    description: "Learn about Melora Play School’s mission, vision, and approach to nurturing young minds through creative and joyful early childhood education.",
};
export default function Page() {
    return (
        <div className="app-wrapper">
            <main className="main-content">
                <Home/>
            </main>
        </div>
    )
}