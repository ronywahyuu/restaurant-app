// import '../../components/ReviewList';
// import '../../components/ReviewForm';

import axios from 'axios';
import API_ENDPOINT from '../../globals/api-endpoint';

const ReviewInitiator = {
  async init({
    reviewContainer,
    reviewFormContainer,
    reviewsData,
  }) {
    this._reviewContainer = reviewContainer;
    this._reviewFormContainer = reviewFormContainer;
    this._reviewsData = reviewsData;

    await this._renderReviewElement();
  },

  async _renderReviewElement() {
    const reviewListElement = document.querySelector('review-list');
    const reviewFormElement = document.createElement('review-form');
    this._reviewFormContainer.appendChild(reviewFormElement);
    const reviewForm = document.querySelector('review-form');
    const id = window.location.href.split('/')[5];
    const onReviewSubmit = async () => {
      const reviewData = {
        id,
        ...reviewForm.value,
      };
      try {
        const res = await axios.post(API_ENDPOINT.CREATE_REVIEW, reviewData);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      // this._reviewsData.push(reviewData);
      // await this._renderReviewElement();
    };

    reviewForm.createReview = onReviewSubmit;
    reviewListElement.reviews = this._reviewsData;
    // this._reviewContainer.insert
  },
};

export default ReviewInitiator;
