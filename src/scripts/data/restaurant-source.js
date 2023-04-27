import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async listRestaurants() {
    const res = await axios.get(API_ENDPOINT.LIST);
    return res;
  }

  static async getImageById(id) {
    const res = await axios.get(API_ENDPOINT.GET_IMAGE(id));
    return res.data;
  }

  static async detailRestaurant(id) {
    const res = await axios.get(API_ENDPOINT.DETAIL(id));
    return res;
  }

  static async createReview(id, name, review) {
    const res = await axios.post(API_ENDPOINT.POST_REVIEW, {
      id,
      name,
      review,
    });
    return res;
  }
}

export default RestaurantDataSource;
