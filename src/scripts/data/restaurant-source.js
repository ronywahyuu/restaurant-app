import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async listRestaurants() {
    // const res = await axios.get(API_ENDPOINT.LIST);
    const res = await axios(API_ENDPOINT.LIST);
    return res;
    // return resJson;
  }

  static async getImageById(id) {
    const res = await axios.get(API_ENDPOINT.GET_IMAGE(id));
    return res.data;
  }

  static async detailRestaurant(id) {
    // const res = await axios.get(API_ENDPOINT.DETAIL(id), {
    //   headers: {
    //     cache: 'no-cache',
    //   },
    // });
    // return res;
    const res = await fetch(API_ENDPOINT.DETAIL(id), {
      method: 'GET',
      cache: 'no-cache',
    });
    const resJson = await res.json();
    return resJson;
  }

  static async createReview(id, name, review) {
    const res = await axios.post(API_ENDPOINT.POST_REVIEW, {
      id,
      name,
      review,
    }, {
      headers: {
        'Cache-control': 'no-cache',
      },
    });
    return res;
  }
}

export default RestaurantDataSource;
