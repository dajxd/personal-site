import React from "react";
import {utilityprojects} from "../data";

export default function UtilityProjects() {
    return (
        <section id="utilityprojects" className="resblue body-font md:border-none border-b-4 border-red-300">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <img className="mx-auto inline-block w-10 mb-4" src="./whiteflower.PNG"
                         alt="Just a pretty divider flower!"/>
                    <h1 className="text-4xl md:text-3xl font-medium title-font-blue resyellowtext mb-4 ">
                        Utility Projects
                    </h1>
                    <p className="lg:w-1/2 mx-auto leading-relaxed text-lg text-white">
                        Made (almost) entirely for my own use. They ain't always pretty, but they're portable and
                        dependable.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {utilityprojects.map((project) => {
                        if (project.link !== "") {
                            return (
                                <a href={project.link} target="_blank"

                                   key={project.image}
                                   className="w-full lg:w-1/2 p-8 h-100 min-h-full ">
                                    <h1 className="text-lg font-bold text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <div className="flex relative min-h-full resbluetext">
                                        <img
                                            alt="gallery"
                                            className="absolute inset-0 w-full h-full object-center imageborder bordershape object-contain"
                                            src={project.image}
                                        />
                                        <div
                                            className="px-8 py-10 relative z-9 w-full min-h-full border-4 notes bordershape bg-gray-50 opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-bold text-red-300 mb-5">
                                                {project.subtitle}
                                            </h2>

                                            <p className="leading-relaxed">{project.description}</p>
                                        </div>
                                    </div>
                                </a>
                            )
                        } else {
                            return (
                                <a
                                    key={project.image}
                                    className="w-full lg:w-1/2 p-8 h-100 min-h-full ">
                                    <h1 className="text-lg font-bold text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <div className="flex relative min-h-full resbluetext">

                                        <img
                                            alt="gallery"
                                            className="absolute inset-0 w-full h-full object-center imageborder bordershape object-contain"
                                            src={project.image}
                                        />
                                        <div
                                            className="px-8 py-10 relative z-9 w-full min-h-full border-4 notes bordershape bg-gray-50 opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-bold text-red-300 mb-5">
                                                {project.subtitle}
                                            </h2>

                                            <p className="leading-relaxed">{project.description}</p>
                                        </div>
                                    </div>
                                </a>
                            )


                        }
                    })}
                </div>
            </div>
        </section>
    );
}