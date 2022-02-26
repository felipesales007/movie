<template>
  <div>
    <fe-search/>
    <fe-tabs/>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    get() {
      const url = '3/movie/popular?api_key=361f6506acd5c4f91fad6237a00776eb';
      this.$axios(url).then((response) => {
        console.log(response);
      }).catch((e) => {
        console.log('erro:', e);
      })
    },
  },
  created() {
    this.get();
  },
}
</script>
