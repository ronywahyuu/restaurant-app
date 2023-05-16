import axios from 'axios';
import API_ENDPOINT from '../../globals/api-endpoint';
import { isEmptyOrSpaces } from '../helpers';
import { createToastTemplate } from '../../views/template/template-creator';

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

    // const onReviewSubmit = import('../submit-customer-review');
    const onReviewSubmit = async () => {
      try {
        if (isEmptyOrSpaces(reviewForm.value.name) || isEmptyOrSpaces(reviewForm.value.review)) {
          reviewFormElement._showToast(createToastTemplate('Please fill all the fields!', 'error'));
          return;
        }

        const res = await axios.post(API_ENDPOINT.CREATE_REVIEW, {
          id,
          ...reviewForm.value,
        });

        if (res.status === 201) {
          this._reviewsData.push({
            ...res.data.customerReviews[res.data.customerReviews.length - 1],
          });
          reviewListElement.reviews = this._reviewsData;
          reviewFormElement._showToast(createToastTemplate('Review sent!', 'success'));

          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }
      } catch (error) {
        reviewFormElement._showToast(createToastTemplate('Failed to submit review!', 'error'));
        console.log(error);
      }
    };

    reviewForm.createReview = onReviewSubmit;
    reviewListElement.reviews = this._reviewsData;
  },
};

export default ReviewInitiator;
