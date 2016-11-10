<template>
  <page>
    <bar :barTitle="'注册'" :nav="false" :icons="['']" :barStyle="'bar-light'"></bar>
    <page-content>
      <div class="discount-wrap">
        <div class="wrap-item line">
          <div class="item-left">
            <div class="word-text">账户名</div>
            <div class="word-input">
              <input type="text" v-model="username" placeholder="手机号/邮箱/会员名">
            </div>
          </div>
        </div>
        <div class="wrap-item line">
          <div class="item-left">
            <div class="word-text">密码</div>
            <div class="word-input">
              <input type="password" v-model="password" placeholder="请输入密码">
            </div>
          </div>
        </div>
        <div class="wrap-item line">
          <div class="item-left">
            <div class="word-text">确认密码</div>
            <div class="word-input">
              <input type="password" v-model="confirmPassword" placeholder="请再次输入密码">
            </div>
          </div>
        </div>
        <div class="wrap-item">
          <div class="item-left">
            <div class="word-text">验证码</div>
            <div class="word-input">
              <input type="text" v-model="code" placeholder="请输入验证码" maxlength="8">
            </div>
          </div>
          <div class="item-right"><img src="http://localhost:3000/capt/code" onclick="javascript:this.src='http://localhost:3000/capt/'+Math.random()"></div>
        </div>

      </div>
      <!-- confirm 去掉disabled背景变红 -->
      <div class="btn-box">
        <input type="button" @click="reg" class="dis-confirmbtn" :disabled="(username == '' || password == '' || confirmPassword == '' || code == '') ? true : false" value="登 录">
      </div>
    </page-content>
  </page>
</template>

<script lang="babel">
import { Bar } from '../components/bar';
import { Page, PageContent } from '../components/page';
import api from '../api/index';
import db from '../db';

export default {
  name: 'reg',
  components: {
    Page,
    PageContent,
    Bar,
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      code: '',
    };
  },
  methods: {
    reg() {
      api.reg({
        "username": this.username,
        "password": this.password,
        "confirmPassword": this.confirmPassword,
        "code": this.code
      }).then((data) => {
        if (data.body.status === 1) {
          db.set('user', this.username);
          this.$router.push('/');
        } else {
          alert(data.body.msg)
        }
      }, () => {
        alert('请求失败');
      })


    },
  },
};
</script>
