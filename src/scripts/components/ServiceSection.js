class ServiceSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <section id="serviceSection" class="service container">
        <div class="service__text">
          <h2 class="service__heading">Eat From the Best Chef in Your Town</h2>
          <p class="service__desc">
            Our platform offers a diverse range of cuisines and experiences, all
            crafted by expert chefs.
          </p>
        </div>
        <div class="service__img">
          <img src="./images/heros/hero-image_1.jpg" alt="second hero image" />
        </div>
        <div class="service__img__box"></div>
      </section>
    `;
  }
}

customElements.define('service-section', ServiceSection);
