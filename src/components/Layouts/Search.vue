<template>
  <div class="fe-search" :style="`background-image: linear-gradient(to right, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%), url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/` + background + `')`">
    <div class="content">
      <div class="title">
        <h1>{{ title }}</h1>
        <h2>{{ subTitle }}</h2>
      </div>
      <div class="search">
        <form>
          <input type="text" placeholder="Buscar por um Filme, Série ou Pessoa...">
          <input type="submit" value="Search">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fe-search',
  props: {
    title: {
      type: String,
      required: true,
      description: 'Título'
    },
    subTitle: {
      type: String,
      required: true,
      description: 'Sub-título'
    },
    background: {
      type: String,
      required: true,
      description: 'Imagem de fundo'
    },
  },
}
</script>

<style>

.fe-search  .image {
  width: 150px;
  height: 225px;
  border-radius: 8px;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
.fe-search {
  height: calc(100vh / 2.5);
  min-height: 300px;
  max-height: 360px;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
}

.fe-search .content {
  padding: 93px 40px;
}

.fe-search .title h1 {
  font-size: 48px;
  line-height: 0.8;
  font-weight: 700;
}

.fe-search .search form {
  position: relative;
  margin-top: 48px;
}

.fe-search .search form input[type=text] {
  width: 100%;
  height: 46px;
  padding: 10px 20px;
  font-size: 1.1em;
  border: none;
  border-radius: 30px;
}

.fe-search .search form input[type=text],
.fe-search .search form input[type=text]::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.fe-search .search form input[type=submit] {
  position: absolute;
  height: 46px;
  right: -1px;
  padding: 10px 26px;
  background: linear-gradient(to right, rgba(30,213,169, 1) 0%, rgba(1,180,228, 1) 100%);
  color: #ffffff;
  border: none;
  border-radius: 30px;
}
</style>
