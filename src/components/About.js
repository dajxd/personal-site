import { MinusIcon } from "@heroicons/react/solid";
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  flex flex-col md:text-center mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font   text-4xl mb-4 font-medium resbluetext">
            <br className="lg:inline-block" />
            <br className="hidden lg:inline-block font-bold" />I'm a maker of code and music and things.
          </h1>
          <MinusIcon className="w-1/3 h-10 resbluetext"/> 
          <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium resbluetext">This is my code's house.</h2>
          <br className="inline-block" />
          <p className="mb-8 leading-relaxed py-10 m:w-1/3 sm:w-full lg:w-1/2 text-lg">
            I'm a deep lover of the creative and the absurd and the endlessly foolish quest to learn everything. I spend my days teaching music, making helpful and odd things, and doublechecking that I have indeed finished that day's NYT crossword.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none resyellowtext hover:bg-green-400 rounded text-lg">
              Get in touch
            </a>
            <a
              href="#bio"
              className="ml-4 inline-flex resblue border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:bg-blue-500 text-white rounded text-lg">
              Get to know me
            </a>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div> */}
      </div>
    </section>
  );
}