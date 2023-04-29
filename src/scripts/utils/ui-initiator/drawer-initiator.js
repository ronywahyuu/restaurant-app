const DrawerInitiator = {
  init({
    button,
    closeBtn,
    drawer,
    navLink,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    closeBtn.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    navLink.forEach((link) => {
      link.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('offcanvas--active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('offcanvas--active');
  },

};

export default DrawerInitiator;
