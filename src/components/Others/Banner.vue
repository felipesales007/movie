<template>
  <div class="fe-banner" :style="`background-image: url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/` + background + `')`">
    <b-row>
      <b-col cols="7">
        <div class="title">{{ title }}</div>
      </b-col>

      <b-col cols="8" class="mt-3">
        <div class="description">
          <p>{{ description }}</p>
        </div>
        <b-button v-if="button" class="button">{{ button }}</b-button>
      </b-col>

      <b-col cols="4">
        <div class="list">
          <span v-for="(item, index) in list" :key="index">{{ item }}</span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'fe-banner',
  props: {
    background: {
      type: String,
      required: true,
      description: 'Imagem de fundo'
    },
    title: {
      type: String,
      required: true,
      description: 'Título'
    },
    description: {
      type: String,
      required: true,
      description: 'Descrição'
    },
    button: {
      type: String,
      description: 'Botão'
    },
    list: {
      type: Array,
      default: () => [],
      description: 'Lista de itens'
    },
  },
}
</script>

<style>
.fe-banner {
  width: 100%;
  height: 280px;
  padding: 30px 40px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
}

.fe-banner .title {
  font-size: 32px;
  font-weight: 600;
}

.fe-banner .mt-3 {
  padding-right: 85px;
}

.fe-banner .description {
  display: inline;
  font-size: 19px;
  font-weight: 300;
  line-height: 1.3;
}

.fe-banner .button,
.fe-banner .button:hover,
.fe-banner .button:active,
.fe-banner .button:focus {
  padding: 7px 17px;
  background-color: #805be7 !important;
  font-size: 17.7px;
  border-color: #805be7 !important;
}

.fe-banner .list {
  margin-top: 15px;
  margin-right: 16px;
  font-weight: 300;
  line-height: 1.3;
  opacity: 0.8;
}

.fe-banner .list span {
  display: list-item;
}
</style>
