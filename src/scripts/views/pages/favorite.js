import '../../components/RestoList';

const Favorite = {
  async render() {
    return `
      <div id="favoritePage">
        <h1>Favorite</h1>
        <restaurant-list></restaurant-list>
      </div>
    `;
  },

  async afterRender() {

  },
};

export default Favorite;
