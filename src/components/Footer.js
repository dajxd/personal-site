import React from "react";

export default function Footer() {
    return (
        <footer className="resyellow bottom-0 mt-10 py-5">
            <div className="pb-10 pt-0 w-auto">
                <a
                    href="#top"
                    className="border-0 py-2 px-6 mx-10 focus:outline-none hover:bg-blue-500 focus:bg-blue-500 rounded text-base resblue float-left font-bold">
                    To the top!
                </a>
                <a
                    href="http://www.davesstudents.com"
                    className="border-0 py-2 px-6 mx-10 focus:outline-none hover:bg-blue-500 focus:bg-blue-500 rounded text-base  resblue float-right font-bold">
                    Students
                </a>
            </div>

        </footer>
    );
}