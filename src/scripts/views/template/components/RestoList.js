/* eslint-disable no-underscore-dangle */
import './RestoItem';

class RestoList extends HTMLElement {
  set restaurants(restaurant) {
    this._restaurants = restaurant;
    this.render();
  }

  render() {
    const restaurantData = this._restaurants;

    this.innerHTML = `
      <div class="explore-section__grid">
        
      </div>
    `;

    const exploreSectionGrid = document.querySelector('.explore-section__grid');

    restaurantData.forEach((restaurant) => {
      const restoItemElement = document.createElement('restaurant-item');
      restoItemElement.restaurant = restaurant;
      exploreSectionGrid.appendChild(restoItemElement);
    });
  }
}

customElements.define('restaurant-list', RestoList);
