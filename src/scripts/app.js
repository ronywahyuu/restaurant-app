import './components/NavBar';
import './components/RestoList';
import './components/HeroSection';
import './components/ServiceSection';
import './components/ExploreSection';

// import data from '../DATA.json';
// import DicodingRestaurantSource from './data/dicoding-restaurant-source';
import UrlParser from './routes/url-parser';
import routes from './routes/routes';
import DrawerInitiator from './utils/ui-initiator/drawer-initiator';

// import DrawerInitiator from './utils/drawer-initiator';
// ---------- udah bener ----------
//
// export default function App() {
//   // offcanvas
//   const offcanvasElement = document.querySelector('.offcanvas');
//   const hamburgerElement = document.querySelector('.hamburger');

//   hamburgerElement.addEventListener('click', () => {
//     const closeBtn = document.querySelector('.offcanvas__btn--close');
//     const ulElement = document.querySelectorAll('.offcanvas__list');
//     offcanvasElement.classList.add('offcanvas--active');

//     closeBtn.addEventListener('click', () => {
//       offcanvasElement.classList.remove('offcanvas--active');
//     });

//     ulElement.forEach((ul) => {
//       ul.addEventListener('click', () => {
//         offcanvasElement.classList.remove('offcanvas--active');
//       });
//     });
//   });
//   const restaurantData = data.restaurants;

//   const mapRestoData = restaurantData.map((restaurant) => restaurant);

//   const restaurantListElement = document.querySelector('restaurant-list');

//   // restaurantListElement.restaurants(mapRestoData);
//   const renderResult = (results) => {
//     restaurantListElement.restaurants = results;
//   };

//   renderResult(mapRestoData);
// }

// ---------- uji coba ----------

class App {
  constructor({
    button, closeBtn, drawer,
  }) {
    this._button = button;
    this._closeBtn = closeBtn;
    this._drawer = drawer;

    this._mainElement = document.querySelector('#mainContent');
    // this.renderPage();

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      closeBtn: this._closeBtn,
      drawer: this._drawer,
      navClose: document.querySelector('.offcanvas-list'),
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._mainElement.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
