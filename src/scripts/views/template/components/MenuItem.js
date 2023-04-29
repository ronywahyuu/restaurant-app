class MenuItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  // set menu(menu) {
  //   this._menu = menu;
  //   this.render();
  // }

  // get menu() {
  //   return this._menu || {};
  // }

  render() {
    // const { name, price } = this.menu;
    const name = this.getAttribute('name');

    this.innerHTML = `
      <div class="menu-item">
        <h4 class="menu-item__name">${name}</h4>
        <!-- <p class="menu-item__price">Rp. 20.000</p> -->
      </div>
    `;
  }
}

customElements.define('menu-item', MenuItem);
