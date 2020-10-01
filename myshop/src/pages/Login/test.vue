<template>
<div>
    <section class="loginContainer">
        <div class="loginInner">
            <div class="login_header">
                <h2 class="login_logo">硅谷外卖</h2>
                <div class="login_header_title">
                    <a href="javascript:;" :class="{on:loginWay}" @click=" loginWay=true">短信登录</a>
                    <a href="javascript:;" :class="{on:!loginWay}" @click=" loginWay=false">密码登录</a>
                </div>
            </div>
            <div class="login_content">
                <form>
                    <div :class="{on:loginWay}">
                        <section class="login_message">
                            <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                            <button :disabled="!rightPhone" @click.prevent="getCode" class="get_verification" :class="{right_phone:rightPhone}">{{computeTime?`已发送($(computeTime))`:'获取验证码'}}</button>
                        </section>
                        <section class="login_verification">
                            <input type="tel" maxlength="8" placeholder="验证码">
                        </section>
                        <section class="login_hint">
                            温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                            <a href="javascript:;">《用户服务协议》</a>
                        </section>
                    </div>
                    <div :class="{on:!loginWay}">
                        <section>
                            <section class="login_message">
                                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
                            </section>
                            <section class="login_verification">
                                <input type="tel" maxlength="8" placeholder="密码">
                                <div class="switch_button off">
                                    <div class="switch_circle"></div>
                                    <span class="switch_text">...</span>
                                </div>
                            </section>
                            <section class="login_message">
                                <input type="text" maxlength="11" placeholder="验证码">
                                <img class="get_verification" src="./images/captcha.svg" alt="captcha">
                            </section>
                        </section>
                    </div>
                    <button class="login_submit">登录</button>
                </form>
                <a href="javascript:;" class="about_us">关于我们</a>
            </div>
            <a href="javascript:" class="go_back" @click="$router.back()">
                <i class="iconfont icon-jiantouzuo"></i>
            </a>
        </div>
    </section>
</div>
</template>

<script>
import {
    set
} from 'vue/types/umd'
export default {
    data() {
        return {
            loginWay: true, //true短信，false密码
            computeTime: 0,
            phone: ''
        }
    },
    created() {},
    computed: {
        rightPhone() {
            return /^1[3-9]\d{9}$/.test(this.phone)
        }
    },
    methods: {
        getCode() {
            if (this.computeTime == 0) {
                this.computeTime = 30
                const intervalId = setInterval(() => {
                    this.computeTime--;
                    if (this.computeTime <= 0)
                        clearInterval(intervalId)
                }, 1000)
            }
            //启动倒计时

            //发送ajax

        }

    },
}
