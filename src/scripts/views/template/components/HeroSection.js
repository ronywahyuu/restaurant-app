class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        picture img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: -1;
          /* filter */
          filter: brightness(0.5);
        }
      </style>
      <section
        id="heroSection"
        class="jumbotron"
      >
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">      
        <source media="(max-width: 900px)" srcset="./images/heros/hero-image_4-large.jpg">
        <img src="./images/heros/hero-image_4-large.jpg" alt="Hero Image" class="jumbotron__image">
      </picture>
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
