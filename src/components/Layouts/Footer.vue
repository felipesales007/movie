<template>
  <div class="fe-footer">
    <b-row>
      <b-col cols="4">
        <div class="left">
          <img :src="require('@/assets/img/tmdb.png')" alt="">
          <b-button class="button">JUNTE-SE A COMUNIDADE</b-button>
        </div>
      </b-col>

      <b-col cols="2">
        <div class="list list-1">
          <div class="link-title">O BÁSICO</div>
          <div>Sobre o TMDB</div>
          <div>Contate-nos</div>
          <div>Suporte</div>
          <div>API</div>
          <div>Status do Sistema</div>
        </div>
      </b-col>

      <b-col cols="2">
        <div class="list list-2">
          <div class="link-title">ENVOLVA-SE</div>
          <div>Bíblia do Colaborador</div>
          <div>Adicionar um novo Filme</div>
          <div>Adicionar uma nova Série</div>
        </div>
      </b-col>

      <b-col cols="2">
        <div class="list list-3">
          <div class="link-title">COMUNIDADE</div>
          <div>Diretrizes</div>
          <div>Discussões</div>
          <div>Placar de colaboradores</div>
          <div>Twitter</div>
        </div>
      </b-col>

      <b-col cols="2">
        <div class="list list-4">
          <div class="link-title">LEGALIDADE</div>
          <div>Termos de uso</div>
          <div>Termos de Uso da API</div>
          <div>Política de privacidade</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'fe-footer',
}
</script>

<style>
.fe-footer {
  display: flex;
  height: 322px;
  margin-left: -140px;
  background-image: radial-gradient(at 30% top, #031d33 0%, rgba(3, 37, 65, 1) 70%);
  color: #ffffff;
  align-items: center;
  justify-content: center;
}

.fe-footer .row {
  margin-top: -30px;
}

.fe-footer .left {
  display: grid;
  justify-content: end;
  align-content: center;
  justify-items: end;
}

.fe-footer img {
  position: relative;
  top: -25px !important;
  width: 130px;
}

.fe-footer img,
.fe-footer .button {
  margin-right: 20px;
  float: right;
}

.fe-footer .button,
.fe-footer .button:hover,
.fe-footer .button:active,
.fe-footer .button:focus {
  padding: 7px 17px;
  margin-top: 25px;
  background-color: #ffffff !important;
  color: #02b4e4;
  font-size: 18px;
  font-weight: bold;
  border-color: #ffffff !important;
}

.fe-footer .list {
  margin-top: 15px;
  font-weight: 300;
  line-height: 1.3;
}

.fe-footer .list-2 {
  margin-left: -20px;
}

.fe-footer .list-3 {
  margin-left: 13px;
}

.fe-footer .list-4 {
  margin-left: 38px;
}

.fe-footer .list .link-title {
  font-weight: bold;
  font-size: 20px;
  cursor: default;
}

.fe-footer .list :not(.link-title) {
  width: 190px;
  font-size: 18px;
  cursor: pointer;
}
</style>
