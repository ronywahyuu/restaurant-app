import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurants-idb";
import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
})