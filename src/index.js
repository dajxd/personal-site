import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.addEventListener('scroll', () => {  
  const metasite = document.querySelector('.metasite');
  let amount = Math.floor(window.pageYOffset/10) - 555;
  metasite.style.cssText = 'background-position-y: bottom '+amount.toString()+("px;")
});
window.onload = function () {
  let p = document.getElementById('pn');
  p.innerHTML='315.272.7171';
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
