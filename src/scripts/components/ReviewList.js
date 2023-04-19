import './ReviewItem';

class ReviewList extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  set reviews(review) {
    this._reviews = review;
    this.render();
  }

  render() {
    // console.log(this._reviews);
    const reviewsData = this._reviews;
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
