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

      <swipe class="my-swipe" :auto="0" :prevent="true">
        <swipe-item v-for="swipeItem in swipeItems">
          <a :href="swipeItem.url">
            <img v-lazy="swipeItem.img">
          </a>
        </swipe-item>
      </swipe>
      <div class="vertical-view">
        <div class="vertical-item" v-for="item in items">
          <router-link :to="item.url">
            <div class="vitem-img"><img :src="item.img"></div>
            <div class="vitem-text">{{ item.text }}</div>
          </router-link>
        </div>

      </div>
    </page-content>

  </page>
</template>

<script>
import { Page, PageContent } from '../components/page';
import { Swipe, SwipeItem } from '../components/vue-swipe';
import vue from 'vue';
export default {
  components: {
    Page,
    PageContent,
    Swipe,
    SwipeItem,
  },
  data() {
    return {
      swipeItems: [
        { url: 'https://www.baidu.com', img: '//gw.alicdn.com/imgextra/i4/10/TB2vINRa2OM.eBjSZFqXXculVXa_!!10-0-yamato.jpg_q50.jpg' },
        { url: 'https://www.baidu.com', img: '//img.alicdn.com/tps/i4/TB1I1z4NVXXXXcqXVXXSutbFXXX.jpg_q50.jpg' },
        { url: 'https://www.baidu.com', img: '//gw.alicdn.com/imgextra/i4/88/TB2E1OtaSCI.eBjy1XbXXbUBFXa_!!88-0-yamato.jpg_q50.jpg' },
        { url: 'https://www.baidu.com', img: '//gw.alicdn.com/imgextra/i3/196/TB2wuEBaH1J.eBjy1zeXXX9kVXa_!!196-0-yamato.jpg_q50.jpg' },
        { url: 'https://www.baidu.com', img: '//aecpm.alicdn.com/simba/img/TB18cqoNVXXXXbmXFXXSutbFXXX.jpg_q50.jpg' },
      ],
      items: [
        { url: '/class', img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar', text: '天猫' },
        { url: '/class', img: '//gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar', text: '聚划算' },
        { url: '/class', img: '//gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar', text: '天猫国际' },
        { url: '/class', img: '//gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar', text: '外卖' },
        { url: '/class', img: '//gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar', text: '天猫超市' },
        { url: '/class', img: '//img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png', text: '充值中心' },
        { url: '/class', img: '//gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar', text: '领金币' },
        { url: '/class', img: '//gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png', text: '阿里旅行' },
        { url: '/class', img: '//img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png', text: '到家' },
        { url: '/class', img: '//gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar', text: '分类' },
      ],

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

.vertical-view{
  overflow: hidden;
  padding: 0 rem(28) rem(28);
  background-color: #fff;
  font-size: 0;
  .vertical-item{
    width: 20%;
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

</style>
