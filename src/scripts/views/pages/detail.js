// ==================== DATA SOURCE ====================
import RestaurantDataSource from '../../data/restaurant-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';

// ==================== UI INITIATOR ====================
// import LikeButtonInitiator from '../../utils/ui-initiator/like-button-initiator';
import LikeButtonPresenter from '../../utils/ui-initiator/like-button-presenter';
import ReviewInitiator from '../../utils/ui-initiator/review-initiator';
import MenuListInitiator from '../../utils/ui-initiator/menu-list-initiator';
import CategoriesInitiator from '../../utils/ui-initiator/categories-initiator';

// ==================== COMPONENTS ====================
// import '../../components/RestoList';
// import '../../components/ReviewForm';
import '../template/components/RestoList';
import '../template/components/RestoDetail';
import '../template/components/ReviewForm';
import '../template/components/ErrorMessage';

// ==================== HELPERS ====================
import UrlParser from '../../routes/url-parser';
import { createLoadingAnimation } from '../template/template-creator';

const Detail = {
  async render() {
    return `
      <div id="detailPage" class="detail">
      </div>
    `;
  },

  async afterRender() {
    const restoDetail = document.createElement('restaurant-detail');
    const restaurantContainer = document.querySelector('#detailPage');
    // restoDetail.renderLoading();
    restaurantContainer.innerHTML = createLoadingAnimation();
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurantData = await RestaurantDataSource.detailRestaurant(url.id);
      // const { restaurant } = restaurantData.data;
      const { restaurant } = restaurantData;
      const { customerReviews, menus } = restaurant;

      // restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      if (restaurant) {
        restaurantContainer.innerHTML = '';
        restoDetail.restaurant = restaurant;
        restaurantContainer.appendChild(restoDetail);
      }

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#btnContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          description: restaurant.description,
          city: restaurant.city,
          address: restaurant.address,
        },
      });

      ReviewInitiator.init({
        reviewContainer: document.querySelector('review-list'),
        reviewFormContainer: document.querySelector('.review-form'),
        reviewsData: customerReviews,
      });

      MenuListInitiator.init({
        menuContainer: document.querySelector('menu-list'),
        menuData: menus,
      });

      CategoriesInitiator.init({
        categoriesContainer: document.querySelector('.categories'),
        categories: restaurant.categories,
      });
    } catch (error) {
      restaurantContainer.innerHTML = '';
      restaurantContainer.innerHTML = '<error-message></error-message>';
      console.log(error);
    }
  },
};

export default Detail;
