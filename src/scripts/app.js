import './components/NavBar';
import './components/RestoList';
import data from '../DATA.json';

export default function App() {
  // offcanvas
  const offcanvasElement = document.querySelector('.offcanvas');
  const hamburgerElement = document.querySelector('.hamburger');

  hamburgerElement.addEventListener('click', () => {
    const closeBtn = document.querySelector('.offcanvas__btn--close');
    const ulElement = document.querySelectorAll('.offcanvas__list');
    offcanvasElement.classList.add('offcanvas--active');

    closeBtn.addEventListener('click', () => {
      offcanvasElement.classList.remove('offcanvas--active');
    });

    ulElement.forEach((ul) => {
      ul.addEventListener('click', () => {
        offcanvasElement.classList.remove('offcanvas--active');
      });
    });
  });
  const restaurantData = data.restaurants;

  const mapRestoData = restaurantData.map((restaurant) => restaurant);

  const restaurantListElement = document.querySelector('restaurant-list');

  // restaurantListElement.restaurants(mapRestoData);
  const renderResult = (results) => {
    restaurantListElement.restaurants = results;
  };

  renderResult(mapRestoData);
  // showFullText();

  // console.log(renderData);
  // console.log('Hello From App');
}
