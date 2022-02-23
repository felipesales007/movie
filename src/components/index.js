import Navbar from './Layouts/Navbar.vue'
import Search from './Layouts/Search.vue'
import CardFilms from './Cards/Film.vue'
import ScrollFilms from './Media/Films.vue'

export default {
  install(Vue) {
    [
      Navbar,
      Search,
      CardFilms,
      ScrollFilms,
    ].forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};
