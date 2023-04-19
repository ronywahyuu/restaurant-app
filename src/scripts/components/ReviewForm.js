class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <form>
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
  }
}

customElements.define('review-form', ReviewForm);
