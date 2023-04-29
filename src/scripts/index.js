import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
import '../styles/main.scss';

import App from './app';
import swRegister from './utils/sw-register';
// import CONFIG from './globals/config';

// const app = new App(componentShell);
const app = new App({
  button: document.querySelector('.hamburger'),
  closeBtn: document.querySelector('.offcanvas__btn--close'),
  drawer: document.querySelector('.offcanvas'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
