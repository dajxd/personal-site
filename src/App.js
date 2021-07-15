
import React from "react";
import About from "./components/About";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import UtilityProjects from "./components/UtilityProjects";
import WebProjects from "./components/WebProjects";
import DeviceProjects from "./components/DeviceProjects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";


export default function App() {
  return (
    <main className="text-gray-700 bg-gray-50 body-font">
      <Navbar />
      <About />
      {/* <Skills /> */}
      <WebProjects />
      <DeviceProjects />
      <UtilityProjects />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </main>
  );
}
