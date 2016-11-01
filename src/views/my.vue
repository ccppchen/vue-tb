<template>
  <page>
    <header class="bar bar-header bar-my">
      <div class="bar-left">
        <router-link :to="'/class'" class="button small-button">设置</router-link>
      </div>
      <div class="bar-right">
        <router-link :to="'/class'">
          <div class="button iconfont message"></div>
        </router-link>

      </div>
    </header>
    <page-content>
      <scroll :on-refresh="onRefresh" :enableInfinite="false">
        <div class="my-title-box">
          <div><img class="user-photo" src="//gw.alicdn.com/tfscom/TB1_n4PKXXXXXcYXXXXNx3t4VXX-120-120.jpg_q30"></div>
          <p class="user-nime">陈鹏2016</p>
        </div>
        <list class="column-wrap">
          <list-item :url="'/class'" :leftText="'我的订单'" :rightText="'查看全部订单'" :rightClass="'small-font'"></list-item>
          <div class="order-status">
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont pay"></i><div class="status-text">待付款</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont send"></i><div class="status-text">待发货</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont deliver"></i><div class="status-text">待收货</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont evaluate"></i><div class="status-text">待评价</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont refund"></i><div class="status-text">退款/售后</div>
            </router-link>
          </div>
        </list>
        <list class="column-wrap">
          <list-item :url="'/class'" :leftText="'必备工具'" :rightText="'集结令分千万红包'" :rightClass="'small-font'"></list-item>
          <div class="order-status must-need">
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont pay"></i><div class="status-text">待付款</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont send"></i><div class="status-text">待发货</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont deliver"></i><div class="status-text">待收货</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont evaluate"></i><div class="status-text">待评价</div>
            </router-link>
          </div>
          <div class="order-status must-need">
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont pay"></i><div class="status-text">待付款</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont send"></i><div class="status-text">待发货</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont deliver"></i><div class="status-text">待收货</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont evaluate"></i><div class="status-text">待评价</div>
            </router-link>
          </div>
        </list>
        <list class="column-wrap">
          <list-item :leftText="'我的互动'" :arrowForward="''"></list-item>
          <div class="order-status must-need">
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont pay"></i><div class="status-text">待付款</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont send"></i><div class="status-text">待发货</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont deliver"></i><div class="status-text">待收货</div>
            </router-link>
            <router-link :to="'/class'" tag="div" class="status-item">
              <i class="iconfont evaluate"></i><div class="status-text">待评价</div>
            </router-link>
          </div>
        </list>
        <div class="column-wrap"></div>
      </scroll>
    </page-content>

  </page>
</template>

<script>
import { Page, PageContent } from '../components/page';
import Scroll from '../components/scroll';
import { List, ListItem } from '../components/list';

export default {
  components: {
    Page,
    PageContent,
    Scroll,
    List,
    ListItem,
  },
  data() {
    return {
      // headIcons: [
      //   { icon: 'more-v', href: 'https://www.baidu.com' }
      // ],
    };
  },
  methods: {
    onRefresh (done) {
      let self = this
      setTimeout(function () {
        self.time = new Date()
        done()  // call done
      }, 2000)
    },
    changeRouter(url) {
      router.push(url);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../components/tobe/function";
.bar.bar-my{
  background-color: transparent;
  background-image: none;
  .button{
    color: #fff;
  }
}
.bar.bar-my + .page-content{
  top: 0;
}
.user-nime{
  margin-top: 5px;
}
.my-title-box{
  text-align: center;
  color: #ffffff;
  padding: rem(45) rem(10) rem(20) rem(10);
  background-color: #fc5004;
  .user-photo{
    width: rem(120);
    height: rem(120);
    border-radius: 50%;
    border: 1px solid #fff;
    overflow: hidden;
  }
}
.order-status{
  @extend %comm-flex;
  padding: 0 5px;
  .status-item{
    @include flex(1);
    width: 0;
    padding: rem(24) 0;
    .iconfont{
      font-size: rem(48);
      color: #999999;
    }
    .status-text{
      font-size: rem(24);
      color: #1f333e;
    }
  }
}
.column-wrap{
  margin-top: rem(20);
  text-align: center;
  background-color: #fff;
  .list-item{
    background-origin: border-box;
  }
}
.must-need{
  padding: 0;
  .status-item{
    padding: rem(36) 0;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      left: auto;
      bottom: auto;
      width: 1px;
      height: 100%;
      background-color: #efefef;
      display: block;
      z-index: 15;
      transform-origin: 100% 50%;
      @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        transform: scaleX(0.5);
      }

    }

    @include hairline(bottom, #efefef);
    .status-text{
      margin-top: rem(20);
      color: #3f4f58;
      font-size: rem(24);
    }
  }
}
</style>
