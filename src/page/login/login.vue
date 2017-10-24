<template>
    <div class="login-box">
        <header class="m-hd">
            <i class="fa"></i>
            <p class="u-tt">登陆</p>
        </header>
        <div class="g-login">
            <div class="m-login-mn">
                <div class="u-group">
                    <label class="u-lbl" for="input-name">用户名：</label>
                    <input class="u-it" id="input-name" type="text" placeholder="请输入用户名" />
                </div>
                <div class="u-group">
                    <label class="u-lbl" for="input-pwd">密码：{{Classmove}}</label>
                    <input class="u-it" id="input-pwd" type="password" placeholder="请输入密码" />
                </div>
            </div>
            <button class="u-btn" type="button" v-on:click="submit">确定</button>
        </div>
    </div>
</template>

<style>
    .login-box{

    }
    .g-login{
        position: relative;
        margin: 10px;
    }
    .m-login-mn{
        padding: 10px;
        border-radius: 2px;
        background-color: #fff;
        background-clip: padding-box;
        box-shadow: 0 1px 2px rgba(0,0,0,.3);
        box-sizing: border-box;
    }
    .m-login-mn .u-group{
        display: flex;
        width: 100%;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        border-bottom: 1px solid #efeff4;
    }
    .m-login-mn .u-lbl{
        width: 80px;
    }
    .m-login-mn .u-it{
        flex: 1;
        border: 0;
    }
    .g-login .u-btn{
        display: block;
        margin-top: 15px;
        margin-bottom: 10px;
        padding: 10px;
        width: 100%;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        line-height: 1.42;
        border: 1px solid #007aff;
        border-radius: 2px;
        background-color: #007aff;
    }
</style>

<script>
    export default {
        data() {
            return {
                Classmove: 'sdfsd',
                show: true
            };
        },
        created:function(){
            var self = this;
            var url = "http://localhost:8083/article/findArticlesList?pageIndex=0&pageSize=5&_=1508207349834";

            this.$ajax({
                method: 'get',
                url: url
            }).then(function(res){
                self.Classmove = res.data;
                console.log(res.data)
            }).catch(function(err){
                self.Classmove = '失败';
                console.log(err)
            })
        },
        methods:{
            submit: function () {
                console.log('ppp')
            }
        }
    }
</script>
