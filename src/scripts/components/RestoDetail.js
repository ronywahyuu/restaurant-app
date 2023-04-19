import CONFIG from "../globals/config";

class RestoDetail extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    const { name, pictureId, city, address, rating, description } = this._resto;
    const image = `${CONFIG.BASE_URL}/${CONFIG.LARGE_IMAGE}/${pictureId}`;
    this.innerHTML = `
      <h2>${this._resto.name}</h2>
      <img src="${image}" alt="${this._resto.name}">
      <div class="resto__info">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${this._resto.city}</p>
        <h4>Address</h4>
        <p>${this._resto.address}</p>
        <h4>Rating</h4>
        <p>${this._resto.rating}</p>
      </div>
      <div class="resto__description">
        <h3>Description</h3>
        <p>${this._resto.description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestoDetail);
