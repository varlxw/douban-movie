<template>
  <div id="app">
    <mt-header fixed title="豆瓣电影">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="tab">
      <div  class="tab-item">
        <router-link  to="/hit">正在热映</router-link>
      </div>
      <div  class="tab-item">
        <router-link  to="/soon">即将上映</router-link>
      </div>
      <div  class="tab-item">
        <router-link  to="/ranking">Top250</router-link>
      </div>
    </div>
    <div ref="hits" class="content">
      <router-view></router-view>
    </div>
</div>
</template>

<script>
//  import jhit from './components/hit/hit'
export default {
  name: 'app',
  components: {
  },
  methods: {},
  created() {

  }
//  render: create => create(jhit)
 }
</script>

<style>
  body {
  }
  #app {
    max-width: 500px;
  }
  .mint-header {
    background-color: #05B512;
  }
  .mint-header h1{
    font-size:18px;
    font-weight: 700;
    padding-top: 6px;
  }
  .tab {
    top: 40px;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    display: flex;
    background-color: #fff;
  }
  .tab .tab-item {
    flex: 1;
    text-align: center;
}
  .tab .tab-item a{
    display: block;
    height: 46px;
    text-align: center;
    line-height: 47px;
    color:  #000;
  }
  .tab .tab-item .active {
    background-color: #26A2FF;
    color:  #fff;
  }
  .content {
    margin-top: 80px;
  }
</style>
