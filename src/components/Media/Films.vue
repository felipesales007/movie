<template>
  <div class="fe-scroll-films">
    <div class="header">
      <div class="title">Os Mais Populares</div>
    </div>
    <div class="scroll">
      <div class="content mt-3">
        <fe-card-films/>
      </div>
    </div>
  </div>
</template>

<script>
import FeCardFilms from '@/components/Cards/Film'
export default {
  name: 'fe-scroll-films',
  components: { FeCardFilms },
  props: {
    title: {
      type: String,
      description: 'Título'
    },
  },
}
</script>

<style>
.fe-scroll-films {
  margin: 29px 40px;
}

.fe-scroll-films .title {
  font-size: 24px;
  font-weight: 600;
}
</style>
