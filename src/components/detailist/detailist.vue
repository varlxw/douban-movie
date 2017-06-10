<template>
  <div class="details-item">
    <header>{{dataitem.title}}</header>
    <div class="deta-mian">
      <div class="deta-img">
        <img :src="dataitem.images.large" alt="">
      </div>
    </div>
    <div class="details-warpper">
      <div class="left">
        <h2>{{dataitem.title}}</h2>
        <div class="dd">{{dataitem.year}}</div>
        <div v-for="genres in dataitem.genres" class="gen">{{ '/' + genres}}</div>
      </div>
      <div class="right">
        <stars averageT="true" :average="dataitem.rating.average" ></stars>
      </div>
    </div>
  </div>
</template>
<script>
  import stars from '../Stars/Stars'
    export default {
        props: {
          dataitem: {
            default: {}
          }
        },
      data() {
        return {
          averageT: true
        }
      },
      computed: {
      },
      created() {
      },
      components: {
        stars
      }
    }
</script>
<style>
  .details-item {
    width: 100%;
    background: #fff;
  }
  .details-item header{
    text-align: center;
    line-height: 41px;
    background-color: #05B512;
    z-index: 3;
    color: #fff;
    font-size:18px;
    font-weight:700;
  }
  .deta-img {
    box-sizing: border-box;
    padding: 10px 100px 25px;
    height: 260px;
    background: #092940;
    /*opacity: 0.9;*/
  }
  .deta-img img {
    max-width:160px;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  .details-warpper {
    display: flex;
  }
  .details-warpper .left {
    flex: 1;
    padding-top: 18px;
    padding-left: 20px;
  }
  .details-warpper h2 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 4px;

  }
  .details-warpper .left div {
    display: inline-block;
    color: #BABABA;
    font-size: 13px;
  }
  .details-warpper .right {
    flex: 0 0 140px;
    margin-right: 10px;
    padding: 20px 0 0 0;
  }
</style>
