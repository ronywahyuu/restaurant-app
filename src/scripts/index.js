import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
import '../styles/main.scss';
import './components/NavBar';
import App from './app';
import swRegister from './utils/sw-register';

// document.addEventListener('DOMContentLoaded', App);
// const app = new App({
//   button: document.querySelector('.hamburger'),
//   drawer: document.querySelector('.offcanvas'),
//   content: document.querySelector('#mainContent'),
// });

// const componentShell = [
//   {
//     name: 'Drawer',
//     init: () => {
//       const button = document.querySelector('.hamburger');
//       const drawer = document.querySelector('.offcanvas');
//       const content = document.querySelector('#mainContent');
//       const ulElement = document.querySelectorAll('ul');
//       const offcanvasElement = document.querySelector('.offcanvas');

//       button.addEventListener('click', (event) => {
//         event.stopPropagation();
//         drawer.classList.toggle('offcanvas--active');
//       });

//       content.addEventListener('click', () => {
//         offcanvasElement.classList.remove('offcanvas--active');
//       });

//       ulElement.forEach((ul) => {
//         ul.addEventListener('click', () => {
//           offcanvasElement.classList.remove('offcanvas--active');
//         });
//       });
//     },
//   },
// ];

// const app = new App(componentShell);
const app = new App({
  button: document.querySelector('.hamburger'),
  closeBtn: document.querySelector('.offcanvas__btn--close'),
  drawer: document.querySelector('.offcanvas'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
// console.log('Hello Coders! :)');
