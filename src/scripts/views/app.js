import './template/components/RestoList';
import './template/components/HeroSection';
import './template/components/ExploreSection';
import './template/components/ErrorMessage';

import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/ui-initiator/drawer-initiator';

class App {
  constructor({
    button, closeBtn, drawer,
  }) {
    this._button = button;
    this._closeBtn = closeBtn;
    this._drawer = drawer;

    this._mainElement = document.querySelector('#mainContent');

    this._initialAppShell();
  }

  async _initialAppShell() {
    // const DrawerInitiator = (await import('../utils/ui-initiator/drawer-initiator')).default;
    DrawerInitiator.init({
      button: this._button,
      closeBtn: this._closeBtn,
      drawer: this._drawer,
      navLink: document.querySelectorAll('.offcanvas-list'),
    });
  }

  async renderPage() {
    // const UrlParser = (await import('../routes/url-parser')).default;
    // const routes = (await import('../routes/routes')).default;
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._mainElement.innerHTML = await page.render();
    await page.afterRender();

    const mainContent = document.querySelector('#mainContent');
    const skipLink = document.querySelector('.skip-to-content-link');
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });
  }
}

export default App;
