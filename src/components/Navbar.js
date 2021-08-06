import React from "react";

export default function Navbar() {
    return (
        <header
            className="resyellow md:sticky top-0 z-10 md:border-none border-b-4 border-red-300 md:border-none border-b-4 border-red-300">
            <div className="container mx-auto flex flex-wrap md:p-5 p-0 pb-3 flex-col md:flex-row items-center">
            <div className=" flex items-spread justify-between items-baseline md:px-5 p-0 md:items-center w-full md:w-auto">
                <p className="title-font-blue font-medium text-white mb-4 md:mb-0">
                    <a href="#top" className="ml-0 md:ml-3 text-xl" id="name">
                        Dave McNamara
                    </a>
                </p>
                <a
                    href="#contact"
                    className="items-center border-0 py-1 px-3 focus:bg-blue-500 hover:bg-blue-500 rounded text-base mt-4 md:mt-0 resblue bordershape md:hidden inline-flex ">
                    Contact
                </a>
            </div>
                <nav
                    className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap md:items-center text-lg md:justify-center md:w-auto items-baseline items-spread justify-between w-full px-20">
                    <a href="#webprojects" className="mr-6 hover:text-red-300 focus:text-red-300">
                        Web Projects
                    </a>
                    <a href="#deviceprojects" className="mr-6 hover:text-red-300 focus:text-red-300">
                        Devices
                    </a>
                    <a href="#utilityprojects" className="mr-6 hover:text-red-300 focus:text-red-300">
                        Utilites
                    </a>
                    <a href="#bio" className="hover:text-red-300 focus:text-red-300">
                        Bio
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="items-center border-0 py-1 px-3 focus:bg-blue-500 hover:bg-blue-500 rounded text-base mt-4 md:mt-0 resblue bordershape hidden md:inline-flex ">
                    Contact
                </a>
            </div>
        </header>
    );
}