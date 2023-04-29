// import RestaurantDataSource from '../../data/restaurant-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../../views/template/template-creator';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    restaurant,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    // this._likeButtonContainer.insertAdjacentHTML('afterbegin', '<like-button></like-button>');
    // this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    // const likeButton = document.querySelector('#likeButton');
    // likeButton.addEventListener('click', () => {
    //   console.log('Like button');
    // });
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
    // const resturant = await RestaurantDataSource.
  },

  _renderLike() {
    // this._likeButtonContainer.insertAdjacentHTML('afterbegin', createLikeButtonTemplate());
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    // this._likeButtonContainer.innerHTML = '<like-button></like-button>';

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    // this._likeButtonContainer.insertAdjacentHTML('afterbegin', createLikedButtonTemplate());
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

};

export default LikeButtonInitiator;
