//src/components/Navbar.vue
<template>
<!--        <b-row style="background-color: blue; height: 40px">sdsd</b-row>-->
        <b-navbar class="navbar"  style="background-color: #A7A7A7;padding: 0; height: 40px;top: 40px;width: 1440px;max-width: none;">
            <b-container style="max-width: none;">
                <b-navbar-brand style="padding: 0">
                    <b-link to="/" router-tag="div" id="logoB"  style="width: 158px; height: 84px;margin-left: 150px;margin-top: 14px"></b-link>
                </b-navbar-brand>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav >
                        <b-nav-form>
                            <b-link to="/p1" router-tag="div" class="buttonstyle">服务方式</b-link>
                            <b-link to="/p2" router-tag="div" class="buttonstyle">生产方式</b-link>
                            <b-link to="/p3" router-tag="div" class="buttonstyle">管理方式</b-link>
                            <b-link to="/p4" router-tag="div" class="buttonstyle">关于我们</b-link>
                            <div class="buttonstyle"
                                    style="margin:0 3px 0 45px;" @click="jump()"
                            >BDS登录<img src="../assets/hp_login_Icon@2x.png" style="width: 12px; height: 14px;margin-left: 3px;margin-bottom: 2px"></div>

                            <div style="width: 150px; background-color: red"></div>
                        </b-nav-form>
                    </b-navbar-nav>
            </b-container>
        </b-navbar>
</template>
<script>
    export default {
        data() {
            return {
                meal: ''
            }
        },
        methods: {
            jump() {
                window.open("http://www.sh0315.cn/bds/sysUser/tologin")
                //this.$router.push({path:'/login'})
            },
        },
    }
</script>
<style>
    .buttonstyle{
        cursor:pointer;
        border-width: 0;
        padding:0;
        background-color: transparent;
        border-color: transparent;
        margin:0 15px;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        font-weight: normal;
    }
    .buttonstyle:hover{
        cursor:pointer;
        border-width: 0;
        padding:0;
        background-color: transparent;
        border-color: transparent;
        margin:0 15px;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
    }
#logoB{
    width: 84px;
    height: 158px;
    background: url("../assets/logo0313_rou4.png") no-repeat;
    background-size: 158px 84px;
    cursor: pointer;
}
</style>