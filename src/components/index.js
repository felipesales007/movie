import Navbar from './Layouts/Navbar.vue'
import Footer from './Layouts/Footer.vue'
import Search from './Layouts/Search.vue'
import CardFilms from './Cards/Film.vue'
import Tabs from './Others/Tabs.vue'
import Banner from './Others/Banner.vue'

export default {
  install(Vue) {
    [
      Navbar,
      Footer,
      Search,
      CardFilms,
      Tabs,
      Banner,
    ].forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};
