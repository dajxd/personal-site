import React from "react";
import {deviceprojects} from "../data";

export default function DeviceProjects() {
    return (
        <section id="deviceprojects"
                 className="text-grey-400 bg-gray-50 body-font md:border-none border-b-4 border-red-300">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <img className="mx-auto inline-block w-10 mb-4" src="./blackflower.PNG"
                         alt="Just a pretty divider flower!"/>
                    <h1 className="text-4xl md:text-3xl font-medium title-font-only mb-4 resbluetext">
                        Devices
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I have a hobby of making devices (with sometimes dubious utility), often with Arduino or Raspberry
                        Pi. Here's a couple recent ones.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 pb-10 ">
                    {deviceprojects.map((project) => (
                        <div
                            key={project.image}
                            className="w-full xl:w-1/2 h-100 p-8 hoverers">
                            <h1 className="text-lg font-bold resbluetext  mb-3">
                                {project.title}
                            </h1>
                            <div className="flex relative min-h-full resbluetext z-9">
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

                                    <p className="leading-relaxed text-grey-900">{project.description}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}