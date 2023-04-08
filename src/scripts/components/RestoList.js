/* eslint-disable no-underscore-dangle */
import './RestoItem';

class RestoList extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  // set restaurants(restaurant) {
  //   // eslint-disable-next-line no-underscore-dangle
  //   this._restaurants = restaurant;
  //   this.render();
  // }

  set restaurants(restaurant) {
    this._restaurants = restaurant;
    this.render();
  }

  render() {
    // console.log(this._restaurants);
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
