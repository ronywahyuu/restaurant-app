const HeroInitiator = {
  init({ hero, heroTitle, heroSubtitle }) {
    this._hero = hero;
    this._heroTitle = heroTitle;
    this._heroSubtitle = heroSubtitle;
    // this._animateHero();
  },

  _renderHero() {
    this._heroTitle.innerHTML = 'Find Your Next Favorite Restaurant with Our Curated List';
    this._heroSubtitle.innerHTML = "With our curated list of local gems and fine dining establishments, you'll never settle for mediocre meals again.";
  },

};

export default HeroInitiator;
