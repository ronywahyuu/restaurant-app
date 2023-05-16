import CONFIG from '../../globals/config';
// import '../../components/ReviewList';
// import '../../components/ReviewForm';
// import '../../components/MenuList';
import './components/ReviewList';
import './components/ReviewForm';
import './components/MenuList';

import * as helper from '../../utils/helpers';
import { formatDescription } from '../../utils/helpers';

const createRestaurantItemTemplate = (restaurant) => ` 
<div class="card" tabindex="0">
  <div class="card__img">
    <img
      src="${`${CONFIG.BASE_URL}/${CONFIG.LARGE_IMAGE}/${restaurant.pictureId}`}"
      alt="image of restaurant"
    />
  </div>
  <div class="card__text">
    <div class="name__rating">
      <a href="#/detail/${restaurant.id}">
        <h3 class="heading">
          ${restaurant.name}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>

        </h3>
      </a>
      <span class="rating ${helper.ratingColor(restaurant.rating)}">${
  restaurant.rating
}</span>
    </div>
    <p class="desc">
      ${helper.formatDescription(restaurant.description)}

      <span class="tooltip">
        ${restaurant.description}
      </span>
    </p>
    <span class="location">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>  
      ${restaurant.city}
    </span>
  </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail__content">
    <div class="detail__image image-box">
      <img src="${`${CONFIG.BASE_URL}/${CONFIG.LARGE_IMAGE}/${restaurant.pictureId}`}" alt="Restaurant Image" />
      <div class="detail__categories">
        <h4>Categories :</h4>
        <div class="categories">
        </div>
      </div>
    </div>
    <div class="detail__info info-box">
      <div id="btnContainer"></div>
     
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
        <p id="description">
          ${formatDescription(restaurant.description, 300)}
        </p>
        <span class="read-more" tabindex="0">Read More</span>
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
      </div>
      <div class="all-review">
        <h3>All Reviews</h3>
        <hr/>
        <review-list></review-list>
      </div>
    </div>

  </div>

`;

const createLikeButtonTemplate = () => `
<button class="btn--add-to-fav" aria-label="like this restaurant" id="likeButton">
  <i class="fa-regular fa-heart" aria-hidden="true"></i>
  <span>
    Add to favorite
  </span>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" class="btn--add-to-fav" id="likedButton">
  <i class="fa-solid fa-heart" aria-hidden="true"></i>
  <span>
    Remove favorite
  </span>
</button>
`;

const createEmptyStateTemplate = () => `
  <div class="empty-state">
    <img src="./images/notfound.svg" width="200" height="200" alt="Empty State" />
    <h3 class="error-message-text">Oops, there is no data yet</h3>
  </div>
`;

const createToastTemplate = (message, type) => `
  <div class="toast ${type === 'error' ? 'toast-error' : 'toast-success'}">
  <span>
  ${
  type === 'error'
    ? '<i class="fa fa-times" aria-hidden="true"></i>'
    : '<i class="fa fa-check" aria-hidden="true"></i>'
}
  </span>
    <p class="toast-message">${message}  </p>
  </div>
`;

const createLoadingAnimation = () => `
  <div class="loading">
    <h3 class="loading__text">Loading...</h3>
    <div class="loading__spinner"></div>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createEmptyStateTemplate,
  createLoadingAnimation,
  createToastTemplate,
};
