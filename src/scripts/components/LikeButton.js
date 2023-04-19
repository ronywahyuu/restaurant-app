class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button class="btn--add-to-fav" id="likeButton">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        <span>
          Add to favorite
        </span>
      </button>
    `;
  }

  async _isRestaurantExist(id){
    // const restaurant = await 
  }
}

customElements.define('like-button', LikeButton);
