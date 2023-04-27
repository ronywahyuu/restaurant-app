import axios from 'axios';
import API_ENDPOINT from './globals/api-endpoint';

function formatDescription(description, limit = 100) {
  if (description.length > limit) {
    return `${description.substr(0, limit)}...`;
  }
  return description;
}

function ratingColor(rating) {
  if (rating >= 4) {
    return 'rating--high';
  } if (rating >= 3.5) {
    return 'rating--medium';
  }
  return 'rating--low';
}

async function getRestaurantImage(id) {
  const res = await axios.get(API_ENDPOINT.GET_IMAGE(id));
  return res.data;
}

function unformatDescription(description) {
  return description.replace('...', '');
}
export {
  formatDescription,
  ratingColor,
  getRestaurantImage,
  unformatDescription,
};
