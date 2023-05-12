/* eslint-disable new-cap */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import App from './views/app';
import swRegister from './utils/sw-register';

// const app = new App({
//   button: document.querySelector('.hamburger'),
//   closeBtn: document.querySelector('.offcanvas__btn--close'),
//   drawer: document.querySelector('.offcanvas'),
// });

const app = async () => {
  const module = await import('./views/app');
  return new module.default({
    button: document.querySelector('.hamburger'),
    closeBtn: document.querySelector('.offcanvas__btn--close'),
    drawer: document.querySelector('.offcanvas'),
  });
};

window.addEventListener('hashchange', async () => {
  // app.renderPage();
  // window.scrollTo(0, 0);

  const myApp = await app();
  myApp.renderPage();
  window.scrollTo(0, 0);
});

window.addEventListener('load', async () => {
  // app.renderPage();
  // swRegister();
  const myApp = await app();
  myApp.renderPage();
  swRegister();
});
