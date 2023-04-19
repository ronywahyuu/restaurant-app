// import '../../components/ReviewList';

const ReviewInitiator = {
  async init({
    reviewContainer,
    reviewsData,
  }) {
    this._reviewContainer = reviewContainer;
    this._reviewsData = reviewsData;
    await this._renderReviewElement();
  },

  async _renderReviewElement() {
    const reviewListElement = document.querySelector('review-list');
    reviewListElement.reviews = this._reviewsData;
    // this._reviewContainer.insert
  },
};

export default ReviewInitiator;
