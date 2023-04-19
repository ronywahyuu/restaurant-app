// import RestaurantDataSource from '../../data/restaurant-source';
import '../../components/LikeButton';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    await this._renderButton();
  },

  async _renderButton() {
    this._likeButtonContainer.insertAdjacentHTML('afterbegin', '<like-button></like-button>');

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', () => {
      console.log('Like button');
    });
  },

  async _isRestaurantExist(id) {
    // const resturant = await RestaurantDataSource.
  },

};

export default LikeButtonInitiator;
