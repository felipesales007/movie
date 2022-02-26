<template>
  <div>
    <fe-search/>
    <div class="media">
      <div class="scroll"/>
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
    this.getPopular();
    this.getFree();
    this.getTendencies();
  },
}
</script>
