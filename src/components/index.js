import Navbar from './Layouts/Navbar.vue'

export default {
  install(Vue) {
    [
      Navbar,
    ].forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};
