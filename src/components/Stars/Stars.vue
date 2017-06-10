<template>
<div class="stares">
  <div v-if="average !== 0" class="stares-item">
    <span v-for="item in arr" :class="item" class="stares-i"></span>
  </div>
  <div class="average">{{average==0?'暂无评分':average}}</div>
</div>
</template>
<script>
  const LENGTH = 5
    export default {
      props: {
        average: {
          type: Number,
          dafault: 0
        }
      },
      data() {
        return {
          arr: []
        }
      },
      created() {
        let size = Math.floor(this.average / 2)
        let sizeh = Math.floor(this.average * 2) / 2 % 2 !== 0
        for (let i = 0; i < size; i++) {
            this.arr.push('on')
        }
        if (sizeh) {
          this.arr.push('half')
        }
        const arrLength = this.arr.length
        for (let i = 0; i < LENGTH - arrLength; i++) {
          this.arr.push('off')
        }
      }
    }
</script>
<style>
  .stares {

  }
  .stares .stares-item {
    display: inline-block;
  }
  .stares .stares-item .stares-i {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .average {
    display: inline-block;
  }
  .on {
    background-image: url('./star24_on@2x.png');
    -webkit-background-size: 10px 10px;
    background-size: 10px 10px;
  }
  .off {
    background-image: url('./star24_off@2x.png');
    -webkit-background-size: 10px 10px;
    background-size: 10px 10px;
  }
  .half {
    background-image: url('./star24_half@2x.png');
    -webkit-background-size: 10px 10px;
    background-size: 10px 10px;
  }
</style>
