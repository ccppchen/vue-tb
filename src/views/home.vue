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
      <scroll :on-refresh="onRefresh" :on-infinite="onInfinite">

        <swipe class="my-swipe" :prevent="true">
          <swipe-item v-for="swipeItem in data.swipeItems">
            <a :href="swipeItem.url">
              <img :src="swipeItem.img">
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
          <div class="buy-rob" v-for="flash in data.flashBuy">
            <router-link :to="flash.url"><img :src="flash.img"></router-link>
          </div>
          <div class="buy-list grid grid-two">
            <div class="buy-list-item grid-item" v-for="flashList in data.flashLists">
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
              <div class="grid-item" v-for="bargainLeft in data.bargainLefts">
                <router-link :to="bargainLeft.url"><img v-lazy="bargainLeft.img"></router-link>
              </div>
            </div>
            <div class="bargain-right grid grid-three">
              <div class="grid-item" v-for="bargainRight in data.bargainRights">
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
              <div class="grid-item" v-for="specialLeft in data.specialLefts">
                <router-link :to="specialLeft.url"><img v-lazy="specialLeft.img"></router-link>
              </div>
            </div>
            <div class="bargain-right grid grid-three">
              <div class="grid-item" v-for="specialRight in data.specialRights">
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
        </div>
        <similar :similarColumn="'similar-two'" :myClass="'love-inner'">
          <similar-item v-for="similar in similars">
            <a :href="similar.url">
              <div class="similar-img"><img v-lazy="similar.img"></div>
              <div class="similar-title"><tag v-if="similar.tag !== ''">{{ similar.tag }}</tag>{{ similar.title }}</div>
            </a>
            <div class="similar-price">
                <span class="small-rmb">¥</span>{{ similar.now_price }}
                <div class="join-cart">
                  <div class="similar-maney">{{ similar.maney }}人付款</div>
                  <div class="iconfont more-v"></div>
                </div>

            </div>
          </similar-item>
        </similar>
      </scroll>

    </page-content>

  </page>
</template>

<script>
import { Page, PageContent } from '../components/page';
import { Swipe, SwipeItem } from '../components/vue-swipe';
import Tag from '../components/tag';
import { Similar, SimilarItem } from '../components/similar';
import Scroll from '../components/scroll';
import { mapGetters, mapActions } from 'vuex';
import api from '../api';
export default {
  components: {
    Page,
    PageContent,
    Swipe,
    SwipeItem,
    Tag,
    Similar,
    SimilarItem,
    Scroll,
  },
  // data() {
  //   return {
  //     data: {}

  //   };
  // },
  // mounted () {
  //   // GET /someUrl
  //   this.$http.get('http://localhost:3000/vue/vuetb',{}, {emulateJSON: true}).then((response) => {
  //     // success callback
  //     this.data = response.data;
  //   }, (response) => {
  //     // error callback
  //   });
  // },
  computed: {
    ...mapGetters({
      data: 'allHomeResource',
      similars: 'getProducts',
    }),
  },
  created () {
    this.$store.dispatch('getAllClass')
  },
  methods: {
    onRefresh (done) {
      this.$store.dispatch('getAllClass').then(response => {
        done();
      }, (response) => {

      })
    },
    onInfinite (done) {
      console.log('infinite');
      this.$store.dispatch('getProducts')
      done()
    },

  },
};
</script>
<style lang="scss">
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
.page .my-swipe {
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
      width: 100%;
    }
  }
}

.grid{
  overflow: hidden;
  zoom: 1;
  .grid-item{
    float: left;
    position: relative;
    z-index: 2;
    font-size: 0;
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
    img{
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      // left: 50%;
      // top: 50%;
      // @include transform(translate3d(-50%, -50%, 0)!important);
    }
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
.love-inner .tag.orange{
  @include transform(scale(.8));
  background-color: #d91c29;
  color: #fff;
  border-radius: 3px;
}
</style>
