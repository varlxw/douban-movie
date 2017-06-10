<template>
  <div class="details-item">
    <header>{{dataitem.title}}</header>
    <div class="deta-mian">

    </div>
  </div>
</template>
<script>
    export default {
        props: {
          dataitem: {
            default: {}
          }
        },
      data() {
        return {
        }
      },
      computed: {
      },
      created() {
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
</style>
