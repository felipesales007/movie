<template>
  <div class="fe-tabs mt-4">
    <b-tabs content-class="mt-3">
      <b-tab title="Os Mais Populares" disabled/>
      <b-tab title="Streaming" active @click="style()">
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
        <fe-card-films/>
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
      description: 'Título'
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
  mounted () {
    this.style();
  },
}
</script>

<style>
.fe-tabs .tab-pane {
  display: flex !important;
  overflow: auto;
  padding-bottom: 40px;
}

.fe-tabs .tab-pane:after {
  content: '';
  position: absolute;
  width: 60px;
  height: 100%;
  right: 0;
  margin-right: 52px;
  background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 100%);
  will-change: opacity;
  pointer-events: none;
}

.fe-tabs .tab-pane .fe-card-films {
  margin-right: 20px;
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
