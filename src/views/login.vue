<template>
  <page>
    <bar :barTitle="'登录'" :nav="false" :icons="['']" :barStyle="'bar-light'"></bar>
    <page-content>
      <div class="discount-wrap">
        <div class="wrap-item line">
          <div class="item-left">
            <div class="word-text">账户</div>
            <div class="word-input">
              <input type="text" v-model.trim="username" placeholder="手机号/邮箱/会员名">
            </div>
          </div>
        </div>
        <div class="wrap-item">
          <div class="item-left">
            <div class="word-text">登录密码</div>
            <div class="word-input">
              <input type="password" v-model="password" placeholder="请输入密码">
            </div>
          </div>
        </div>
      </div>
      <!-- confirm 去掉disabled背景变红 -->
      <div class="btn-box">
        <input type="button" @click="login" class="dis-confirmbtn" :disabled="(username == '' || password == '') ? true : false" value="登 录">
      </div>

      <div class="other-link">
        <router-link :to="'/reg'" class="ft-left">免费注册</router-link>
        <router-link :to="'/reg'" class="ft-right">忘记密码</router-link>
      </div>
    </page-content>
  </page>
</template>

<script lang="babel">
import { Bar } from '../components/bar';
import { Page, PageContent } from '../components/page';
import api from '../api/index';
import db from '../db';
import Mint from 'mint-ui';
import { Toast } from 'mint-ui';
import 'mint-ui/lib/style.css';

export default {
  name: 'login',
  components: {
    Page,
    PageContent,
    Bar,
    Toast,
  },
  data() {
    return {
      username: '',
      password: '',
      actions: [
        {
          name: '1',
          method: function(){
            alert(1);
          }
        }
      ],
      sheetVisible: true
    };
  },
  methods: {
    login() {
      api.login({
        "username": this.username,
        "password": this.password
      }).then((data) => {
        if (data.body.status === 1) {
          db.set('user', this.username);
          this.$router.push('/');
        } else {
          // alert(data.body.msg)
          Toast(data.body.msg);
        }
      }, () => {
        alert('请求失败');
      })

    }
  },
};
</script>

<style lang="scss">
@import "../components/tobe/function";
.discount-wrap{
  margin-top: rem(40);
  .wrap-item{
    @extend %comm-flex;
    @include justify-content(center);
    height: rem(88);
    background-color: #ffffff;
    color: #333333;
    .item-left{
      @extend %comm-flex;
      @include flex(1);
      height: 100%;
    }
    .item-right{
      width: rem(238);
      height: rem(88);
      font-size: rem(28);
      color: #ffffff;
      text-align: center;
      border: none;
      padding: 0;
      img{
        height: 100%;
        width: auto;
      }
    }
    .word-text{
      width: rem(170);
      font-size: rem(32);
      color: #6C6C6C;
      padding-left: rem(22);
    }
    .word-input{
      @include flex(0.9);
      height: 100%;
      input{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        font-size: rem(28);
        color: #333333;
        opacity: 1;
        &::-webkit-input-placeholder{
          color: #bbbbbb;
        }
      }
    }
    &.line{
      position: relative;
      @include hairline(bottom, #e7e7e7);
    }
  }
}
.btn-box{
  padding: rem(40) rem(20) 0;
}
.dis-confirmbtn{

  background-color: #f40;
  color: #ffffff;
  height: rem(88);
  border-radius: 4px;
  font-size: rem(36);
  text-align: center;
  // @extend %comm-flex;
  // @include justify-content(center);
  border: 0;
  width: 100%;
  opacity: 1;
  &[disabled],&.disabled{
    background-color: #f40;
    color: #ffa286;
    opacity: 1;
  }

}

.other-link{
  font-size: rem(32);
  overflow: hidden;
  a{
    color: #f40;
  }
  padding: rem(20);
  .ft-left{
    float: left;
  }
  .ft-right{
    float: right;
  }
}
</style>
