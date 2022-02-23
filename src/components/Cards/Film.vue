<template>
  <div class="fe-card-films">
    <b-icon-filter-circle class="detail"/>
    <a href="javascript:void(0)">
      <div class="image"/>
    </a>
    <div class="percent">
      <span class="number">48</span>
      <span class="flag">%</span>
    </div>
    <div class="description">
      <a href="javascript:void(0)">
        <div class="title">Indecente</div>
      </a>
      <div class="date">13 de jan de 2022</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fe-card-films',
  props: {
    title: {
      type: String,
      description: 'Título'
    },
  },
}
</script>

<style>
.fe-card-films {
  width: 150px;
  min-height: 291px;
  border-radius: 8px;
}

.fe-card-films .image {
  width: 150px;
  height: 225px;
  border-radius: 8px;
  background-image: url('https://www.themoviedb.org/t/p/w220_and_h330_face/A5v6Wi7lYR3a9m6CzntZWAcGFGV.jpg');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.fe-card-films .detail {
  position: relative;
  float: right;
  margin: 10px;
  background: #ffffff;
  color: #929191;
  font-size: 22px;
  border-radius: 50%;
  opacity: 0.5;
}

.fe-card-films .detail:hover {
  background: #02b4e4;
  cursor: pointer;
  opacity: 1;
}

.fe-card-films .percent {
  position: relative;
  top: -20px;
  left: 10px;
  width: 38px;
  height: 38px;
  margin-bottom: -11px;
  background: #000000;
  color: #ffffff;
  text-align: center;
  border-radius: 50%;
}

.fe-card-films .percent .number,
.fe-card-films .percent .flag {
  position: relative;
}

.fe-card-films .percent .number {
  top: 6px;
  left: 1px;
  font-size: 14px;
  letter-spacing: 1px;
}

.fe-card-films .percent .flag {
  top: 1px;
  font-size: 6px;
}

.fe-card-films .description {
  margin: 0 10px;
  line-height: 1.22;
}

.fe-card-films .title,
.fe-card-films .date {
  font-size: 16px !important;
}

.fe-card-films .title {
  font-weight: 700 !important;
}

.fe-card-films .date {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
}
</style>
