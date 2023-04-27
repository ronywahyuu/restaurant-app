import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  GET_IMAGE: (id) => `${CONFIG.BASE_URL}/${CONFIG.MEDIUM_IMAGE}/${id}`,
  CREATE_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
