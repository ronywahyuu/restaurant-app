import RestaurantDataSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/ui-initiator/like-button-initiator';
import ReviewInitiator from '../../utils/ui-initiator/review-initiator';
import { createRestaurantDetailTemplate } from '../template/template-creator';
import '../../components/RestoList';
import MenuListInitiator from '../../utils/ui-initiator/menu-list-initiator';
import CategoriesInitiator from '../../utils/ui-initiator/categories-initiator';
import '../../components/ReviewForm';

const Detail = {
  async render() {
    return `
      <div id="detailPage" class="detail">
       
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#detailPage');
    // const reviewForm = document.querySelector('review-form');
    const restaurantData = await RestaurantDataSource.detailRestaurant(url.id);
    const { restaurant } = restaurantData.data;
    const { customerReviews, menus } = restaurant;
    // reviewContainer.innerHTML = '<review-form></review-form>';
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    // console.log(url);
    const readMoreBtn = document.querySelector('.read-more');
    console.log('🚀 ~ file: detail.js:31 ~ afterRender ~ readMoreBtn:', readMoreBtn);

    // readMoreBtn.addEventListener('click', () => {

    // });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#btnContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
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
  },
};

export default Detail;
