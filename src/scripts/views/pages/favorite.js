// import '../../components/RestoList';
import '../template/components/RestoList';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import { createEmptyStateTemplate } from '../template/template-creator';

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

    // ==================== EMPTY STATE ====================
    if (restaurants.length === 0) {
      // hide favorite container
      favoriteContainer.style.display = 'none';
      emptyStateContainer.innerHTML = createEmptyStateTemplate();
    }

    // ==================== RESTAURANT ITEM ====================
    restaurants.forEach((restaurant) => {
      const restoItemElement = document.createElement('restaurant-item');
      emptyStateContainer.style.display = 'none';
      // favoriteContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      restoItemElement.restaurant = restaurant;
      favoriteContainer.appendChild(restoItemElement);
      // favoriteContainer.innerHTML +=
    });
  },
};

export default Favorite;
