const CategoriesInitiator = {
  init({ categories, categoriesContainer }) {
    this._categories = categories;
    this._categoriesContainer = categoriesContainer;
    this._renderCategories();
  },

  _renderCategories() {
    this._categories.forEach((category) => {
      const categoryElement = document.createElement('span');
      categoryElement.innerHTML = category.name;
      categoryElement.classList.add('detail__category');
      this._categoriesContainer.appendChild(categoryElement);
    });
  },
};

export default CategoriesInitiator;
