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
      similars: [
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-0&scm=2027.10987.56932.0&id=525331358959&pvid=2d465ace-9a2c-456c-91af-07012f629c14", img: "//img.alicdn.com/bao/uploaded/i1/1814877258/TB2VBvCqXXXXXXlXFXXXXXXXXXX_!!1814877258.jpg_q50.jpg", title: "出口北欧简欧现代简约创意设计师家具懒人休闲椅单人沙发椅蝴蝶椅", now_price: "618.0", old_price: "111.00", maney: "11789",tag: '热销' },
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-11&scm=2027.10987.56932.0&id=40448287184&pvid=92086df9-d82f-4d1c-96aa-2a5265ec3b06", img: "//img.alicdn.com/bao/uploaded/i2/TB1YlaiGXXXXXcmXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg", title: "愫居  实木储物架 组合置物架 黑胡桃 橡木木蜡油 环保 实体店", now_price: "2185.0", old_price: "111.00", maney: "22", tag: '热销' },
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-15&scm=2027.10987.56932.0&id=44770809803&pvid=92086df9-d82f-4d1c-96aa-2a5265ec3b06", img: "//img.alicdn.com/bao/uploaded/i4/851960095/TB2lOFUgVXXXXaEXpXXXXXXXXXX_!!851960095.jpg_q50.jpg", title: "[为你推荐]北欧风格家具 小户型真皮沙发简约皮艺组合韩式双三人位头层牛皮", now_price: "3599.0", old_price: "111.00", maney: "22", tag: '热销' },
        { url: "https://mclick.simba.taobao.com/cc_im?p=iphone7&s=1381095274&k=289&e=VKtxAOAXQp76tcv4X0wDkpvITRdkOaqZzrPlqVOg5EeyR08VbxXX4e6nTUMqj%2FdPMNE4YJm527ZpNANDY4nOsAjyVKf%2Fc1%2BnLavBN2kQWSguvgH9egsj6E3%2B8mjnYYh7H571VV4Bua7hvpXe3ExMUNlz2SVqR5vlZE%2Bi%2FJWqdra2Zfj5T0tx2rYfuvD6NFdANrjn1LiVf5Fo5FAyj%2FR7f4ORkeiu%2FMPfVSgoxQlL%2BvIyi05lBIdG9dm1O9VfvX3WtapqpTSx0NELG%2FLVqUmcls45%2BdfGSC6G", img: "//img.alicdn.com/imgextra/i3/146120309408356475/TB2XwucbcCO.eBjSZFzXXaRiVXa_!!0-saturn_solar.jpg_210x210.jpg", title: "Apple/苹果 iPhone 7 港版国行现货当天发", now_price: "4388.0", old_price: "4523.71", maney: "22", tag: '热销' },
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-0&scm=2027.10987.56932.0&id=525331358959&pvid=2d465ace-9a2c-456c-91af-07012f629c14", img: "//img.alicdn.com/bao/uploaded/i1/1814877258/TB2VBvCqXXXXXXlXFXXXXXXXXXX_!!1814877258.jpg_q50.jpg", title: "出口北欧简欧现代简约创意设计师家具懒人休闲椅单人沙发椅蝴蝶椅", now_price: "618.0", old_price: "111.00", maney: "11789",tag: '热销' },
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-11&scm=2027.10987.56932.0&id=40448287184&pvid=92086df9-d82f-4d1c-96aa-2a5265ec3b06", img: "//img.alicdn.com/bao/uploaded/i2/TB1YlaiGXXXXXcmXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg", title: "愫居  实木储物架 组合置物架 黑胡桃 橡木木蜡油 环保 实体店", now_price: "2185.0", old_price: "111.00", maney: "22", tag: '热销' },
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-15&scm=2027.10987.56932.0&id=44770809803&pvid=92086df9-d82f-4d1c-96aa-2a5265ec3b06", img: "//img.alicdn.com/bao/uploaded/i4/851960095/TB2lOFUgVXXXXaEXpXXXXXXXXXX_!!851960095.jpg_q50.jpg", title: "[为你推荐]北欧风格家具 小户型真皮沙发简约皮艺组合韩式双三人位头层牛皮", now_price: "3599.0", old_price: "111.00", maney: "22", tag: '热销' },
        { url: "https://mclick.simba.taobao.com/cc_im?p=iphone7&s=1381095274&k=289&e=VKtxAOAXQp76tcv4X0wDkpvITRdkOaqZzrPlqVOg5EeyR08VbxXX4e6nTUMqj%2FdPMNE4YJm527ZpNANDY4nOsAjyVKf%2Fc1%2BnLavBN2kQWSguvgH9egsj6E3%2B8mjnYYh7H571VV4Bua7hvpXe3ExMUNlz2SVqR5vlZE%2Bi%2FJWqdra2Zfj5T0tx2rYfuvD6NFdANrjn1LiVf5Fo5FAyj%2FR7f4ORkeiu%2FMPfVSgoxQlL%2BvIyi05lBIdG9dm1O9VfvX3WtapqpTSx0NELG%2FLVqUmcls45%2BdfGSC6G", img: "//img.alicdn.com/imgextra/i3/146120309408356475/TB2XwucbcCO.eBjSZFzXXaRiVXa_!!0-saturn_solar.jpg_210x210.jpg", title: "Apple/苹果 iPhone 7 港版国行现货当天发", now_price: "4388.0", old_price: "4523.71", maney: "22", tag: '热销' },
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-0&scm=2027.10987.56932.0&id=525331358959&pvid=2d465ace-9a2c-456c-91af-07012f629c14", img: "//img.alicdn.com/bao/uploaded/i1/1814877258/TB2VBvCqXXXXXXlXFXXXXXXXXXX_!!1814877258.jpg_q50.jpg", title: "出口北欧简欧现代简约创意设计师家具懒人休闲椅单人沙发椅蝴蝶椅", now_price: "618.0", old_price: "111.00", maney: "11789",tag: '热销' },
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-11&scm=2027.10987.56932.0&id=40448287184&pvid=92086df9-d82f-4d1c-96aa-2a5265ec3b06", img: "//img.alicdn.com/bao/uploaded/i2/TB1YlaiGXXXXXcmXpXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg", title: "愫居  实木储物架 组合置物架 黑胡桃 橡木木蜡油 环保 实体店", now_price: "2185.0", old_price: "111.00", maney: "22", tag: '热销' },
        { url: "https://item.taobao.com/item.htm?locate=guessitem-item&spm=a215s.7406091.guessitem.guessitem-15&scm=2027.10987.56932.0&id=44770809803&pvid=92086df9-d82f-4d1c-96aa-2a5265ec3b06", img: "//img.alicdn.com/bao/uploaded/i4/851960095/TB2lOFUgVXXXXaEXpXXXXXXXXXX_!!851960095.jpg_q50.jpg", title: "[为你推荐]北欧风格家具 小户型真皮沙发简约皮艺组合韩式双三人位头层牛皮", now_price: "3599.0", old_price: "111.00", maney: "22", tag: '热销' },
        { url: "https://mclick.simba.taobao.com/cc_im?p=iphone7&s=1381095274&k=289&e=VKtxAOAXQp76tcv4X0wDkpvITRdkOaqZzrPlqVOg5EeyR08VbxXX4e6nTUMqj%2FdPMNE4YJm527ZpNANDY4nOsAjyVKf%2Fc1%2BnLavBN2kQWSguvgH9egsj6E3%2B8mjnYYh7H571VV4Bua7hvpXe3ExMUNlz2SVqR5vlZE%2Bi%2FJWqdra2Zfj5T0tx2rYfuvD6NFdANrjn1LiVf5Fo5FAyj%2FR7f4ORkeiu%2FMPfVSgoxQlL%2BvIyi05lBIdG9dm1O9VfvX3WtapqpTSx0NELG%2FLVqUmcls45%2BdfGSC6G", img: "//img.alicdn.com/imgextra/i3/146120309408356475/TB2XwucbcCO.eBjSZFzXXaRiVXa_!!0-saturn_solar.jpg_210x210.jpg", title: "Apple/苹果 iPhone 7 港版国行现货当天发", now_price: "4388.0", old_price: "4523.71", maney: "22", tag: '热销' },
      ]

    };
  },
  methods: {
    clickDo(key) {
      alert(key);
    },
    onRefresh (done) {
      let self = this
      setTimeout(function () {
        self.time = new Date()
        done()  // call done
      }, 2000)
    },
    onInfinite (done) {
      console.log('infinite');
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
