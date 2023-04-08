import * as helper from '../helpers';

class RestoItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      name, description, pictureId, city, rating,
    } = this._restaurant;

    this.innerHTML = `
        <div class="card">
          <div class="card__img">
            <img
              src=${pictureId}
              alt="image of ${name} restaurant"
            />
          </div>
          <div class="card__text">
            <div class="name__rating">
              <h3 class="heading">${name}</h3>
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
            <span class="location">${city}</span>
          </div>
        </div>
    `;
  }
}

customElements.define('restaurant-item', RestoItem);
