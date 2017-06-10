<template>
  <div>
    <div v-show="!datailShow" class="hit clearfix">
      <div v-for="item in upt || hit" class="hit-item" @click="detailst(item)">
        <div class="item-img">
          <img :src="item.images.large" alt="">
        </div>
        <div class="info">
          <div  class="name">{{item.title}}</div>
          <div class="rank">
            <stars :average="item.rating.average"></stars>
          </div>
        </div>
      </div>
    </div>
    <div v-show="datailShow" class="datail" @click="datailShow=false">
      <div class="datail-wrapper clearfix">
        <div class="datail-main">
          <detailist v-if="dataitem" :dataitem="dataitem"></detailist>
        </div>
      </div>
      <div class="datail-close">
        <i>X</i>
      </div>
    </div>
  </div>
</template>

<script>
  import stars from '../Stars/stars'
  import detailist from  '../detailist/detailist'
export default {
  data() {
      return {
        updata: {},
        hit: {},
        datailShow: false,
        dataitem: ''
      }
    },
  methods: {
    detailst(item) {
      this.dataitem = item
      console.log(item)
   //   this.$store.commit('itemdata', item)
      if (!this.datailShow) {
        this.datailShow = true
      }
    }
  },
  computed: {
    upt() {
      if (this.$route.path === '/hit') {
        return this.updata.hit
      }
      if (this.$route.path === '/soon') {
        return this.updata.soon
      }
      if (this.$route.path === '/ranking') {
        return this.updata.ranking
      }
    }
  },
  created() {
    this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', { credentials: true }).then((response) => {
      response = response.body
      this.$store.commit('getHit', response)
      this.hit = this.$store.state.hit.subjects
      this.updata.hit = this.$store.state.hit.subjects
   //   console.log(response)
    }, (response) => {
      console.log('err' + response)
    })
    this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon', { credentials: true }).then((response) => {
      response = response.body
      this.$store.commit('getSoon', response)
      this.updata.soon = this.$store.state.soon.subjects
  //    console.log(response)
    }, (response) => {
      console.log('err' + response)
    })
    this.$http.jsonp('https://api.douban.com/v2/movie/top250', { credentials: true }).then((response) => {
      response = response.body
      this.$store.commit('getRanking', response)
      this.updata.ranking = this.$store.state.ranking.subjects
  //    console.log(response)
    }, (response) => {
      console.log('err' + response)
    })
  },
  components: {
    stars,
    detailist
  }
 }
</script>

<style>
  .hit {
    padding: 20px auto;
    margin-right: auto;
    margin-leght: auto;
    /*background-color: #666;*/
  }
  .hit-item {
    float: left;
    width: 33.3333%;
    box-sizing: border-box;
    padding: 20px 0 0 0;
    padding-left: 4%;
    padding-right: 4%;
    /*margin-bottom: 20px;*/
    /*background-color: pink;*/
    min-height: 87px;
  }
  .item-img {
    min-height: 87px;
    overflow: hidden;
    width: 100%;
  }
  .item-img img {
    height:149px;
    display: block;
  }
  .info {
    height: 45px;
    box-sizing: border-box;
    font-size: 13px;
  }
  .info .name {
    font-size: 13px;
    font-weight: normal;
    padding: 5px 0 0;
    color: #494949;
    line-height: 15px;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  .info .rank {
    height: 16px;
    font-size: 12px;
    padding-top: 3px;
    text-align: center;
  }
  .datail {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #fff;
  }
  .datail-wrapper {
    min-height: 100%;
    width: 100%;
  }
  .datail-main {
  }

</style>
