import axios from 'axios';
import API_ENDPOINT from '../../globals/api-endpoint';
import { isEmptyOrSpaces } from '../helpers';

const ReviewInitiator = {
  async init({ reviewContainer, reviewFormContainer, reviewsData }) {
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
      try {
        if (isEmptyOrSpaces(reviewForm.value.name) || isEmptyOrSpaces(reviewForm.value.review)) {
          alert('Please fill all the form');
          return;
        }

        const res = await axios.post(API_ENDPOINT.CREATE_REVIEW, {
          id,
          ...reviewForm.value,
        });

        if (res.status === 201) {
          this._reviewsData.push({
            // ...reviewForm.value
            ...res.data.customerReviews[res.data.customerReviews.length - 1],
          });
          reviewListElement.reviews = this._reviewsData;
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }
      } catch (error) {
        alert('Failed to submit review');
        console.log(error);
      }
    };

    reviewForm.createReview = onReviewSubmit;
    reviewListElement.reviews = this._reviewsData;
    // this._reviewContainer.insert
  },
};

export default ReviewInitiator;
