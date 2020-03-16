<template>
    <b-container :class="{'bgstyle':bgstyle}" style="width: 1440px; height: 581px;max-width: none;margin-top: 40px">
        <b-row>
            <b-col style="width:755px !important;height:472px;background-color: transparent;margin-top: 60px;padding: 0" >
                <b-col style="padding:0;width:355px !important;height:120px;top: 234px;left: 150px;font-size: 32px;background-color: transparent;color: #EEEEEE;line-height: 60px;letter-spacing: 3.2px;text-align: justify">
                    为制造企业提供<br>
                    印刷品整体外包服务
                </b-col>
            </b-col>
            <b-col id="pg_md_r" style="background-color: transparent;margin-top: 93px">

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "hp_md",
        data() {
            return {
                bgstyle: false
            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style>
#pg_md_r{
    width: 755px;
    height: 473px;
    background: url("../assets/hp_bg02.png") no-repeat;
    background-size: 755px 473px;
}
    .bgstyle{
        background-color: black;
    }
</style>