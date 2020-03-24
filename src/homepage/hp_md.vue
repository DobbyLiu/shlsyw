<template>
    <b-container :class="{'bgstyle':bgstyle}" style="width: 1440px; height: 581px;max-width: none;margin-top: 40px">
        <b-row>
            <b-col style="width:755px !important;height:472px;background-color: transparent;margin-top: 10px;padding: 0" >
                <b-col style="padding:0;width:474px !important;height:120px;top: 180px;left: 150px;font-size: 20px;background-color: transparent;color: #EEEEEE;line-height: 60px;letter-spacing: 3.2px;text-align: justify">
                    ● 为企业印刷品规模需求提供嵌入式服务<br>
                    ● 让企业像使用自己的文印部门一样方便<br>
                    ● 让企业对自己的印刷品做到微管理、零库存<br>
                    ● 我们并不需要更多业务，我们更需要 <br>

                </b-col>
                <b-col style="text-indent:1.6em; padding:0;width:474px !important;height:120px;top: 300px;left: 150px;font-size: 20px;background-color: transparent;color: #EEEEEE;line-height: 60px;letter-spacing: 3.2px;text-align: justify">
                    服务好现在的客户！<br>
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