<template>
    <b-container id="login" style="max-width: none;width: 1440px;padding: 0">
        <b-row style="max-width: 1440px;margin: 0; margin-left: 150px">
            <img @click="jump()" src="../assets/Logo_bg@2x.png" style="height: 152px;width: 111px">
        </b-row>
        <b-row class="align-items-center" style="max-width: 1440px;margin: 0;">
            <b-col sm="4">
                <div></div>
            </b-col>
            <b-col sm="4" style="background-color: #123893;height: 480px; opacity: 0.8;border-radius: 6px;margin-top: 58px">
                <b-row class="align-items-center" style="text-align: center">
                  <b-col style="font-size: 20px;margin-top: 35px;color: #FFFFFF">
                      灵山BDS登录
                  </b-col>
                </b-row>
                <b-row>
                    <b-col>
                    </b-col>
                    <b-col sm="10">
                        <b-input-group style="height: 50px;margin-top: 47px">
                            <b-input-group-text style="background-color: white;border-color: white;border-radius: 2px">
                                <img src="../assets/login_icon_user@2x.png" style="width: 12px; height:14px;margin-top: 3px;margin-left: 15px" alt="">
                            </b-input-group-text>
                            <b-input placeholder="用户名" class="form-control" style="border-color: white; margin-left: -3px;height: 50px;border-radius: 2px">
                            </b-input>
                        </b-input-group>
                    </b-col>
                    <b-col>

                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                    </b-col>
                    <b-col sm="10">
                        <b-input-group style="height: 50px;margin-top: 20px">
                            <b-input-group-text style="background-color: white;border-color: white;border-radius: 2px">
                                <img src="../assets/login_icon_pw@2x.png" style="width: 12px; height:14px;margin-top: 3px;margin-left: 15px" alt="">
                            </b-input-group-text>
                            <b-input placeholder="密码" class="form-control" style="border-color: white; margin-left: -3px;height: 50px;border-radius: 2px">
                            </b-input>
                        </b-input-group>
                    </b-col>
                    <b-col>

                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="1">
                    </b-col>
                    <b-col sm="6">
                        <b-input-group style="height: 50px;margin-top: 20px">
                            <b-input-group-text style="background-color: white;border-color: white; border-radius: 2px">
                                <img src="../assets/login_icon_ver@2x.png" style="width: 12px; height:14px;margin-top: 3px;margin-left: 15px" alt="">
                            </b-input-group-text>
                            <b-input placeholder="验证码" class="form-control" style="border-color: white; margin-left: -3px;height: 50px;border-radius: 2px">
                            </b-input>
                        </b-input-group>
                    </b-col>
                    <b-col>
                        <img src="../assets/login_icon_vnumber@2x.png" style="width: 143px; height:50px;margin-top: 20px;margin-left: -12px" alt="">
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>

                    </b-col>
                    <b-col sm="10">
                        <b-button block style="margin-top: 68px;height: 50px;background-color: #4ABFC0;border-radius: 2px;font-size: 16px">登录</b-button>
                    </b-col>
                    <b-col>
                    </b-col>
                </b-row>
            </b-col>
            <b-col sm="4">
                <div></div>
            </b-col>
        </b-row>
        <b-row style="max-width: 1440px;margin: 0;">
            <b-col>

            </b-col>
            <b-col style="text-align: center; margin-top: 140px;color: #FFFFFF;font-size: 12px">
                BDS进出库后台管理系统&nbsp; ©2017
            </b-col>
            <b-col>

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "login",
        methods: {
            jump() {
                // window.open("http://www.sh0315.cn/bds/sysUser/tologin")
                this.$router.push({path:'/'})
            },
        },
    }
</script>

<style>
#login{
    width: 1440px;
    height: 900px;
    background: url("../assets/login_bg@2x.jpg") no-repeat;
    background-size: 1440px 900px;
}
.form-control{
    border: none !important;

    box-shadow: none !important;
}
    .form-control:focus{
        border: none !important;

        box-shadow: none !important;
    }
input::-webkit-input-placeholder{
    color: #666666;

    opacity:1;

    font-size:14px;

}
</style>