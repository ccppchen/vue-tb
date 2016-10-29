<template>
  <page>
    <div class="home-bar">
      <div class="home-bar-left">
        <i class="iconfont scan"></i>
        <div class="bar-text">扫一扫</div>
      </div>
      <div class="home-bar-content">
        <div class="iconfont search"></div>
        <div class="inner-input">
          品牌手机实惠购
        </div>
        <div class="iconfont camera"></div>
      </div>
      <div class="home-bar-right">
        <i class="iconfont message"></i>
        <div class="bar-text">消息</div>
      </div>
    </div>
    <page-content>

      <swipe class="my-swipe" :prevent="true">
        <swipe-item v-for="swipeItem in data.swipeItems">
          <a :href="swipeItem.url">
            <img v-lazy="swipeItem.img">
          </a>
        </swipe-item>
      </swipe>
      <div class="vertical-view">
        <div class="vertical-item" v-for="item in data.items">
          <router-link :to="item.url">
            <div class="vitem-img"><img :src="item.img"></div>
            <div class="vitem-text">{{ item.text }}</div>
          </router-link>
        </div>
      </div>
      <div class="flash-box">
        <div class="flash-box-title"><img src="static/assets/images/tb-toutiao.png"></div>
        <div class="flash-box-inner">
          <tag>双十一</tag><div class="flash-text">全球食记丨因味爱上一座城</div>
        </div>
      </div>
      <div class="buy-flash">
        <div class="buy-rob">
          <router-link :to="data.buyFlashs.flashBuy.url"><img :src="data.buyFlashs.flashBuy.img"></router-link>
        </div>
        <div class="buy-list grid grid-two">
          <div class="buy-list-item grid-item" v-for="flashList in data.buyFlashs.flashLists">
            <router-link :to="flashList.url"><img :src="flashList.img"></router-link>
          </div>
        </div>
      </div>

      <div class="column bargain">
        <div class="column-padd">
          <div class="column-title">超实惠</div>
        </div>
        <div class="bargain-inner grid">
          <div class="bargain-left grid">
            <div class="grid-item" v-for="bargainLeft in data.bargains.bargainLefts">
              <router-link :to="bargainLeft.url"><img v-lazy="bargainLeft.img"></router-link>
            </div>
          </div>
          <div class="bargain-right grid grid-three">
            <div class="grid-item" v-for="bargainRight in data.bargains.bargainRights">
              <router-link :to="bargainRight.url"><img v-lazy="bargainRight.img"></router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="column special">
        <div class="column-padd">
          <div class="column-title">特色好货</div>
        </div>
        <div class="bargain-inner grid">
          <div class="bargain-left grid">
            <div class="grid-item" v-for="specialLeft in data.specials.specialLefts">
              <router-link :to="specialLeft.url"><img v-lazy="specialLeft.img"></router-link>
            </div>
          </div>
          <div class="bargain-right grid grid-three">
            <div class="grid-item" v-for="specialRight in data.specials.specialRights">
              <router-link :to="specialRight.url"><img v-lazy="specialRight.img"></router-link>
            </div>
          </div>
        </div>
      </div>

      <swipe class="swipead-swipe" :prevent="true" :showIndicators="false">
        <swipe-item v-for="swipeAdItem in data.swipeAdItems">
          <a :href="swipeAdItem.url">
            <img v-lazy="swipeAdItem.img">
          </a>
        </swipe-item>
      </swipe>

      <!-- 猜你喜欢 -->
      <div class="column love">
        <div class="column-padd">
          <div class="column-title">猜你喜欢</div>
          <div class="column-text">实时推荐最适合你的宝贝</div>
        </div>
        <div class="love-inner grid grid-two">
          <div class="grid-item">
            <a><img src="https://gw.alicdn.com/tps/TB1CPtJMXXXXXcAXFXXXXXXXXXX-1125-225.png"></a>
          </div>
        </div>
      </div>

    </page-content>

  </page>
</template>

<script>
import { Page, PageContent } from '../components/page';
import { Swipe, SwipeItem } from '../components/vue-swipe';
import Tag from '../components/tag';
import vue from 'vue';
export default {
  components: {
    Page,
    PageContent,
    Swipe,
    SwipeItem,
    Tag,
  },
  data() {
    return {
      data: {
        swipeItems: [
          { url: "https://www.baidu.com", img: "//gw.alicdn.com/imgextra/i4/10/TB2vINRa2OM.eBjSZFqXXculVXa_!!10-0-yamato.jpg_q50.jpg" },
          { url: "https://www.baidu.com", img: "//img.alicdn.com/tps/i4/TB1I1z4NVXXXXcqXVXXSutbFXXX.jpg_q50.jpg" },
          { url: "https://www.baidu.com", img: "//gw.alicdn.com/imgextra/i4/88/TB2E1OtaSCI.eBjy1XbXXbUBFXa_!!88-0-yamato.jpg_q50.jpg" },
          { url: "https://www.baidu.com", img: "//gw.alicdn.com/imgextra/i3/196/TB2wuEBaH1J.eBjy1zeXXX9kVXa_!!196-0-yamato.jpg_q50.jpg" },
          { url: "https://www.baidu.com", img: "//aecpm.alicdn.com/simba/img/TB18cqoNVXXXXbmXFXXSutbFXXX.jpg_q50.jpg" },
        ],
        swipeAdItems: [
          { url: "/class", img: "https://gw.alicdn.com/tps/TB1CPtJMXXXXXcAXFXXXXXXXXXX-1125-225.png" },
        ],
        items: [
          { url: "/class", img: "//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar", text: "天猫" },
          { url: "/class", img: "//gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar", text: "聚划算" },
          { url: "/class", img: "//gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar", text: "天猫国际" },
          { url: "/class", img: "//gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar", text: "外卖" },
          { url: "/class", img: "//gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar", text: "天猫超市" },
          { url: "/class", img: "//img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png", text: "充值中心" },
          { url: "/class", img: "//gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar", text: "领金币" },
          { url: "/class", img: "//gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png", text: "阿里旅行" },
          { url: "/class", img: "//img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png", text: "到家" },
          { url: "/class", img: "//gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar", text: "分类" },
        ],
        buyFlashs: {
          flashBuy: {
            url: "/class",
            img: "static/assets/images/tb-qiangou.jpg"
          },
          flashLists: [
            { url: "/class", img: "static/assets/images/tb-right1.jpg" },
            { url: "/class", img: "static/assets/images/tb-right2.png" },
            { url: "/class", img: "static/assets/images/tb-right3.png" },
            { url: "/class", img: "static/assets/images/tb-right4.png" },
          ],
        },
        bargains: {
          bargainLefts: [
            { url: "/class", img: "//gw.alicdn.com/tps/TB1u_5AKVXXXXaGXFXXXXXXXXXX-432-330.jpg_q50.jpg" },
            { url: "/class", img: "//img.alicdn.com/imgextra/i1/19/TB2214GaM1I.eBjSszeXXc2hpXa_!!2-subaru.png" },
          ],
          bargainRights: [
            { url: "/class", img: "//img.alicdn.com/imgextra/i2/14/TB2P7_uaSCI.eBjy1XbXXbUBFXa_!!2-subaru.png" },
            { url: "/class", img: "//img.alicdn.com/imgextra/i2/70/TB2VPXfaUOO.eBjSZFLXXcxmXXa_!!2-subaru.png" },
            { url: "/class", img: "//img.alicdn.com/imgextra/i2/14/TB2P7_uaSCI.eBjy1XbXXbUBFXa_!!2-subaru.png" },
            { url: "/class", img: "//img.alicdn.com/bao/uploaded/TB1GWNZMFXXXXafXpXXwu0bFXXX.png" },
            { url: "/class", img: "//img.alicdn.com/imgextra/i1/90/TB2WNRma4aK.eBjSZFwXXXjsFXa_!!2-subaru.png" },
            { url: "/class", img: "//img.alicdn.com/imgextra/i3/57/TB2CVKXaCiJ.eBjSszfXXa4bVXa_!!2-subaru.png" },
          ],
        },
        specials: {
          specialLefts: [
            { url: "/class", img: "//img.alicdn.com/imgextra/i1/19/TB25eldmXXXXXaoXXXXXXXXXXXX_!!2-subaru.png" },
            { url: "/class", img: "//img.alicdn.com/imgextra/i3/56/TB2_ae4bX_AQeBjSZFvXXbnKXXa_!!2-subaru.png" },
          ],
          specialRights: [
            { url: "/class", img: "//img.alicdn.com/imgextra/i2/76/TB2sg3mqXXXXXXHXXXXXXXXXXXX_!!2-subaru.png" },
            { url: "/class", img: "//img.alicdn.com/imgextra/i3/12/TB2Ms98pXXXXXX1XFXXXXXXXXXX_!!2-subaru.png" },
            { url: "/class", img: "//gw.alicdn.com/tps/i1/TB193dyJFXXXXauXpXXKWJi7pXX-231-330.png" },
            { url: "/class", img: "//gw.alicdn.com/tps/TB1WCrqNVXXXXXlXVXXXXXXXXXX-231-330.png" },
            { url: "/class", img: "https://img.alicdn.com/tfscom/TB1SEjGNVXXXXb5XVXXXXXXXXXX" },
            { url: "/class", img: "https://img.alicdn.com/imgextra/i4/97/TB2xb_0kXXXXXcQXpXXXXXXXXXX_!!2-subaru.png" },
          ],
        },


      },

    };
  },
  methods: {
    clickDo(key) {
      this.msg = key;
    },

  },
  // mounted () {
  //   console.log('ready ok')
  //   vue.Mdropload(
  //     document.querySelector('.page-content'),
  //     {
  //       height: 50,
  //       up: {
  //         fn: function (cb) {
  //           console.log('触发了下拉操作')
  //           setTimeout(function () {
  //             cb.success()
  //           }, 5000)
  //         },
  //         template: {
  //           none: '下拉刷新',
  //           message: '释放更新',
  //           loading: '正在更新，请稍后',
  //           success: '刷新成功',
  //           error: '刷新失败'
  //         }
  //       },
  //       down: {
  //         fn: function (cb) {
  //           console.log('触发了上拉操作')
  //           cb.success()
  //         },
  //         template: {
  //           none: '上拉刷新',
  //           message: '释放更新',
  //           loading: '正在更新，请稍后',
  //           success: '刷新成功',
  //           error: '刷新失败'
  //         }
  //       }
  //     }
  //   )
  // },
};
</script>
<style lang="scss" scoped>
@import "../components/tobe/function";

.home-bar + .page-content{
  top: rem(100);
}
.home-bar{
  @extend %comm-flex;
  height: rem(100);
  background-color: #fc511e;
  color: #ffffff;
  .home-bar-left, .home-bar-right{
    width: rem(100);
    height: rem(100);
    @extend %comm-flex;
    @include justify-content(center);
    @include flex-direction(column);
    i{
      font-size: rem(45);
    }
  }
  .home-bar-content{
    @include flex(1);
    height: rem(64);
    @extend %comm-flex;
    background-color: #d22f16;
    padding: 0 rem(16);
    border-radius: 3px;
    .inner-input{
      @include flex(1);
      font-size: rem(32);
      color: #fff;
      margin-left: 3px;
    }
    .iconfont{
      font-size: rem(40);
    }
  }
  .bar-text{
    font-size: rem(24);
    color: #fff;
    text-align: center;
  }
}
.my-swipe {
  height: rem(118*2);
  color: #fff;
  text-align: center;
}
.swipead-swipe{
  height: rem(75*2);
}

.vertical-view{
  overflow: hidden;
  padding: 0 rem(28) rem(28);
  background-color: #fff;
  font-size: 0;
  .vertical-item{
    width: 20%;
    height: rem(120);
    float: left;
    margin-top: rem(28);
    text-align: center;
    font-size: rem(24);
    color: rgb(102, 102, 102);
    img{
      width: 85%;
    }
    .vitem-text{
      line-height: 1;
      margin-top: rem(10);
    }
  }
}

.flash-box{
  background-color: #ffffff;
  @include hair(top, #e8e8e8);
  @extend %comm-flex;
  height: rem(66);
  .flash-box-title{
    width: rem(82*2);
    position: relative;
    @include hairline(right, #e8e8e8);
    text-align: center;
    img{
      width: 80%;
    }
  }
  .flash-box-inner{
    @extend %comm-flex;
    @include flex(1);
    height: 100%;
    .flash-text{
      line-height: 1;
      @include ellipsis(4.4rem);
    }
    .tag{
      margin: 0 rem(10) 0 rem(16);
    }
  }
}
.page-content{
  bottom: rem(100);
}

.buy-flash{
  overflow: hidden;
  margin-top: rem(20);
  background-color: #ffffff;
  font-size: 0;
  .buy-rob, .buy-list{
    float: left;
    height: rem(196.88*2);
  }
  .buy-rob{
    width: 40%;
    position: relative;
    @include hairline(right, #efefef);
  }
  .buy-list{
    width: 60%;
    .grid-item{
      height: rem(196.88);
    }
  }
}

.grid{
  overflow: hidden;
  .grid-item{
    float: left;
    height: rem(190);
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
  }
  &.grid-two{
    .grid-item{
      width: 50%;
    }

  }
  &.grid-three{

    .grid-item{
      width: 33.33%;
    }
  }
  &.grid-four{
    .grid-item{
      width: 40%;
    }

  }
  &.grid-six{
    .grid-item{
      width: 60%;
    }

  }
}

.column{
  margin-top: rem(20);
  background-color: #fff;
  text-align: center;
  .column-padd{
    padding: rem(10);
    position: relative;
    @include hairline(bottom, #efefef);
  }
  .column-title{
    padding-left: rem(40);
    font-size: rem(28);
    background-size: rem(30) rem(30);
    background-repeat: no-repeat;
    background-position: left center;
    display: inline-block;
  }
  &.bargain{
    .column-title{
      color: #ff350e;
      background-image: url(../assets/very-bargain.png);
    }
  }
  &.tmall{
    .column-title{
      color: #ff350e;
      background-image: url(../assets/tmall.png);
    }
  }
  &.special{
    .column-title{
      color: #ff350e;
      background-image: url(../assets/special.png);
    }
  }
  &.love{
    .column-title{
      color: #333;
      background-image: url(../assets/love.png);
    }
  }
}

.bargain-inner{
  .bargain-left{
    width: 40%;
  }
  .bargain-right{
    width: 60%;
  }
  .bargain-left, .bargain-right{
    float: left;
    height: rem(114.58*4);
    .grid-item{
      height: rem(114.58*2);
    }
  }
}

</style>
