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
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap resblue rounded-lg overflow-hidden p-10">
        

          
            <div className="py-10 text-2xl md:px-10 lg:text-3xl lg:px-10 font-medium title-font sm:w-full m:w-full lg:w-1/2">
              <h2 className=" font-semibold tracking-widest ">
                Email
              </h2>
              <p className="text-indigo-400 leading-relaxed " id="em">
              </p>
              <h2 className="title-font font-semibold tracking-widest mt-4 ">
                Cell
              </h2>
              <p className="leading-relaxed " id="pn"></p>
            </div>
          
          <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-full flex flex-col w-full">
          <h2 className=" sm:text-4xl text-3xl mb-1 font-medium title-font">
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
              className="w-full bg-gray-200 rounded border border-gray-700 focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resbluetext"
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
              className="w-full bg-gray-200 rounded border border-gray-700 focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resbluetext"
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
              className="w-full bg-gray-200 rounded border border-gray-700 focus:ring-2 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out resbluetext"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="resyellow border-0 py-2 px-6 focus:outline-none hover:text-red-300 rounded text-xl font-bold">
            Submit
          </button>
        </form>
        
      </div>
    </section>
  );
}