import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let isMobile =
  navigator.userAgent.indexOf("Mobile") !== -1 ||
  navigator.userAgent.indexOf("iPhone") !== -1 ||
  navigator.userAgent.indexOf("Android") !== -1 ||
  navigator.userAgent.indexOf("Windows Phone") !== -1;
let adjustment = 0;
// if (isMobile) {
//     //An attempt to get the minipage at about the same position as the reader. Not needed when the onload stuff is commented out!
//     adjustment = 2300;

// }
window.addEventListener("scroll", () => {
  //sorry sorry sorry I know
  const metasite = document.getElementById("metasite");
  let amount = Math.floor(window.pageYOffset / 10) * -1;
  amount = amount - adjustment;
  metasite.style.backgroundPositionY = amount.toString() + "px";
});
window.onload = function () {
  // if (isMobile) {                                      // getting rid of this until I get a better mobile screen grab.
  //     const metasite = document.getElementById('metasite');
  //     metasite.style.backgroundImage = "url('./metasitemobile.png')";
  // }
  //hoping this'll keep the bots away, didn't want to do an image and force people to type.
  let p = document.getElementById("pn");
  p.innerHTML =
    '<a class="hover:text-blue-500 focus:text-blue-500" href="tel:3152727171">315.272.7171</a>';
  let e = document.getElementById("em");
  e.innerHTML =
    '<a class="hover:text-blue-500 focus:text-blue-500" href="mailto:dave@davemcnamara.com">dave@davemcnamara.com</a>';
  // be good
  const begood = document.createComment(
    "going through my medicine cabinet, huh?"
  );
  document.prepend(begood);
};

//Better "mouseover" event on mobile
document.addEventListener(
  "touchstart",
  (evt) => {
    let target = evt.target;
    target.style.opacity = 100;
  },
  {
    passive: false,
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
