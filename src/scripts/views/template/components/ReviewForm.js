class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set createReview(event) {
    // empty after submit
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
      <hr/>
      <form id="formCreate">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div class="form-group">
          <label for="review">Review</label>
          <textarea id="review" name="review" placeholder="Your review" required></textarea>
        </div>
        <button type="submit" class="btn btn--primary btn-disabled">Submit</button>
      </form>
    `;
    this.querySelector('#formCreate').addEventListener('submit', (event) => {
      event.preventDefault();
      // empty after submit
      this._event();
      this.querySelector('#name').value = '';
      this.querySelector('#review').value = '';
      window.location.reload();
    });
  }
}

customElements.define('review-form', ReviewForm);
