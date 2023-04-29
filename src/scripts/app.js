// import './components/RestoList';
// import './components/HeroSection';
// import './components/ServiceSection';
// import './components/ExploreSection';

import './views/template/components/RestoList';
import './views/template/components/HeroSection';
import './views/template/components/ServiceSection';
import './views/template/components/ExploreSection';
import './views/template/components/RestoDetail';
import './views/template/components/ErrorMessage';
// import data from '../DATA.json';
// import DicodingRestaurantSource from './data/dicoding-restaurant-source';
import UrlParser from './routes/url-parser';
import routes from './routes/routes';
import DrawerInitiator from './utils/ui-initiator/drawer-initiator';

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
      navLink: document.querySelectorAll('.offcanvas-list'),
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
