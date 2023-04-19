class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section
        id="heroSection"
        class="jumbotron"
        style="
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url('./images/heros/hero-image_4.jpg');
        "
      >
        <div class="jumbotron__content">
          <h1 class="jumbotron__title">
            Find Your Next Favorite Restaurant with Our Curated List
          </h1>
          <p class="jumbotron__desc">
            With our curated list of local gems and fine dining establishments,
            you'll never settle for mediocre meals again.
          </p>
          <a href="#exploreSection" class="jumbotron__button">Explore Now</a>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
