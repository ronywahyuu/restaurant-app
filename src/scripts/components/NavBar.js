class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class=''>
        <div>
          <img src="public/images/logo.png" alt="logo" />
          <h1 class='title'>Hello</h1>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
