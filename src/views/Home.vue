<template>
  <div>
    <fe-search :title="search.title" :sub-title="search.subTitle" :background="search.background"/>
    <div class="media">
      <div class="shadow"/>
      <fe-tabs :title="popular.title" :data="popular.data"/>
      <fe-tabs :title="free.title" :data="free.data"/>
      <fe-tabs :title="tendencies.title" :data="tendencies.data" background/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      search: {
        title: 'Bem-Vindo(a).',
        subTitle: 'Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.',
        background: '9PbtCo5IIkd26WPQfZUpPyn6fTz.jpg',
      },
      popular: {
        title: 'Os Mais Populares',
        data: [],
      },
      free: {
        title: 'Grátis para Assistir',
        data: [],
      },
      tendencies: {
        title: 'Tendências',
        data: [],
      },
    };
  },
  methods: {
    getSearch() {
      this.$axios('movie/popular', this.$env.key).then((response) => {
        const length = response.data.results.length;

        if (length) {
          const min = Math.ceil(0);
          const max = Math.floor(length);
          const rand = Math.floor(Math.random() * (max - min)) + min;
          this.search.background = response.data.results[rand].poster_path;
        }
      }).catch((e) => {
        console.log('erro:', e);
      })
    },
    getPopular() {
      this.$axios('movie/popular', this.$env.key).then((response) => {
        this.popular.data = response.data.results;
      }).catch((e) => {
        console.log('erro:', e);
      })
    },
    getFree() {
      this.$axios('movie/top_rated', this.$env.key).then((response) => {
        this.free.data = response.data.results;
      }).catch((e) => {
        console.log('erro:', e);
      })
    },
    getTendencies() {
      this.$axios('movie/upcoming', this.$env.key).then((response) => {
        this.tendencies.data = response.data.results;
      }).catch((e) => {
        console.log('erro:', e);
      })
    },
  },
  created() {
    this.getSearch();
    this.getPopular();
    this.getFree();
    this.getTendencies();
  },
}
</script>
