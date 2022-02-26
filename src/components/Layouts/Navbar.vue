<template>
  <b-navbar class="fe-navbar" type="dark" variant="dark">
    <div class="nav-content">
      <b-navbar-nav>
        <!-- logo -->
        <b-navbar-brand href="/">
          <img :src="require('@/assets/img/logo.png')" alt="">
        </b-navbar-brand>

        <!-- itens da esquerda -->
        <div class="left" @mouseover="onOver(1)" @mouseleave="onLeave(1)">
          <b-nav-item-dropdown text="Filmes" ref="dropdown-1">
            <b-dropdown-item href="javascript:void(0)">Populares</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Em cartaz</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Próximas Estreias</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Mais bem avaliados</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>

        <div class="left" @mouseover="onOver(2)" @mouseleave="onLeave(2)">
          <b-nav-item-dropdown text="Séries" ref="dropdown-2">
            <b-dropdown-item href="javascript:void(0)">Populares</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Em exibição hoje</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Na TV</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Mais bem avaliadas</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>

        <div class="left" @mouseover="onOver(3)" @mouseleave="onLeave(3)">
          <b-nav-item-dropdown text="Pessoas" ref="dropdown-3">
            <b-dropdown-item href="javascript:void(0)">Pessoas Populares</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>

        <div class="left" @mouseover="onOver(4)" @mouseleave="onLeave(4)">
          <b-nav-item-dropdown text="Mais" ref="dropdown-4">
            <b-dropdown-item href="javascript:void(0)">Discussões</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Placar de colaboradores</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">Suporte</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)">API</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>

        <!-- itens da direita -->
        <div class="right">
          <b-nav-item href="javascript:void(0)">
            <b-icon icon="plus" variant="white" font-scale="1.5"
              v-b-popover.bottom="'Não encontrou o filme ou série que procurava? ' +
               'Entre com uma conta e adicione ao nosso banco de dados.'"/>
          </b-nav-item>
          <b-nav-item href="javascript:void(0)">
            <b-button size="xs" variant="outline-light">PT</b-button>
          </b-nav-item>
          <b-nav-item href="javascript:void(0)">Entrar</b-nav-item>
          <b-nav-item href="javascript:void(0)">Junte-se ao TMDB</b-nav-item>
          <b-nav-item href="javascript:void(0)">
            <b-icon icon="search" variant="info" font-scale="1.5"/>
          </b-nav-item>
        </div>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'fe-navbar',
  props: {
    items: {
      type: Array,
      description: 'Itens do menu'
    },
  },
  methods: {
    onOver(index) {
      this.$refs[`dropdown-${index}`].visible = true;
    },
    onLeave(index) {
      this.$refs[`dropdown-${index}`].visible = false;
    }
  }
}
</script>

<style>
.fe-navbar.navbar-dark {
  height: 64px;
  background-color: #032541 !important;
}

.fe-navbar .nav-content {
  position: relative;
  left: 50%;
  width: 1300px;
  transform: translateX(-50%);
}

.fe-navbar img {
  position: relative;
  top: -2px;
  width: 155px;
  margin-left: 40px;
}

.fe-navbar .navbar-nav .left {
  margin-right: 15px;
}

.fe-navbar .nav-link {
  color: #ffffff !important;
}

.fe-navbar .dropdown-toggle::after {
  display: none;
}

.fe-navbar .dropdown-item {
  padding: 3px calc(3rem + 16px) 3px 1.5rem;
  outline: none !important;
  box-shadow: none !important;
}

.fe-navbar .dropdown-item:hover {
  background-color: #f8f9fa;
}

.fe-navbar .dropdown-item:active {
  color: #1e2125;
}

.fe-navbar .right {
  display: flex;
  position: absolute;
  right: 30px;
}

.fe-navbar .right .nav-item {
  margin-left: 15px;
}

.fe-navbar .right .nav-item .bi-search {
  margin-right: 9px;
}

.fe-navbar .text-white {
  color: #ffffff !important;
}

.fe-navbar .btn-xs {
  position: relative;
  top: -2px;
  padding: 2px 5px 1px 6px !important;
  font-size: 14px;
}
</style>
