import './ReviewItem';

class ReviewList extends HTMLElement {
  set reviews(review) {
    this._reviews = review;
    this.render();
  }

  render() {
    // console.log(this._reviews);
    const reviewsData = this._reviews;
    // console.log("🚀 ~ file: ReviewList.js:16 ~ ReviewList ~ render ~ reviewsData:", reviewsData)
    this.innerHTML = `
      <div class="review-list">
      </div>
    `;

    const reviewContainer = document.querySelector('.review-list');
    reviewsData.forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.review = review;
      reviewContainer.appendChild(reviewItem);
    });
  }
}

customElements.define('review-list', ReviewList);
