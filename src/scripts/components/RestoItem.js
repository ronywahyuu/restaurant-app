import CONFIG from '../globals/config';
import * as helper from '../helpers';

class RestoItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      id, name, description, pictureId, city, rating,
    } = this._restaurant;
    const image = `${CONFIG.BASE_URL}/${CONFIG.LARGE_IMAGE}/${pictureId}`;
    this.innerHTML = `
        <div class="card" tabindex="0">
          <div class="card__img">
            <img
              src=${image}
              alt="image of ${name} restaurant"
            />
          </div>
          <div class="card__text">
            <div class="name__rating">
              <a href="#/detail/${id}">
                <h3 class="heading">
                  ${name}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>

                </h3>
              </a>
              <span class="rating ${helper.ratingColor(
    rating,
  )}">${rating}</span>
            </div>
            <p class="desc">
              ${helper.formatDescription(description)}

              <span class="tooltip">
                ${description}
              </span>
            </p>
            <span class="location">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>  
              ${city}
            </span>
          </div>
        </div>
    `;
  }
}

customElements.define('restaurant-item', RestoItem);
