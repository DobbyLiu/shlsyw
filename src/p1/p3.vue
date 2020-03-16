//App.vue
<template>
    <b-container id="p3" style="max-width: none;width: 1440px;padding: 0">
        <!--    <img src="../src/assets/hp_bg01.png">-->
        <Navbar v-show="showNav"/>
        <!--      <router-view></router-view>-->
        <p3_md></p3_md>
        <hp_bm v-show="showBm"/>

    </b-container>
</template>
<script>

    // import HelloWorld from '../components/HelloWorld.vue'
    import Navbar from '../components/Navbar.vue';
    import hp_bm from "@/components/up_bm.vue";
    import p3_md from "@/p1/p3_md.vue";
    // import P1_md from "@/p1/p1_md";
    export default {
        name: 'navbar',
        data(){
            return{
                showNav : true,
                showBm: true
            }
        },
        components: {
            p3_md,
            hp_bm,
            Navbar,
        }
    }
</script>
<style>
    #p3{
        width: 1440px;
        height: 900px;
        background: url("../assets/hp_bg01.png") no-repeat;
        background-size: 1440px 900px;
    }
</style>