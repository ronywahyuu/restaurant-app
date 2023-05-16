import LikeButtonPresenter from "../src/scripts/utils/ui-initiator/like-button-presenter";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurants-idb";
import TestFactories from "./helpers/testFactories";
describe("Unliking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="btnContainer"></div>';
  }

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({id: 1});
  } );

  // ======== Positive Cases ========
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})
    expect(document.querySelector('#likedButton')).toBeTruthy();
  })

  
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})
    document.querySelector('#likedButton').dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  })
  

  // ======== Negative Cases ========
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})
    expect(document.querySelector('#likeButton')).toBeFalsy();
  })
  
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1})
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('#likedButton').dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  })
});
