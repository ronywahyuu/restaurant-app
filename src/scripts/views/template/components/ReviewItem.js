class ReviewItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    const reviewData = this._review;
    const { name, review, date } = reviewData;
    // console.log(this._review);
    this.innerHTML = `
      <div class="review-item">
        <h4 class="review-item__name">${name}</h4>
        <p class="review-item__date">${date}</p>
        <p class="review-item-content">
          ${review}
        </p>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
