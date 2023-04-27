class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set createReview(event) {
    this._event = event;
    this.render();
  }

  get value() {
    const name = this.querySelector('#name').value;
    const review = this.querySelector('#review').value;
    return { name, review };
  }

  render() {
    this.innerHTML = `
      <h3>Write your review</h3>
      <form id="formCreate">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div class="form-group">
          <label for="review">Review</label>
          <textarea id="review" name="review" placeholder="Your review"></textarea>
        </div>
        <button type="submit" class="btn btn--primary">Submit</button>
      </form>
    `;
    this.querySelector('#formCreate').addEventListener('submit', this._event);
  }
}

customElements.define('review-form', ReviewForm);
