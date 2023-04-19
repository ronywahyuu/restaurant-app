import RestaurantDataSource from '../../data/restaurant-source';
import '../../components/HeroSection';
// import data from '../../../DATA.json';

const Home = {
  async render() {
    return `
      <div className="content">
        <hero-section></hero-section>
        <service-section></service-section>
        <explore-section></explore-section>
      </div>
    `;
  },

  async afterRender() {
    const restaurantData = await RestaurantDataSource.listRestaurants();
    const { restaurants } = restaurantData.data;
    // console.log('🚀 ~ file: home.js:17 ~ afterRender ~ restaurants:', restaurants);
    // const mapRestoData = restaurants.map((restaurant) => restaurant);
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurants;
  },
};

export default Home;
