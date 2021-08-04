import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import UtilityProjects from "./components/UtilityProjects";
import WebProjects from "./components/WebProjects";
import DeviceProjects from "./components/DeviceProjects";
import Bio from "./components/Bio";
import Footer from "./components/Footer";


export default function App() {
    return (
        <main className="text-gray-700 bg-gray-50 body-font">

            <Navbar/>
            <About/>
            <WebProjects/>
            <DeviceProjects/>
            <UtilityProjects/>
            <Bio/>
            <Contact/>
            <Footer/>
        </main>
    );
}
