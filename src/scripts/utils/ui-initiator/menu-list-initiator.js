const MenuListInitiator = {
  async init({
    menuContainer,
    menuData,
  }) {
    this._menuContainer = menuContainer;
    this._menuData = menuData;
    await this._renderMenuElement();
  },

  async _renderMenuElement() {
    const menuList = document.querySelector('menu-list');
    const { foods, drinks } = this._menuData;

    menuList.foods = foods;
    menuList.food = true;

    menuList.drinks = drinks;
    menuList.drink = true;
    // menuListElement.menus = this._menuData;
  },
};

export default MenuListInitiator;
