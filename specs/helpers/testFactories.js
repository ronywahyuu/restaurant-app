import LikeButtonPresenter from "../../src/scripts/utils/ui-initiator/like-button-presenter";
import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurants-idb";

const TestFactories = {
  createLikeButtonPresenterWithRestaurant: async (restaurant) => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById("btnContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });
  }
}

export default TestFactories
// export default createLikeButtonPresenter