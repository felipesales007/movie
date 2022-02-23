import Navbar from './Layouts/Navbar.vue'
import Search from './Layouts/Search.vue'

export default {
  install(Vue) {
    [
      Navbar,
      Search,
    ].forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};
