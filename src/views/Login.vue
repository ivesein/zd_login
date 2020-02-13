<template>
  <div class='login-page'>
    <div class="content">
        <div class="content-left" :style="{backgroundImage: 'url(' +  bgImg + ')',backgroundPosition:'center center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}">
            <div class="custom-info"  v-show="ifCultureShow">
                <div class="company-name"></div>
                <div class="enterprise-culture">
                <p>愿景：成为引领智慧工程的专业平台</p>
                <p>使命：让交通工程更智慧、更高效</p>
                <p>价值观：艰苦奋斗 学习创新 快乐成长 认真专注
                    守信负责 商业人格 客户价值 感恩和爱</p>
                </div>
            </div>
        </div>
        <div class="content-right">
            <div class="top-info">
                <span>{{clientInfo}}</span>
            </div>
            <div class="logo-box">
                <img :src="logo" alt="">
            </div>
            <div class="input-box">
                <span class="login-title">公路云业主端账号登录</span>
                <div class="input-wrap" :class="{'input-wrap-focus':focus1}">
                    <input type="text" v-model="userName" class="input-item username" @focus="usernameFocus" @blur="usernameBlur" placeholder="用户名/手机号/邮箱">
                </div>
                <div class="input-wrap" :class="{'input-wrap-focus':focus2}">
                    <input type="password" v-model="userPWD" class="input-item password" @focus="passwordFocus" @blur="passwordBlur" placeholder="登录密码">
                </div>
                <div class="login-btn" @click="goLogin">
                    {{btnText}}
                </div>
                <div class="other-item-box">
                    <div class="remember-me">
                        <div class="check-circle" :class="{'circle-checked':rememberMeChecked}" @click="rememberMe"></div>
                        <div class="check-text" @click="rememberMe">记住我</div>
                    </div>
                    <div class="forget-pwd" @click="forgetPWD">忘记密码</div>
                </div>
            </div>
            <!-- 其它登录方式 -->
            <div class="other-login-options-box">
                <el-divider><span>其它登录方式</span></el-divider>
                <div class="options-box">
                    <div class="qq"></div>
                    <div class="wx"></div>
                    <div class="zfb"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    const Base64 = require('js-base64').Base64
    import axios from "axios"
    import QS from 'qs'
    export default {
    name: '',
    data () {
        return {
            clientInfo:"开发端",
            focus1:false,
            focus2:false,
            btnText:"登录",
            loginStatus:false,
            ifCultureShow:false,
            bgImg:require("../assets/bg.jpg"),
            logo:require("../assets/logo.png"),
            userName:"",
            userPWD:"",
            rememberMeChecked:false,
            forgetPWDShow:false
        }
    },
    created() {
        // 在页面加载时从cookie获取登录信息
        let account = this.getCookie("zdCloudAccount")
        let password = Base64.decode(this.getCookie("zdCloudPassWord"))
        let remember=this.getCookie("zdCloudRememberMe")
        // 如果存在赋值给表单，并且将记住密码勾选
        if(remember==="1"){
            this.userName = account
            this.userPWD = password
            this.rememberMeChecked = true
        }else{
            this.userName = ""
            this.userPWD = ""
            this.rememberMeChecked = false
        }
    },
    methods: {
        usernameFocus(){
            this.focus1=true
        },
        usernameBlur(){
            this.focus1=false
        },
        passwordFocus(){
            this.focus2=true
        },
        passwordBlur(){
            this.focus2=false
        },
        // 登录
        goLogin(){
            console.log("login")
            //   判断用户名和密码是否为空
            if(this.userName&&this.userPWD){
                var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
				var mailreg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
				var localurl = "http://192.168.2.32:8080";
				var serverurl = "http://192.168.20.22";
				var apptoken = null;
				var access_token = null;
                var type = null;
                // 判断登陆账户类型
                if(myreg.test(this.userName)){
					type = "Mobile";
				}else if(mailreg.test(this.userName)){
					type = "Email";
				}else {
					type = "UserName";
				}
                let getAppTokenData={
                        appId:"login",
                        appSecuret: "zda123",
                        tenantCode:"ierp",
                        accountId:"782515930994313216",    //dev:782515930994313216   test:782379929319768064  产品:802830670727481344
                        language:"zh_CN"
                    }
                /**
                 * @author zhang fq
                 * @date   2020-02-12
                 * @description   调用getAppToken接口获取app_token
                 */
                // 获取apptoken
                axios.post(
                    localurl+"/ierp/api/getAppToken.do",
                    getAppTokenData,
                    // {headers:{"Content-Type":"application/json"}}
                    ).then(
                    res=>{
                        console.log("getAppToken res>>>",res)
                        if("success"===res.data.state){
                            apptoken = res.data.data.app_token;
                            console.log(apptoken)
                            /**
                             * @author zhang fq
                             * @date   2020-02-12
                             * @description   调用login.do接口获取access_token
                            */
                            let sendData={
                                    user:this.userName,
                                    apptoken:apptoken,
                                    tenantid:"ierp",
                                    accountId:"782515930994313216",
                                    usertype:type
                                }
                            // 获取accessToken
                            axios.post(localurl+"/ierp/api/login.do",sendData).then(
                                res=>{
                                    console.log("access_token res>>>",res)
                                    if("success"===res.data.state){
                                        access_token=res.data.data.access_token
                                        // 获取access_token成功后调用登录接口开始登录
                                        
                                        let sendData={
                                            user:this.userName,
                                            password:this.userPWD,
                                            usertype:type
                                        }
                                        // http://192.168.20.22/ierp/kapi/app/sxzd_login/sxzd_user_login
                                        axios.post(serverurl+"/ierp/kapi/app/sxzd_login/sxzd_user_login",JSON.stringify(sendData),
                                            {headers:{"access_token":access_token}}).then(
                                            res=>{
                                                console.log("login res>>>",res)
                                                if(res.success){
                                                    //登录成功后拼接url 跳转
                                                    var url = localurl+ "/ierp/accessTokenLogin.do?access_token="+access_token+"&redirect="+localurl+"/ierp/index.html?formId=pc_main_console#/dform?formId=pc_main_console"
                                                    this.setUserInfo()  //设置是否记住密码 储存登录信息
                                                    window.location.href = url;  //跳转
                                                }else{
                                                    alert(res.message)
                                                }
                                            },
                                            err=>{
                                                console.log("login err>>>",err)
                                                alert("网络错误，请稍后重试...")
                                            }
                                        )
                                        
                                    }else{
                                        alert(res.data.errorMsg)
                                    }
                                },
                                err=>{
                                    console.log("login err>>>",err)
                                    alert("网络错误，请稍后重试...")
                                }
                            )

                        }else{
                            alert(res.data.errorMsg)
                        }
                    },
                    err=>{
                        console.log("getAppToken err>>>",err)
                        alert("网络错误，请稍后重试...")
                    }
                )
            }else{
                alert("用户名或密码不能为空")
                return 
            }
        },
        //   记住我
        rememberMe(){
            this.rememberMeChecked=!this.rememberMeChecked
        },
        //   忘记密码
        forgetPWD(){
            //   忘记密码
            this.forgetPWDShow=true
        },
        // 储存用户账户信息
        setUserInfo() {
            // 判断用户是否勾选记住密码，如果勾选，向cookie中储存登录信息，
            // 如果没有勾选，储存的信息为空
            if(this.rememberMeChecked){
                console.log("记住")
                this.setCookie("zdCloudAccount",this.userName,7)
                // base64加密密码
                let passWord = Base64.encode(this.userPWD)
                this.setCookie("zdCloudPassWord",passWord,7)
                this.setCookie("zdCloudRememberMe","1",7)    
            }else{
                console.log("不记")
                this.setCookie("zdCloudAccount","")
                this.setCookie("zdCloudPassWord","") 
                this.setCookie("zdCloudRememberMe","") 
            } 
        },
        // 获取cookie
        getCookie(key) {
            if (document.cookie.length > 0) {
            var start = document.cookie.indexOf(key + '=')
            if (start !== -1) {
                start = start + key.length + 1
                var end = document.cookie.indexOf(';', start)
                if (end === -1) end = document.cookie.length
                return unescape(document.cookie.substring(start, end))
            }
            }
            return ''
        },
        // 保存cookie
        setCookie: function (cName, value, expiredays) {
            console.log("here>> setCookie")
            var exdate = new Date()
            exdate.setDate(exdate.getDate() + expiredays)
            document.cookie = cName + '=' + decodeURIComponent(value) +
            ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
        },
  }
}
</script>

<style scoped lang=scss>
.login-page{
    width: 100%;
    height: 100%;

    .content{
        width: 100%;
        height: 100%;
        display: flex;

        .content-left{
            flex-grow: 1;
            height: 100%;
            overflow: hidden;
        }

        .content-right{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            flex-shrink: 1;
            flex-basis: 440px;
            width: 440px;
            overflow: hidden;

            .top-info{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 20px;
            
                span{
                    margin-right: 20px;
                    color: #4DA1FF;
                    font-size: 14px;
                }
            }

            .logo-box{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 130px;

                img{
                    /* width: 170px; */
                    max-height: 53px;
                }
            }

            .input-box{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin-top: 80px;

                .login-title{
                    font-size: 18px;
                    color: #333333;
                    line-height: 30px;
                    margin-bottom: 80px;

                }

                .input-wrap{
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #d7d7d7;
                    height: 45px;
                    width: 300px;
                    font-size: 14px;
                    color: #666666;
                    padding: 0 2px;
                    margin-bottom: 20px;

                    input{
                        display: flex;
                        align-self: center;
                        height: 25px;
                        border: none;
                        outline: none;
                        padding-left: 1px;
                        flex-grow: 1;
                        font-size: 14px;
                        color: #333333;
                        box-shadow: inset 0 0 0 1000px #fff;
                    }

                    input::placeholder{
                        color:#999;
                    }
                }
                .input-wrap-focus{
                    border-bottom: 1px solid #4DA1FF;
                }

                .login-btn{
                    display: flex;
                    width: 300px;
                    height: 45px;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    background-color: #438ffa;
                    margin-top: 25px;
                    margin-bottom: 15px;
                    border-radius: 2px;
                    cursor: pointer;
                    font-size: 14px;
                    border: none;
                    outline: none;

                    &:hover{
                        background-color: #6ba7f8;
                    }
                }

                .other-item-box{
                    width: 300px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;

                    .remember-me{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                       .check-circle{
                           width: 14px;
                           height: 14px;
                           border-radius: 50%;
                           border: 1px solid #bfbfbf;
                           margin-right: 5px;
                           cursor: pointer;
                           background-image:none;
                           box-sizing: border-box;
                           /* &:hover{
                               border: 1px solid #4DA1FF;
                           } */
                       }

                       .circle-checked{
                           background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAZpJREFUOBGVkz1LA0EQhmf29iR1KiWQ0kZIa2GXRMUfoIKdooUYNBEEy7SCqEWCjYi2+gPEkAQbCytB0FoitrE3lxtn9lzZnHeg2+zHzPPOzO4sQmzMN2hqGATrBDQHgPnITD0EbHlan91W8NlF0G4Wr2is/z48QqBNhpU9d2cWCQnwNJvzdq+X8FNsRiCCgxsAKrpA+hq72ZxeEBETSSL/HRZZKkYMZ2BqHgRPaWmnZSHleL4uqO8LS6w5DiPiB4OHXPebBBRWRbcdd/29Z7APSpfaNX+P1xfiISxHtk/FJwgvHKUjRncY2NPl9jY+lho0GSJsRHbMj6SuFay2q36ZRQ6sQBzGQXAHROPWzgLUs5thCDt1IsUi+yKSBHPaE9ZfWMVOLXtABCv3J4NzK5LJ6IJNWyKPwlIxthKfkdO6nKn6a3XEUGpOgc0zmk4sHQcNgHDLZiIzl/DAKb4C4SxHzrq2aK2anZqumEuU3mak6zoR0TSXtJwMSysLA2AEpKelt3nb5LpCV8hdRzbVtP9AbD+/0Tr+9zt/Ack/yJfwJeAXAAAAAElFTkSuQmCCAA==");
                           background-size: 14px 14px;
                           border:none;
                       }
                       
                       .check-text{
                           font-size: 12px;
                           color: #666;
                           cursor: pointer;
                       }
                    }

                    .forget-pwd{
                        font-size: 12px;
                        color: #666;
                        cursor: pointer;
                    }
                }
            }

            .other-login-options-box{
                width: 300px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin-top: 120px;

                span{
                    font-size: 12px;
                    color: #aaa;
                }

                .options-box{
                    width: 100%;
                    display: flex;
                    justify-content:space-around;
                    align-items: center;

                    .qq{
                        width: 35px;
                        height: 35px;
                        background:url("../assets/qq2.png");
                        background-size: 35px 35px;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        &:hover{
                            background-image:url("../assets/qq1.png");
                            
                        }
                    }

                    .wx{
                        width: 35px;
                        height: 35px;
                        background:url("../assets/weixin2.png");
                        background-size: 35px 35px;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        &:hover{
                            background-image:url("../assets/weixin1.png");
                            
                        }
                    }

                    .zfb{
                        width: 35px;
                        height: 35px;
                        background:url("../assets/zhifubao2.png");
                        background-size: 35px 35px;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        &:hover{
                            background-image:url("../assets/zhifubao1.png");
                            
                        }
                    }
                }
            }
        }
    }
}


</style>