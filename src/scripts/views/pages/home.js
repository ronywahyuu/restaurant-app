import RestaurantDataSource from '../../data/restaurant-source';
// import '../../components/HeroSection';
import '../template/components/HeroSection';
import { createLoadingAnimation } from '../template/template-creator';

// import data from '../../../DATA.json';

const Home = {
  async render() {
    return `
      <div class="content">
        <hero-section></hero-section>
        <service-section></service-section>
        <explore-section></explore-section>
      </div>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    const errorElement = document.createElement('error-message');
    // const exploreSection = document.querySelector('explore-section');
    restaurantListElement.innerHTML = createLoadingAnimation();
    try {
      const restaurantData = await RestaurantDataSource.listRestaurants();
      const { restaurants } = restaurantData.data;
      restaurantListElement.restaurants = restaurants;
    } catch (error) {
      // this.renderError(error);
      restaurantListElement.innerHTML = '';
      restaurantListElement.appendChild(errorElement);
      console.log(error);
    }
  },
};

export default Home;
