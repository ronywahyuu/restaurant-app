import { formatDescription } from '../../../utils/helpers';
import CONFIG from '../../../globals/config';
import { createLoadingAnimation } from '../template-creator';

class RestoDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  renderLoading() {
    this.innerHTML = createLoadingAnimation();
  }

  render() {
    const restaurant = this._restaurant;
    this.innerHTML = `
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

    this.querySelector('.read-more').addEventListener('click', () => {
      const readMoreBtn = document.querySelector('.read-more');
      const desc = document.querySelector('#description');

      if (desc.innerHTML.length <= 400) {
        desc.innerHTML = restaurant.description;
        readMoreBtn.innerHTML = 'Read Less';
      } else {
        desc.innerHTML = formatDescription(restaurant.description, 300);
        readMoreBtn.innerHTML = 'Read More';
      }
    });
  }
}

customElements.define('restaurant-detail', RestoDetail);
