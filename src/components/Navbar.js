import React from "react";

export default function Navbar() {
  return (
    <header className="resyellow md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl" id="name">
            Dave McNamara
          </a>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#webprojects" className="mr-5 hover:text-red-300">
            Web Projects
          </a>
          <a href="#deviceprojects" className="mr-5 hover:text-red-300">
            Devices
          </a>
          <a href="#utilityprojects" className="mr-5 hover:text-red-300">
            Utilites
          </a>
          <a href="#bio" className="mr-5 hover:text-red-300">
            Bio
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0 resblue">
          Contact
        </a>
      </div>
    </header>
  );
}