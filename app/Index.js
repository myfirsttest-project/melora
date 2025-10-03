import React from "react"; 
import Footer from "./components/Footer";
import Home from "@/app/components/Home";

function Index(){
    return (
        <div className="app-wrapper">
            <main className="main-content">
               <Home/>
            </main>
            <Footer/>
        </div>
    );
}
export default Index;