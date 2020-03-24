<template>
    <b-container style="width: 1440px; height: 238.6px;background-color: transparent;max-width: none;">
        <b-col class="justify-content-center" style="text-align: center;font-size: 12px;color: #666666;width: 380px;height: 34px;top: 150px;left: 565px;line-height: 17px">
            <span style="cursor: pointer" @click="jump()">版权所有 上海灵山印务有限公司 2020/02/20<br>
                沪ICP备19025383号-2 ｜ 沪公网安备31011502014344号</span>
        </b-col>
    </b-container>
</template>

<script>
    export default {
        name: "up_bm",
        methods: {
            jump() {
                window.open("http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502014344")
                //this.$router.push({path:'/login'})
            },
        },
    }
</script>

<style scoped>



</style>