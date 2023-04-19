import './MenuItem';

class MenuList extends HTMLElement {
  // connectedCallback() {
  // }

  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  get foods() {
    return this._foods || [];
  }

  set drinks(drinks) {
    this._drinks = drinks;
    this.render();
  }

  get drinks() {
    return this._drinks || [];
  }

  render() {
    const foodsData = this.foods;
    // console.log('🚀 ~ file: MenuList.js:32 ~ MenuList ~ render ~ foodsData:', foodsData);
    const drinksData = this.drinks;
    // console.log('🚀 ~ file: MenuList.js:34 ~ MenuList ~ render ~ drinksData:', drinksData);
    const foodsList = document.querySelector('.foods-menu');
    const drinksList = document.querySelector('.drinks-menu');
    const renderFoodMenu = foodsData.map((food) => `
        <div class="menu-item">
          <h4 class="menu-item__name">${food.name}</h4>
        </div>
      `);

    const renderDrinkMenu = drinksData.map((drink) => `
        <div class="menu-item">
          <h4 class="menu-item__name">${drink.name}</h4>
        </div>
      `);
    this.innerHTML = `
      ${foodsList.innerHTML = `
        <div class="menu__list">
          ${renderFoodMenu.join('')}
        </div>
      `}
      <hr/>
      ${drinksList.innerHTML = `
        <div class="menu__list">
          ${renderDrinkMenu.join('')}
        </div>
      `}
    `;

    // const menuList = document.querySelector('.menu__list');
    // if (foodsData.length > 0) {
    //   const foodsMenu = document.querySelector('.foods-menu');
    //   foodsData.forEach((food) => {
    //     const menuItem = document.createElement('menu-item');
    //     // menuItem.menu = food;
    //     menuItem.setAttribute('name', food.name);
    //     menuItem.setAttribute('type', 'foods');
    //     menuList.insertAdjacentElement('beforeend', menuItem);
    //   });
    // }

    // if (drinksData.length > 0) {
    //   const drinksMenu = document.querySelector('.drinks-menu');
    //   drinksData.forEach((drink) => {
    //     const menuItem = document.createElement('menu-item');
    //     // menuItem.menu = drink;
    //     menuItem.setAttribute('name', drink.name);
    //     menuItem.setAttribute('type', 'drinks');
    //     menuList.insertAdjacentElement('beforeend', menuItem);
    //   });
    // }
  }
}

// export default MenuList;
customElements.define('menu-list', MenuList);
