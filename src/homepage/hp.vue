//App.vue
<template>
  <b-container id="hp" style="max-width: none;width: 1440px;padding: 0">
<!--    <img src="../src/assets/hp_bg01.png">-->
    <Navbar/>
<!--      <router-view></router-view>-->
      <hp_md></hp_md>
      <hp_bm/>

  </b-container>
</template>
<script>

  // import HelloWorld from '../components/HelloWorld.vue'
  import Navbar from '../components/Navbar.vue';
  import hp_bm from "@/components/up_bm.vue";
  import hp_md from "@/homepage/hp_md.vue";
  export default {
    name: 'navbar',
    data(){
      return{
      }
    },
    components: {
       hp_bm,
      Navbar,
        hp_md
    }
  }
</script>
<style>
#hp{
  width: 1440px;
  height: 900px;
  background: url("../assets/hp_bg01.png") no-repeat;
  background-size: 1440px 900px;
}
</style>