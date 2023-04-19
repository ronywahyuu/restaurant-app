import CONFIG from '../../globals/config';
import { formatDescription } from '../../helpers';
import '../../components/ReviewList';
import '../../components/ReviewForm';
import '../../components/MenuList';


const createRestaurantItemTemplate = (restaurant) => ` 
  <div class="restaurant-item">

  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h1>Details</h1>
  <div class="detail__content">
    <div class="detail__image image-box">
      <img src="${`${CONFIG.BASE_URL}/${CONFIG.LARGE_IMAGE}/${restaurant.pictureId}`}" alt="Restaurant Image" />
      <div class="detail__categories">
        <h4>Categories</h4>
        <div>
          <span class="detail__category">Jawa</span>
          <span class="detail__category">Indonesia</span>
        </div>
      </div>
    </div>
    <div class="detail__info info-box">
     
      <h2 class="restaurant-title">${restaurant.name}</h2>
      <p class="restaurant-address">${restaurant.address}</p>

      <div class="detail__rating">
        <div class="rating">
          <i class="fa fa-star" aria-hidden="true"></i>
          <p class="detail__rating__score">${restaurant.rating}</p>
        </div>
        <div class="break">•</div>
        <div class="review-count">
          ${restaurant.customerReviews.length} Reviews
        </div>
        <div class="break">•</div>
        <div class="city">
          ${restaurant.city}
        </div>
      </div>

      <div class="detail__description">
        <h3>Description</h3>
        <p>
          ${formatDescription(restaurant.description, 500)}
        </p>
      </div>

      <div class="detail__menu foods-menu">
        <h3>Food Menu</h3>
        <menu-list foodss></menu-list>
      </div>

      <div class="detail__menu drinks-menu">
        <h3>Drinks Menu</h3>
        <menu-list ></menu-list>
      </div>
    </div>


    <div class="detail__review review-box">
      <div class="review-form">
        <h3>Write your review</h3>
        <review-form></review-form>
      </div>
      <div class="all-review">
        <h3>All Reviews</h3>
        <review-list></review-list>
      </div>
    </div>

  </div>

`;
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
