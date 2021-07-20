import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.addEventListener('scroll', () => {  
  //sorry sorry sorry I know
  const metasite = document.getElementById('metasite');
  let amount = (Math.floor(window.pageYOffset/10)) * -1;
  metasite.style.backgroundPositionY = amount.toString() + ("px")
});
window.onload = function () {
  //hoping this'll keep the bots away, don't want to do an image and force people to type.
  let p = document.getElementById('pn');
  p.innerHTML='<a href="tel:3152727171">315.272.7171</a>';
  let e = document.getElementById('em');
  e.innerHTML='<a href="mailto:dave@davemcnamara.com">dave@davemcnamara.com</a>'
};

document.addEventListener('touchstart', (evt) => {
  let target = evt.target;
  target.style.opacity = 100;
}, {
  passive: false
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
