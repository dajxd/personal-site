import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact", name, email, message}),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div
                className="container px-5 py-10 mx-auto flex flex-wrap resblue rounded-lg overflow-hidden p-10 justify-center w-full xl:w-2/3">
                <div
                    className="text-2xl lg:text-3xl px-0 lg:px-10 mb-10 inline-block lg:w-1/2 text-center lg:text-left">
                    <h2 className="font-semibold">
                        Email
                    </h2>
                    <p className="text-indigo-400 leading-relaxed" id="em">
                    </p>
                    <h2 className="title-font font-semibold mt-4">
                        Cell
                    </h2>
                <p className="text-indigo-400 leading-relaxed" id="pn"></p>
                </div>
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/2 md:w-full flex flex-col w-full">
                    <h2 className="text-3xl mb-5 font-semibold title-font text-center lg:text-left">
                        Feel free to reach out!
                    </h2>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-200 rounded focus:ring-1 text-base outline-none py-1 px-3 leading-8 resbluetext"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-200 rounded focus:ring-1 text-base outline-none py-1 px-3 leading-8 resbluetext"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-200 rounded focus:ring-1 h-32 text-base outline-none py-1 px-3 resize-none leading-6 resbluetext"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="resyellow border-0 py-3 px-6 focus:text-red-300 hover:text-red-300 rounded text-lg font-bold md:w-1/3 w-auto bordershape ml-auto mr-auto lg:ml-0 lg:mr-0">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}