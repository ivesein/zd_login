<template>
  <div class='login-page'>
    <div class="content">
      <div
        class="content-left"
        :style="{backgroundImage: 'url(' +  bgImg + ')',backgroundPosition:'center center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}"
      >
        <div
          class="custom-info"
          v-show="ifCultureShow"
        >
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
          <img
            :src="logo"
            alt=""
          >
        </div>
        <div
          class="input-box login-input-box"
          v-if="loginShow"
        >
          <span class="login-title">公路云{{clientInfo}}账号登录</span>
          <div class="notification_content">
            <div
              class="notification_box"
              v-show="ifNotice"
            >
              <img
                class="notice-img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABGRJREFUSA2VVj1oXEcQntl3J4WAi3AhChYhqIlrdWqEScC9wG4sgouADS7SOD+2xMmESOTyQ6p0gbgwQWksUOfCuDBqBClUqzIkkVKpDME+6W2+b2bn3dPpEsUr7c3u/H0z8+btW5X/MfLavXmp8xLmoojOwuRiMTsUyQeSdAdzW9e/3jvPnf6XQu6vXJNcb0Dnkull/NKCdNJQ2RdNfd0YPJokJm8iYF7vz8mL4SYcL7QBxvFUVXLOQjo2dmW6s6xrG8/H+GcB85crl+VYtqDYgzeEBGekrzz0SLpyVe8PnrVNT4XmYPkJQLptpViP40csZxMsFipDSXKlDZoaZyxjRmZV6mYmxVASSlYo11phU+lTfX36XX3twpuS0k/Go07oBaWtIEfRLXtEBagBBMQmHniPhpqSzVibs3Bayad674vfdHX1SC70PkYGJwzGZoAVXfrB6JnvNmD+qn8N+wUY+zMjxfTsnDaZdtNfxVb0zp2/EVkLMIBBWefwp7JQMIxFjxtNlBEtS8gIC7U1ndSdmQDMg8EbyH6KwURAQc/4U2BgdPJgbR7q9p6xF60RwiMpnMWw9s91Ayjp+C0q8I8j40+RAykHuQygSC8Rq4M0lkRrVzBEKLi+l4RrlobD5HkEqC/fLt5M7AHBPtoW+rZs/KWljqS8GHsqWpTFINZNxMbXFmA1I6luMnJU+20CCB/OzYsdvAazmj1Df88AWiKwACxKL4oVR9uAKC+CCKnJvQwNalsK5ixKyoPYTUpiXgaagG3lLR4toCStDNOMZ1/sYcKnWNQb6FYFL6Kk1HKVOBdJbVgEluJo284Q4CP3xcSJ65d1BMDw8YbLIfGsmyp0GNYKymkZFmph85WRVtMklBe8sD+Pol/+ZJceqOb3GAzz8sbhbrSOrjN5SnP5h/UPcGj9Li9ra7iQu1X71wKkp2AesKQ7Oev75LCC3jghb6lS7mxqPcUXBZmhoMXGRRYSlqQT/e0kqWRb7TTx0nB9XmlCHrph76cSImDpJ82qu5309v09ZLnP5qFhUF8jg5ahO06PdWr6HU44fUweOsEm0+Xa0mbq+Pc1qezr7ZU9inHAVX2POrIjdbCg5pgOOt1bevPuH5xc0y4A/FMFO3zGOM22UGIQygD15uojdOWuZwcWuZg0COrApk67ZvgBjy1FRT8CiAwR7C4xaNThj43pqWUdDn/FO9hDfMbyBkKk3gOli49/zD9/c8sUXmCNQyq6dFyfVYH0SKa6y6bPXSxI84NvL0s+eYLTo1wxTnedqwdvfOe9SYclPjjXIWp7RT/6/FngnAI00IcArU+2YIUv9elhBzHc+HEGWWA3CHBX3itU90hSdVVvjMDo7Qwgmfnhd3MA3YTjBe5j8BEVf4VF80ClrFwZs6AfqmW98dnzsA06ETCEeFa4CMsGHPlFOAT/QvEscRGWvn5499UuwuP+8i/fz8vJEB/qtCh1PYv3z6/6dT7Eze0At/MdwUut1z8596r/D8aUc/TWyHjBAAAAAElFTkSuQmCC"
                alt=""
              >
              <span class="notice-text">{{noticeInfoText}}</span>
              <i
                class="el-icon-close"
                @click="closeNotice"
              ></i>
            </div>
          </div>
          <div
            class="input-wrap"
            :class="{'input-wrap-focus':focus1}"
          >
            <input
              type="text"
              v-model="userName"
              class="input-item username"
              @focus="usernameFocus"
              @blur="usernameBlur"
              placeholder="用户名/手机号/邮箱"
            >
          </div>
          <div
            class="input-wrap"
            :class="{'input-wrap-focus':focus2}"
          >
            <input
              type="password"
              v-model="userPWD"
              class="input-item password"
              @focus="passwordFocus"
              @blur="passwordBlur"
              placeholder="登录密码"
            >
          </div>
          <div
            class="login-btn"
            @click="goLogin"
          >
            {{btnText}}
          </div>
          <div class="other-item-box">
            <div class="remember-me">
              <div
                class="check-circle"
                :class="{'circle-checked':rememberMeChecked}"
                @click="rememberMe"
              ></div>
              <div
                class="check-text"
                @click="rememberMe"
              >记住我</div>
            </div>
            <div
              class="forget-pwd"
              @click="forgetPWD"
            >忘记密码</div>
          </div>
        </div>
        <div
          class="input-box forget-input-box"
          v-if="forgetPWDShow"
        >
          <span class="login-title">账号验证</span>
          <div class="notification_content">
            <div
              class="notification_box"
              v-show="ifFNotice"
            >
              <img
                class="notice-img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABGRJREFUSA2VVj1oXEcQntl3J4WAi3AhChYhqIlrdWqEScC9wG4sgouADS7SOD+2xMmESOTyQ6p0gbgwQWksUOfCuDBqBClUqzIkkVKpDME+6W2+b2bn3dPpEsUr7c3u/H0z8+btW5X/MfLavXmp8xLmoojOwuRiMTsUyQeSdAdzW9e/3jvPnf6XQu6vXJNcb0Dnkull/NKCdNJQ2RdNfd0YPJokJm8iYF7vz8mL4SYcL7QBxvFUVXLOQjo2dmW6s6xrG8/H+GcB85crl+VYtqDYgzeEBGekrzz0SLpyVe8PnrVNT4XmYPkJQLptpViP40csZxMsFipDSXKlDZoaZyxjRmZV6mYmxVASSlYo11phU+lTfX36XX3twpuS0k/Go07oBaWtIEfRLXtEBagBBMQmHniPhpqSzVibs3Bayad674vfdHX1SC70PkYGJwzGZoAVXfrB6JnvNmD+qn8N+wUY+zMjxfTsnDaZdtNfxVb0zp2/EVkLMIBBWefwp7JQMIxFjxtNlBEtS8gIC7U1ndSdmQDMg8EbyH6KwURAQc/4U2BgdPJgbR7q9p6xF60RwiMpnMWw9s91Ayjp+C0q8I8j40+RAykHuQygSC8Rq4M0lkRrVzBEKLi+l4RrlobD5HkEqC/fLt5M7AHBPtoW+rZs/KWljqS8GHsqWpTFINZNxMbXFmA1I6luMnJU+20CCB/OzYsdvAazmj1Df88AWiKwACxKL4oVR9uAKC+CCKnJvQwNalsK5ixKyoPYTUpiXgaagG3lLR4toCStDNOMZ1/sYcKnWNQb6FYFL6Kk1HKVOBdJbVgEluJo284Q4CP3xcSJ65d1BMDw8YbLIfGsmyp0GNYKymkZFmph85WRVtMklBe8sD+Pol/+ZJceqOb3GAzz8sbhbrSOrjN5SnP5h/UPcGj9Li9ra7iQu1X71wKkp2AesKQ7Oev75LCC3jghb6lS7mxqPcUXBZmhoMXGRRYSlqQT/e0kqWRb7TTx0nB9XmlCHrph76cSImDpJ82qu5309v09ZLnP5qFhUF8jg5ahO06PdWr6HU44fUweOsEm0+Xa0mbq+Pc1qezr7ZU9inHAVX2POrIjdbCg5pgOOt1bevPuH5xc0y4A/FMFO3zGOM22UGIQygD15uojdOWuZwcWuZg0COrApk67ZvgBjy1FRT8CiAwR7C4xaNThj43pqWUdDn/FO9hDfMbyBkKk3gOli49/zD9/c8sUXmCNQyq6dFyfVYH0SKa6y6bPXSxI84NvL0s+eYLTo1wxTnedqwdvfOe9SYclPjjXIWp7RT/6/FngnAI00IcArU+2YIUv9elhBzHc+HEGWWA3CHBX3itU90hSdVVvjMDo7Qwgmfnhd3MA3YTjBe5j8BEVf4VF80ClrFwZs6AfqmW98dnzsA06ETCEeFa4CMsGHPlFOAT/QvEscRGWvn5499UuwuP+8i/fz8vJEB/qtCh1PYv3z6/6dT7Eze0At/MdwUut1z8596r/D8aUc/TWyHjBAAAAAElFTkSuQmCC"
                alt=""
              >
              <span class="notice-text">{{fNoticeInfoText}}</span>
              <i
                class="el-icon-close"
                @click="closefNotice"
              ></i>
            </div>
          </div>
          <div
            class="input-wrap"
            :class="{'input-wrap-focus':focus3}"
          >
            <input
              type="text"
              v-model="forgetPWDuserName"
              class="input-item"
              @focus="fUsernameFocus"
              @blur="fUsernameBlur"
              placeholder="请输入手机号/邮箱"
            >
          </div>
          <div class="wrap-box">
            <div
              class="input-wrap"
              :class="{'input-wrap-focus':focus4}"
            >
              <input
                type="text"
                v-model="imgVerifyCode"
                class="input-item"
                @focus="imgVerifyCodeFocus"
                @blur="imgVerifyCodeBlur"
                placeholder="图形验证码"
              >
            </div>
            <div
              class="verifyImg-box"
              @click="getVerifyImg"
            >
              <img
                :src="verifyImg"
                alt=""
              >
            </div>
          </div>
          <div
            class="wrap-box"
            v-show="showVerifyCodeBox"
          >
            <div
              class="input-wrap"
              :class="{'input-wrap-focus':focus5}"
            >
              <input
                type="text"
                v-model="verifyCode"
                class="input-item"
                @focus="verifyCodeFocus"
                @blur="verifyCodeBlur"
                placeholder="手机验证码"
              >
            </div>
            <div
              class="count-down-box"
              :class="{'count-down-ing':ifCountDown}"
              @click="sendVerifyCode"
            >
              {{countDownText}}
            </div>
          </div>
          <div
            class="login-btn"
            @click="forgetPWDNext"
          >
            下一步
          </div>
          <div class="other-item-box">
            <div
              class="return-back"
              @click="goBackLogin"
            >
              < 返回登录
            </div>
          </div>
        </div>
        <div
          class="input-box reset-input-box"
          v-if="resetPWDShow"
        >
          <span class="login-title">修改密码</span>
          <div
            class="reset-input-content"
            v-if="!ifResetSuccess"
          >
            <div class="notification_content">
              <div
                class="notification_box"
                v-show="ifresetNotice"
              >
                <img
                  class="notice-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABGRJREFUSA2VVj1oXEcQntl3J4WAi3AhChYhqIlrdWqEScC9wG4sgouADS7SOD+2xMmESOTyQ6p0gbgwQWksUOfCuDBqBClUqzIkkVKpDME+6W2+b2bn3dPpEsUr7c3u/H0z8+btW5X/MfLavXmp8xLmoojOwuRiMTsUyQeSdAdzW9e/3jvPnf6XQu6vXJNcb0Dnkull/NKCdNJQ2RdNfd0YPJokJm8iYF7vz8mL4SYcL7QBxvFUVXLOQjo2dmW6s6xrG8/H+GcB85crl+VYtqDYgzeEBGekrzz0SLpyVe8PnrVNT4XmYPkJQLptpViP40csZxMsFipDSXKlDZoaZyxjRmZV6mYmxVASSlYo11phU+lTfX36XX3twpuS0k/Go07oBaWtIEfRLXtEBagBBMQmHniPhpqSzVibs3Bayad674vfdHX1SC70PkYGJwzGZoAVXfrB6JnvNmD+qn8N+wUY+zMjxfTsnDaZdtNfxVb0zp2/EVkLMIBBWefwp7JQMIxFjxtNlBEtS8gIC7U1ndSdmQDMg8EbyH6KwURAQc/4U2BgdPJgbR7q9p6xF60RwiMpnMWw9s91Ayjp+C0q8I8j40+RAykHuQygSC8Rq4M0lkRrVzBEKLi+l4RrlobD5HkEqC/fLt5M7AHBPtoW+rZs/KWljqS8GHsqWpTFINZNxMbXFmA1I6luMnJU+20CCB/OzYsdvAazmj1Df88AWiKwACxKL4oVR9uAKC+CCKnJvQwNalsK5ixKyoPYTUpiXgaagG3lLR4toCStDNOMZ1/sYcKnWNQb6FYFL6Kk1HKVOBdJbVgEluJo284Q4CP3xcSJ65d1BMDw8YbLIfGsmyp0GNYKymkZFmph85WRVtMklBe8sD+Pol/+ZJceqOb3GAzz8sbhbrSOrjN5SnP5h/UPcGj9Li9ra7iQu1X71wKkp2AesKQ7Oev75LCC3jghb6lS7mxqPcUXBZmhoMXGRRYSlqQT/e0kqWRb7TTx0nB9XmlCHrph76cSImDpJ82qu5309v09ZLnP5qFhUF8jg5ahO06PdWr6HU44fUweOsEm0+Xa0mbq+Pc1qezr7ZU9inHAVX2POrIjdbCg5pgOOt1bevPuH5xc0y4A/FMFO3zGOM22UGIQygD15uojdOWuZwcWuZg0COrApk67ZvgBjy1FRT8CiAwR7C4xaNThj43pqWUdDn/FO9hDfMbyBkKk3gOli49/zD9/c8sUXmCNQyq6dFyfVYH0SKa6y6bPXSxI84NvL0s+eYLTo1wxTnedqwdvfOe9SYclPjjXIWp7RT/6/FngnAI00IcArU+2YIUv9elhBzHc+HEGWWA3CHBX3itU90hSdVVvjMDo7Qwgmfnhd3MA3YTjBe5j8BEVf4VF80ClrFwZs6AfqmW98dnzsA06ETCEeFa4CMsGHPlFOAT/QvEscRGWvn5499UuwuP+8i/fz8vJEB/qtCh1PYv3z6/6dT7Eze0At/MdwUut1z8596r/D8aUc/TWyHjBAAAAAElFTkSuQmCC"
                  alt=""
                >
                <span class="notice-text">{{resetNoticeInfoText}}</span>
                <i
                  class="el-icon-close"
                  @click="closeResetNotice"
                ></i>
              </div>
            </div>
            <div
              class="input-wrap"
              :class="{'input-wrap-focus':focus6}"
            >
              <input
                type="password"
                v-model="newPWD"
                class="input-item"
                @focus="newPWDFocus"
                @blur="newPWDBlur"
                placeholder="请输入新密码"
              >
            </div>
            <div
              class="input-wrap"
              :class="{'input-wrap-focus':focus7}"
            >
              <input
                type="password"
                v-model="newPWDConfirm"
                class="input-item"
                @focus="newPWDConfirmFocus"
                @blur="newPWDConfirmBlur"
                placeholder="请再次输入新密码"
              >
            </div>
            <div
              class="login-btn"
              @click="resetConfirm"
            >
              确认修改
            </div>
          </div>
          <div
            class="reset-success"
            v-else
          >
            <img
              :src="successImg"
              alt=""
            >
            <span>密码修改成功！</span>
          </div>
          <div class="other-item-box">
            <div
              class="return-back"
              @click="goBackLogin"
            >
              < 返回登录
            </div>
          </div>
        </div>
        <!-- 其它登录方式 -->
        <div
          class="other-login-options-box"
          v-if="!forgetPWDShow"
        >
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
export default {
  name: '',
  data() {
    return {
      clientInfo: "开发端",   // "开发端"   "测试端"   "产品端"
      accountID: "782515930994313216",
      focus1: false,
      focus2: false,
      focus3: false,
      focus4: false,
      focus5: false,
      focus6: false,
      focus7: false,
      btnText: "登录",
      loginStatus: false,
      ifCultureShow: false,
      bgImg: require("../assets/bg.jpg"),
      logo: require("../assets/logo.png"),
      userName: "",
      userPWD: "",
      rememberMeChecked: false,
      loginShow: true, //是否显示登录面板 默认显示
      forgetPWDShow: false, //是否显示忘记密码面板
      resetPWDShow: false, //是否显示重置密码面板
      ifNotice: false,  //登陆面板的信息提示框显示标志位
      noticeInfoText: "",//登陆面板的提示信息
      ifFNotice: false, //找回密码面板的信息提示框显示标志位
      fNoticeInfoText: "",//找回密码面板的提示信息
      ifresetNotice: false, //修改密码面板提示框显示标志位
      resetNoticeInfoText: "",//修改密码面板的提示信息
      showVerifyCodeBox: false,
      forgetPWDuserName: "",
      imgVerifyCode: "",
      verifyCode: "",
      countDownText: "获取验证码",
      myinterval: null, //获取验证码倒计时定时器
      ifCountDown: false,
      loadVerifyImg: "data:image/gif;base64,R0lGODlhEAAQAKIHADZmvyRl1FZ5upOjxHWOv7G5yb2/w////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAHACwAAAAAEAAQAAADQ3i6B8CQORdXCG0eIeC92cZ11seMZBlxjGFUC0EcrgvLcv1W+GzDB1lrxxgMILqi8bhIFgqHJbP5ej6j04gVClxcIwkAIfkEBQAABwAsAAAAABAAEAAAAz94uifCkDkXFwBtHkLgvdnGddbHjGQZcUwQVMswHK4Ly3L9VvhswwcZcFEoDIlFI8xgOCSVESbTCY1Kj4ppJAEAIfkEBQAABwAsAAAAABAADgAAAzt4ukfEkDkXlxBtnjHgvdnGddbHjGQZcQwAVEtRHK4Ly3L9VvhswwcZIxCIGAwQIpFxPA6VzGayCHEqEgAh+QQFAAAHACwAAAAAEAAQAAADPni6N8OQORcXIW2eUuC92cZ11seMZBlxjCBUi2EcrgvLcv1W+GzDBxkDAAAOiUXjAVkMBIzEg9OplE6r1koCACH5BAUAAAcALAAAAAAOABAAAAM8eLpXxVA5F88YbR5j1r3ZxnXWx4xkGXEKQVSM68KtTNc3IwhRECy7HcPnUwR5AMCB+DMik8piBKq8JSEJACH5BAUAAAcALAAAAAAQABAAAAM+eLpnxpA5F1cpbdZzb95cBzLeeAzDGAQnmlbr6r5RzKIquxBEBAAQHo/x+zGEPYHgUAQek8qlcRNdmg7KSgIAIfkEBQAABwAsAAACABAADgAAAz54aqZ+IbzD2Ivx1eaw1Nz1KUUxTQBwlOWppClrurDauq/qDMMpCBMe7/H7PYQ9AuFQBB6TyqURF13iHkpXAgAh+QQFAAAHACwAAAAAEAAQAAADPni6F8GQORfjfADURXPejKeBy7cYBikIB4pu6+qmVcy+4MoURUQQEB6P8fvthIfB4FAEHpPKpXETXZIUykoCADs=",
      verifyImg: "",
      apptoken: null,
      access_token: null,
      myreg: /^[1][3,4,5,7,8][0-9]{9}$/, //手机号正则
      mailreg: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/, //邮箱正则
      localurl: "http://192.168.2.32:8080",
      serverurl: "http://192.168.20.22",
      vCode: "",
      newPWD: "",//新密码
      newPWDConfirm: "", //新密码确认
      successImg: require("../assets/success.png"),
      ifResetSuccess: false,
      isOkey: false
    }
  },
  created() {
    this.setRememberInfo()
    this.setAccountId()
  },
  methods: {
    //页面加载时从cookie获取用户信息
    setRememberInfo() {
      let account = this.getCookie("zdCloudAccount")
      let password = Base64.decode(this.getCookie("zdCloudPassWord"))
      let remember = this.getCookie("zdCloudRememberMe")
      // 如果存在赋值给表单，并且将记住密码勾选
      if (remember === "1") {
        this.userName = account
        this.userPWD = password
        this.rememberMeChecked = true
      } else {
        this.userName = ""
        this.userPWD = ""
        this.rememberMeChecked = false
      }
    },
    //设置数据中心id
    setAccountId() {
      switch (this.clientInfo) {
        case "开发端":
          this.accountID = "782515930994313216"
          break
        case "测试端":
          this.accountID = "782379929319768064"
          break
        case "产品端":
          this.accountID = "802830670727481344"
          break
        default:
          this.accountID = "782515930994313216"
      }
    },
    closeNotice() {
      this.ifNotice = false
    },
    closefNotice() {
      this.ifFNotice = false
    },
    closeResetNotice() {
      this.ifresetNotice = false
    },
    usernameFocus() {
      this.focus1 = true
    },
    usernameBlur() {
      this.focus1 = false
    },
    passwordFocus() {
      this.focus2 = true
    },
    passwordBlur() {
      this.focus2 = false
    },
    fUsernameFocus() {
      this.focus3 = true
    },
    fUsernameBlur() {
      this.focus3 = false
      // 验证账户输入完失去焦点时 调用后去图形验证码接口 获取图形验证码  刷新验证码图片
      if (this.forgetPWDuserName) {
        this.getVerifyImg()
      }
    },
    imgVerifyCodeFocus() {
      this.focus4 = true
    },
    imgVerifyCodeBlur() {
      this.focus4 = false
    },
    verifyCodeFocus() {
      this.focus5 = true
    },
    verifyCodeBlur() {
      this.focus5 = false
    },
    newPWDFocus() {
      this.focus6 = true
    },
    newPWDBlur() {
      this.focus6 = false
    },
    newPWDConfirmFocus() {
      this.focus7 = true
    },
    newPWDConfirmBlur() {
      this.focus7 = false
    },
    // 登录
    goLogin() {
      //判断是否登陆中 避免重复点击
      if (this.loginStatus) {
        return
      }
      console.log("login")
      //   判断用户名和密码是否为空
      if (this.userName && this.userPWD) {
        // 设置登录状态 和 按钮文字  避免重复点击
        this.btnText = "登陆中..."
        this.loginStatus = true
        this.apptoken = null;
        this.access_token = null;
        var type = null;
        // 判断登陆账户类型
        if (this.myreg.test(this.userName)) {
          type = "Mobile";
        } else if (this.mailreg.test(this.userName)) {
          type = "Email";
        } else {
          type = "UserName";
        }
        let getAppTokenData = {
          appId: "login",
          appSecuret: "zda123",
          tenantCode: "ierp",
          accountId: this.accountID,    //dev:782515930994313216   test:782379929319768064  产品:802830670727481344
          language: "zh_CN"
        }
        // 获取apptoken
        axios.post(
          "go/ierp/api/getAppToken.do",
          getAppTokenData,
        ).then(
          res => {
            console.log("getAppToken res>>>", res)
            if ("success" === res.data.state) {
              this.apptoken = res.data.data.app_token;
              console.log(this.apptoken)
              let sendData = {
                user: this.userName,
                apptoken: this.apptoken,
                tenantid: "ierp",
                accountId: this.accountID,
                usertype: type
              }
              // 获取accessToken
              axios.post("go/ierp/api/login.do", sendData).then(
                res => {
                  console.log("access_token res>>>", res)
                  if ("success" === res.data.state) {
                    this.access_token = res.data.data.access_token
                    // 获取access_token成功后调用登录接口开始登录

                    let sendData = {
                      user: this.userName,
                      password: this.userPWD,
                      usertype: type
                    }
                    axios.post("go/ierp/kapi/app/sxzd_login/sxzd_user_login", sendData,
                      { headers: { "Content-Type": "application/json", "access_token": this.access_token } }).then(
                        res => {
                          console.log("login res>>>", res)
                          if (res.data.success === true) {
                            //登录成功后拼接url 跳转
                            var url = this.serverurl + "/ierp/accessTokenLogin.do?access_token=" + this.access_token + "&redirect=" + this.serverurl + "/ierp/index.html?formId=pc_main_console#/dform?formId=pc_main_console"
                            this.setUserInfo()  //设置是否记住密码 储存登录信息
                            window.location.href = url;  //跳转
                          } else if (res.data.success === false) {
                            // alert(res.data.message)
                            this.setNoticeInfo(res.data.message)
                            this.btnText = "登陆"
                            this.loginStatus = false
                          } else {
                            // alert("登录失败，请重试...")
                            this.setNoticeInfo("登录失败，请重试...")
                            this.btnText = "登陆"
                            this.loginStatus = false
                          }
                        },
                        err => {
                          console.log("login err>>>", err)
                          this.setNoticeInfo("网络错误，请稍后重试...")
                          this.btnText = "登陆"
                          this.loginStatus = false
                        }
                      )

                  } else {
                    // alert(res.data.errorMsg)
                    this.setNoticeInfo(res.data.errorMsg)
                    this.btnText = "登陆"
                    this.loginStatus = false
                  }
                },
                err => {
                  console.log("login err>>>", err)
                  this.setNoticeInfo("网络错误，请稍后重试...")
                  this.btnText = "登陆"
                  this.loginStatus = false
                }
              )

            } else {
              // alert(res.data.errorMsg)
              this.setNoticeInfo(res.data.errorMsg)
              this.btnText = "登陆"
              this.loginStatus = false
            }
          },
          err => {
            console.log("getAppToken err>>>", err)
            this.setNoticeInfo("网络错误，请稍后重试...")
            this.btnText = "登陆"
            this.loginStatus = false
          }
        )
      } else {
        this.setNoticeInfo("用户名或密码不能为空")
        return
      }
    },
    setNoticeInfo(info, whichOne = 0) {
      switch (whichOne) {
        case 0:
          this.ifNotice = true;
          this.noticeInfoText = info
          setTimeout(() => {
            this.ifNotice = false
            this.noticeInfoText = ""
          }, 5000)
          break;
        case 1:
          this.ifFNotice = true
          this.fNoticeInfoText = info
          setTimeout(() => {
            this.ifFNotice = false
            this.fNoticeInfoText = ""
          }, 5000)
          break;
        case 2:
          this.ifresetNotice = true
          this.resetNoticeInfoText = info
          setTimeout(() => {
            this.ifresetNotice = false
            this.resetNoticeInfoText = ""
          }, 5000)
          break;
        default:
          this.ifNotice = true;
          this.noticeInfoText = info
          setTimeout(() => {
            this.ifNotice = false
            this.noticeInfoText = ""
          }, 5000)
      }
      // if(whichOne===0){
      //     this.ifNotice=true;
      //     this.noticeInfoText=info
      //     setTimeout(()=>{
      //         this.ifNotice=false
      //         this.noticeInfoText=""
      //     },5000)
      // }else if(whichOne===1){
      //     this.ifFNotice=true
      //     this.fNoticeInfoText=info
      //     setTimeout(()=>{
      //         this.ifFNotice=false
      //         this.fNoticeInfoText=""
      //     },5000)
      // }else if(whichOne===2){
      //     this.ifresetNotice=true
      //     this.resetNoticeInfoText=info
      //     setTimeout(()=>{
      //         this.ifresetNotice=false
      //         this.resetNoticeInfoText=""
      //     },5000)
      // }

    },
    // 记住我
    rememberMe() {
      this.rememberMeChecked = !this.rememberMeChecked
    },
    forgetPWD() {
      //   忘记密码
      this.loginShow = false
      this.forgetPWDShow = true
      this.resetPWDShow = false
      // 重置忘记密码面板
      this.resetForgetPWDPannal()
    },
    // 重置忘记密码面板 所有参数 并初始化图形验证码
    resetForgetPWDPannal() {
      // 将登录页的账号赋值给忘记密码面板的账号
      this.forgetPWDuserName = this.userName
      this.focus3 = false
      this.focus4 = false
      this.focus5 = false
      this.ifFNotice = false
      this.fNoticeInfoText = ""
      this.imgVerifyCode = ""
      this.verifyCode = ""
      this.countDownText = "获取验证码"
      this.ifCountDown = false
      this.verifyImg = this.loadVerifyImg
      this.showVerifyCodeBox = false
      this.isOkey = false
      clearInterval(this.myinterval)
      // 调用账户验证接口验证账户
      let param = {
        useraccount: this.forgetPWDuserName,
        accountId: this.accountID
      }
      axios.get(this.serverurl+"/ierp/auth/isNeedDisplayVerify.do", { params: param }).then(
        res => {
          console.log("账号验证res>>>", res)
          // 调用获取图形验证码接口 获取图形验证码
          this.getVerifyImg()
        },
        err => {
          console.log("账号验证err>>>", res)
          this.setNoticeInfo("网络错误，请稍后重试...", 1)
        }
      )

    },
    getVerifyImg() {
      let param = {
        phone: this.forgetPWDuserName
      }
      axios.get(this.serverurl+"/ierp/auth/getVerifyCode.do", { params: param }).then(
        res => {
          this.verifyImg = res.data.content
          this.vCode = res.data.vCode
        },
        err => {
          this.setNoticeInfo("网络错误，请稍后重试...", 1)
          this.verifyImg = this.loadVerifyImg
        }
      )
    },
    // 发送验证码按钮
    sendVerifyCode() {
      //判断是否已发送 并没有超过60秒 防止重复点击发送
      if (this.ifCountDown) return
      //调用获取验证码接口获取手机验证码
      let param = {
        phone: this.forgetPWDuserName,
        accountId: this.accountID,
        vCode: this.vCode
      }
      axios.get(this.serverurl+"/ierp/auth/verifyPhone.do", { params: param }).then(
        res => {
          console.log(res)
          if (res.data.success === true) {
            // 判断如果手机号正确 并且已成功发送 开始倒计时
            let time = 60
            this.myinterval = setInterval(() => {
              if (time > 0) time--
              if (time !== 0) {
                this.ifCountDown = true
                this.countDownText = "重新发送(" + time + ")"
              } else {
                clearInterval(this.myinterval)
                this.ifCountDown = false
                this.countDownText = "重新发送"
              }
            }, 1000)
          } else {
            this.setNoticeInfo(res.data.msg, 1)
            this.this.ifCountDown = false
          }
        },
        err => {
          console.log(err)
          this.setNoticeInfo("网络错误，请稍后重试...", 1)
          this.this.ifCountDown = false
        }
      )
    },
    // 忘记密码  验证账户 下一步
    forgetPWDNext() {
      if (this.forgetPWDuserName === "" || this.forgetPWDuserName === null || this.forgetPWDuserName === undefined) {
        this.setNoticeInfo("账号不能为空", 1)
        return
      }
      if (this.imgVerifyCode === "" || this.imgVerifyCode === null || this.imgVerifyCode === undefined) {
        this.setNoticeInfo("图形验证码不能为空", 1)
        return
      }
      if (this.showVerifyCodeBox) {
        if (this.verifyCode === "" || this.verifyCode === null || this.verifyCode === undefined) {
          this.setNoticeInfo("手机验证码不能为空", 1)
          return
        } else {
          //调用验证接口验证手机验证码是否正确
          let param = {
            phone: this.forgetPWDuserName,
            code: this.verifyCode,
            accountId: this.accountID
          }
          axios.get(this.serverurl+"/ierp/auth/verifyPhoneCode.do", { params: param }).then(
            res => {
              if (res.data.success === true) {
                //验证码正确  跳入重置密码页面
                this.loginShow = false
                this.forgetPWDShow = false
                this.resetPWDShow = true
              } else {
                this.setNoticeInfo(res.data.msg, 1)
              }
            },
            err => {
              this.setNoticeInfo("网络错误，请稍后重试...", 1)
            }
          )
        }
      } else {
        // 验证图形验证码是否正确
        let param = {
          phone: this.forgetPWDuserName,
          vCode: this.imgVerifyCode,
          token: this.vCode
        }
        axios.get(this.serverurl+"/ierp/auth/verifyCode4Pwd.do", { params: param }).then(
          res => {
            if (res.data.success === true) {
              let param = {
                phone: this.forgetPWDuserName,
                accountId: this.accountID,
                vCode: this.vCode
              }
              // 验证账号是否注册
              axios.get(this.serverurl+"/ierp/auth/verifyPhone.do", { params: param }).then(
                res => {
                  if (res.data.success === true) {
                    // 两步验证 正确  显示验证码输入框
                    this.showVerifyCodeBox = true
                    // 两步验证 正确  调用发送验证码接口发送手机验证码
                    this.sendVerifyCode()
                  } else {
                    this.setNoticeInfo(res.data.msg, 1)
                  }
                },
                err => {
                  this.setNoticeInfo("网络错误，请稍后重试...", 1)
                }
              )
            } else {
              this.setNoticeInfo(res.data.msg, 1)
            }
          },
          err => {
            this.setNoticeInfo("网络错误，请稍后重试...", 1)
          }
        )
      }
      //验证图形验证码是否正确


    },
    // 修改密码确认按钮
    resetConfirm() {
      if (this.newPWD === "" || this.newPWD === null || this.newPWD === undefined) {
        this.setNoticeInfo("新密码不能为空", 2)
        return
      }
      if (this.newPWDConfirm === "" || this.newPWDConfirm === null || this.newPWDConfirm === undefined) {
        this.setNoticeInfo("确认密码不能为空", 2)
        return
      }
      if (this.newPWDConfirm !== this.newPWD) {
        this.setNoticeInfo("两次输入的密码不一致", 2)
        return
      }
      //获取apptoken access_token
      this.apptoken = null;
      this.access_token = null;
      var type = null;
      // 判断登陆账户类型
      if (this.myreg.test(this.forgetPWDuserName)) {
        type = "Mobile";
      } else if (this.mailreg.test(this.forgetPWDuserName)) {
        type = "Email";
      } else {
        type = "UserName";
      }
      let getAppTokenData = {
        appId: "login",
        appSecuret: "zda123",
        tenantCode: "ierp",
        accountId: this.accountID,    //dev:782515930994313216   test:782379929319768064  产品:802830670727481344
        language: "zh_CN"
      }
      // 获取apptoken
      axios.post(
        "go/ierp/api/getAppToken.do",
        getAppTokenData,
      ).then(
        res => {
          console.log("getAppToken res>>>", res)
          if ("success" === res.data.state) {
            this.apptoken = res.data.data.app_token;
            console.log(this.apptoken)
            let sendData = {
              user: this.forgetPWDuserName,
              apptoken: this.apptoken,
              tenantid: "ierp",
              accountId: this.accountID,
              usertype: type
            }
            // 获取accessToken
            axios.post("go/ierp/api/login.do", sendData).then(
              res => {
                console.log("access_token res>>>", res)
                if ("success" === res.data.state) {
                  this.access_token = res.data.data.access_token
                  // 获取access_token成功后调用修改密码接口 修改密码
                  let param = {
                    user: this.forgetPWDuserName,
                    password: this.newPWD,
                    usertype: type
                  }
                  axios.post("go/ierp/kapi/app/sxzd_login/resetPwd", param,
                    { headers: { "Content-Type": "application/json", "access_token": this.access_token } }).then(
                      res => {
                        console.log("login res>>>", res)
                        if (res.data.success === true) {
                          //修改成功
                          this.ifResetSuccess = true
                        } else if (res.data.success === false) {
                          this.setNoticeInfo(res.data.message, 2)
                        } else {
                          // alert("登录失败，请重试...")
                          this.setNoticeInfo("登录失败，请重试...", 2)
                        }
                      },
                      err => {
                        console.log("login err>>>", err)
                        this.setNoticeInfo("网络错误，请稍后重试...", 2)
                      }
                    )

                } else {
                  this.setNoticeInfo(res.data.errorMsg, 2)
                }
              },
              err => {
                console.log("login err>>>", err)
                this.setNoticeInfo("网络错误，请稍后重试...", 2)
              }
            )
          } else {
            // alert(res.data.errorMsg)
            this.setNoticeInfo(res.data.errorMsg, 2)
          }
        },
        err => {
          console.log("getAppToken err>>>", err)
          this.setNoticeInfo("网络错误，请稍后重试...", 2)
        }
      )

    },
    //返回登录
    goBackLogin() {
      this.loginShow = true
      this.forgetPWDShow = false
      this.resetPWDShow = false
    },
    // 储存用户账户信息
    setUserInfo() {
      // 判断用户是否勾选记住密码，如果勾选，向cookie中储存登录信息，
      // 如果没有勾选，储存的信息为空
      if (this.rememberMeChecked) {
        console.log("记住")
        this.setCookie("zdCloudAccount", this.userName, 7)
        // base64加密密码
        let passWord = Base64.encode(this.userPWD)
        this.setCookie("zdCloudPassWord", passWord, 7)
        this.setCookie("zdCloudRememberMe", "1", 7)
      } else {
        console.log("不记")
        this.setCookie("zdCloudAccount", "")
        this.setCookie("zdCloudPassWord", "")
        this.setCookie("zdCloudRememberMe", "")
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
.login-page {
  width: 100%;
  height: 100%;

  .content {
    width: 100%;
    height: 100%;
    display: flex;

    .content-left {
      flex-grow: 1;
      height: 100%;
      overflow: hidden;
    }

    .content-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-shrink: 1;
      flex-basis: 440px;
      width: 440px;
      overflow: hidden;

      .top-info {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 20px;

        span {
          margin-right: 20px;
          color: #4da1ff;
          font-size: 14px;
        }
      }

      .logo-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 130px;

        img {
          /* width: 170px; */
          max-height: 53px;
        }
      }

      .input-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 80px;

        .login-title {
          font-size: 18px;
          color: #333333;
          line-height: 30px;
          margin-bottom: 20px;
        }

        .notification_content {
          width: 300px;
          height: 45px;
        }

        .notification_box {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 300px;
          height: 45px;
          background-color: #ffe7e4;
          color: #fd6c6a;
          border-radius: 10px;
          margin-bottom: 20px;

          .notice-img {
            margin: 0 10px;
            width: 28px;
            height: 28px;
          }

          .notice-text {
            font-size: 14px;
            flex-grow: 1;
          }

          .el-icon-close {
            font-size: 18px;
            cursor: pointer;
            margin-right: 10px;
          }
        }

        .wrap-box {
          width: 300px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .verifyImg-box {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 115px;
            padding-left: 15px;
            height: 45px;
          }

          .count-down-box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 115px;
            margin-left: 10px;
            margin-bottom: 9px;
            height: 30px;
            font-size: 12px;
            color: #438ffa;
            background: #fff;
            border: 1px solid #438ffa;
            cursor: pointer;
          }

          .count-down-ing {
            color: #aaa;
            border: 1px solid #ccc;
            background: #f1f1f1;
          }
        }

        .input-wrap {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #d7d7d7;
          height: 45px;
          width: 300px;
          font-size: 14px;
          color: #666666;
          padding: 0 2px;
          margin-bottom: 20px;

          input {
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

          input::placeholder {
            color: #999;
          }
        }
        .input-wrap-focus {
          border-bottom: 1px solid #4da1ff;
        }

        .login-btn {
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

          &:hover {
            background-color: #6ba7f8;
          }
        }

        .other-item-box {
          width: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;

          .remember-me {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .check-circle {
              width: 14px;
              height: 14px;
              border-radius: 50%;
              border: 1px solid #bfbfbf;
              margin-right: 5px;
              cursor: pointer;
              background-image: none;
              box-sizing: border-box;
              /* &:hover{
                               border: 1px solid #4DA1FF;
                           } */
            }

            .circle-checked {
              background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAZpJREFUOBGVkz1LA0EQhmf29iR1KiWQ0kZIa2GXRMUfoIKdooUYNBEEy7SCqEWCjYi2+gPEkAQbCytB0FoitrE3lxtn9lzZnHeg2+zHzPPOzO4sQmzMN2hqGATrBDQHgPnITD0EbHlan91W8NlF0G4Wr2is/z48QqBNhpU9d2cWCQnwNJvzdq+X8FNsRiCCgxsAKrpA+hq72ZxeEBETSSL/HRZZKkYMZ2BqHgRPaWmnZSHleL4uqO8LS6w5DiPiB4OHXPebBBRWRbcdd/29Z7APSpfaNX+P1xfiISxHtk/FJwgvHKUjRncY2NPl9jY+lho0GSJsRHbMj6SuFay2q36ZRQ6sQBzGQXAHROPWzgLUs5thCDt1IsUi+yKSBHPaE9ZfWMVOLXtABCv3J4NzK5LJ6IJNWyKPwlIxthKfkdO6nKn6a3XEUGpOgc0zmk4sHQcNgHDLZiIzl/DAKb4C4SxHzrq2aK2anZqumEuU3mak6zoR0TSXtJwMSysLA2AEpKelt3nb5LpCV8hdRzbVtP9AbD+/0Tr+9zt/Ack/yJfwJeAXAAAAAElFTkSuQmCCAA==");
              background-size: 14px 14px;
              border: none;
            }

            .check-text {
              font-size: 12px;
              color: #666;
              cursor: pointer;
            }
          }

          .forget-pwd {
            font-size: 12px;
            color: #666;
            cursor: pointer;

            &:hover {
              color: #4da1ff;
            }
          }

          .return-back {
            font-size: 14px;
            color: #5e74a0;
            cursor: pointer;

            &:hover {
              color: #4da1ff;
            }
          }
        }

        .reset-success {
          width: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 80px 0;

          img {
            width: 80px;
            height: 80px;
            margin-right: 10px;
          }

          span {
            font-size: 16px;
            color: #666;
          }
        }
      }

      .other-login-options-box {
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 120px;

        span {
          font-size: 12px;
          color: #aaa;
        }

        .options-box {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .qq {
            width: 35px;
            height: 35px;
            background: url("../assets/qq2.png");
            background-size: 35px 35px;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            &:hover {
              background-image: url("../assets/qq1.png");
            }
          }

          .wx {
            width: 35px;
            height: 35px;
            background: url("../assets/weixin2.png");
            background-size: 35px 35px;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            &:hover {
              background-image: url("../assets/weixin1.png");
            }
          }

          .zfb {
            width: 35px;
            height: 35px;
            background: url("../assets/zhifubao2.png");
            background-size: 35px 35px;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            &:hover {
              background-image: url("../assets/zhifubao1.png");
            }
          }
        }
      }
    }
  }
}
</style>