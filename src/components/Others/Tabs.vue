<template>
  <div class="fe-tabs">
    <b-tabs>
      <b-tab :title="title" disabled/>
      <b-tab title="Streaming" active @click="style()">
        <div v-for="(item, index) in data" :key="index">
          <fe-card-films
            :image="item.poster_path"
            :title="item.title"
            :date="item.release_date"
            :percent="item.vote_average"/>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'fe-tabs',
  props: {
    title: {
      type: String,
      required: true,
      description: 'Título'
    },
    data: {
      type: Array,
      default: ()=> [],
      description: 'Listagem de filmes'
    },
  },
  methods: {
    style() {
      const removeActive = this.$el.querySelector('.nav-item.active');
      const removeDisabled = this.$el.querySelector('.nav-item.disabled');
      if (removeActive) removeActive.classList.remove('active');
      if (removeDisabled) removeDisabled.classList.remove('disabled');

      this.$nextTick(() => {
        const addActive = this.$el.querySelector('.nav-item .active');
        const addDisabled = this.$el.querySelector('.nav-item .disabled');
        addActive.parentElement.classList.add('active');
        addDisabled.parentElement.classList.add('disabled');
      });
    },
  },
  mounted() {
    this.style();
  },
}
</script>

<style>
.fe-tabs {
  margin-top: 31px;
}

.fe-tabs .tab-content {
  margin-top: 20px;
}

.fe-tabs .tab-pane {
  display: flex !important;
  overflow: auto;
  padding-bottom: 41px;
}

.fe-tabs .tab-pane .fe-card-films:first-child {
  margin-left: 40px;
}

.fe-tabs .tab-pane .fe-card-films {
  margin-right: -20px;
}

.fe-tabs .disabled:first-child {
  margin-left: 20px;
}

.fe-tabs .disabled {
  position: relative;
  top: -2px;
  padding: 0 10px 0 0 !important;
  color: #000000 !important;
  font-size: 24px;
}

.fe-tabs .nav-tabs {
  border-bottom: none;
}

.fe-tabs .nav-item,
.fe-tabs .nav-tabs .nav-link {
  height: 30px;
  padding: 0.5px 10px;
}

.fe-tabs .nav-item:not(.disabled) {
  border-top: 1px solid #032541;
  border-bottom: 1px solid #032541;
}

.fe-tabs .nav-item.active {
  background: #032541;
  border-color: transparent;
  border-radius: 30px;
  transition: all .5s ease-in-out;
}

.fe-tabs .nav-tabs .nav-link.active {
  background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-color: transparent;
}

.fe-tabs .nav-tabs .nav-link {
  color: #032541;
  font-weight: 600;
}

.fe-tabs .nav-tabs .nav-link:hover {
  border-color: transparent;
}
</style>
