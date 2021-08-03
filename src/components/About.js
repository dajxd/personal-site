import {MinusIcon} from "@heroicons/react/solid";
import React from "react";

export default function About() {
    return (
        <section id="about" className="md:border-none border-b-4 border-red-300">
            <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center ">
                <div className="lg:flex-grow  flex flex-col md:text-center mb-16 md:mb-0 items-center text-center">
                    {/* <img src="head.png" className="w-1/3"/> */}
                    <h1 className="title-font   text-4xl mb-4 font-medium resbluetext">
                        Hey! I'm Dave, a maker of code and music and things.
                    </h1>
                    <MinusIcon className="h-10 resyellowtext mb-4"/>
                    <h2 className="title-font text-2xl mb-4 font-medium resbluetext">
                        This is my code's house. You don't have to take your shoes off.
                    </h2>
                        <br className="hidden lg:inline-block font-bold"/>
                        <MinusIcon className="h-10 w-5 resbluetext mb-4"/>
                    <h2 className="text-2xl md:text-lg mb-4 font-medium resbluetext">Below are some of my projects, get in touch if you think I could help you with yours!
                    </h2>
                    <br className="inline-block"/>
                    <div className="flex justify-center mt-10">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-600 border-0 py-2 px-6 hover:bg-green-500 rounded text-xl bordershape">
                            Get in touch
                        </a>
                        <a
                            href="#bio"
                            className="ml-4 inline-flex resblueback border-0 py-2 px-6 hover:bg-gray-700 hover:bg-blue-500 text-white rounded text-xl bordershape">
                            Get to know me
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}