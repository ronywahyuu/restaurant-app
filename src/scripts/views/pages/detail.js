import RestaurantDataSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/ui-initiator/like-button-initiator';
import ReviewInitiator from '../../utils/ui-initiator/review-initiator';
import { createRestaurantDetailTemplate } from '../template/template-creator';
import '../../components/RestoList';
import MenuListInitiator from '../../utils/ui-initiator/menu-list-initiator';

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
    const restaurantData = await RestaurantDataSource.detailRestaurant(url.id);
    const { restaurant } = restaurantData.data;
    console.log("🚀 ~ file: detail.js:22 ~ afterRender ~ restaurant:", restaurant)
    const { customerReviews, menus } = restaurant;
    // console.log('🚀 ~ file: detail.js:22 ~ afterRender ~ menus:', menus);
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.detail__info.info-box'),
    });

    ReviewInitiator.init({
      reviewContainer: document.querySelector('review-list'),
      reviewsData: customerReviews,
    });

    MenuListInitiator.init({
      menuContainer: document.querySelector('menu-list'),
      menuData: menus,
    });
  },
};

export default Detail;
