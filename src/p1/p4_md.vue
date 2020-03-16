<template>
    <b-container :class="{'bgstyle':bgstyle}" style="width: 1440px; height: 581px;max-width: none;margin-top: 40px">
        <b-row>
            <b-col style="width:755px !important;height:472px;background-color: transparent;margin-top: 60px;padding: 0" >
                <b-col style="padding:0;width:355px !important;height:120px;top: 212px;left: 150px;font-size: 32px;background-color: transparent;color: #EEEEEE;line-height: 60px;letter-spacing: 3.2px;text-align: justify">
                    联系我们<br>
                    <div style="font-size: 14px;line-height: 28px;width: 193px;height: 84px;letter-spacing: 0">
                        地址：上海浦东建豪路97号5楼<br>
                        电话：021-20977603<br>
                        邮箱：jone@sh0315.com
                    </div>
                </b-col>
            </b-col>
            <b-col cols="5" id="p4_md_r" style="background-color: transparent;margin-top: 128.5px">

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
            this.formatDate(4)
        },
        methods:{
            formatDate(aa) {
                var date1 = new Date(),
                    time1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();//time1表示当前时间
                var date2 = new Date(date1);
                date2.setDate(date1.getDate()+aa);
                // var time2 = date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDate();
                if (time1.toString()== "2020-4-2") {
                    alert("测试测试测试平时佛教是东方斯卡拉NSA开发能力咖啡能力")
                    this.bgstyle=true
                }

            }
        }
    }
</script>

<style>
    #p4_md_r{
        width: 755px;
        height: 473px;
        background: url("../assets/con_bg_us@2x.png") no-repeat;
        background-size: 500px 453px;
    }
    .bgstyle{
        background-color: black;
    }
</style>