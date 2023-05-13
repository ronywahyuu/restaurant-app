// const {
//   FavoriteRestaurantIdb,
// } = require("../src/scripts/data/favorite-restaurants-idb");
// const {
//   default: LikeButtonPresenter,
// } = require("../src/scripts/utils/ui-initiator/like-button-presenter");
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurants-idb";
import LikeButtonPresenter from "../src/scripts/utils/ui-initiator/like-button-presenter";
import TestFactories from "./helpers/testFactories";

describe("Liking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="btnContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  //  ======== Positive Cases ========
  it("should show the like button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector("#likeButton")).toBeTruthy();
  });

  it("should be able to like the restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });


  //  ======== Negative Cases ========
  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    // await LikeButtonPresenter.init({
    //   likeButtonContainer: document.getElementById("btnContainer"),
    //   restaurant: {
    //     id: 1,
    //   },
    // });
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it("should not add a restaurant again  when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

});

// describe('Unliking A Restaurant', () => {});