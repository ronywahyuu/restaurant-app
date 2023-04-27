import '../../components/RestoList';
import * as helper from '../../helpers';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import { createRestaurantItemTemplate, createEmptyStateTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
      <div id="favoritePage">
        <h1>Favorite</h1>
        <div class="restaurant-item">
          <div class="explore-section__grid favorite-container"></div>
          <div class="empty-state-container"></div>
        </div>
      </div>
        
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const favoriteContainer = document.querySelector('.favorite-container');
    const emptyStateContainer = document.querySelector('.empty-state-container');
    if (restaurants.length === 0) {
      // hide favorite container
      favoriteContainer.style.display = 'none';

      emptyStateContainer.innerHTML = createEmptyStateTemplate();
    }
    restaurants.forEach((restaurant) => {
      emptyStateContainer.style.display = 'none';
      favoriteContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    console.log('🚀 ~ file: favorite.js:56 ~ afterRender ~ restaurants:', restaurants);
    // const favoriteContainer = document.querySelector('#favoritePage');
    // const favoriteData = await helper
  },
};

export default Favorite;
