<template>
  <page>
    <page-content>
      <div class="search-head search-result">
        <div class="search-back search-icon iconfont arrow-back" v-back-link></div>
        <div class="search-input">
          <div class="inner-input">
            <input type="search" name="q" v-model.trim="$route.query.q" placeholder="青少年裤子">
          </div>
          <div class="inner-icon iconfont camerafill"></div>
        </div>
        <div class="search-cancle search-icon iconfont more-v"></div>
      </div>
      <div class="pro-ul">
        <ul>
          <li>
            <div class="li-bg">
              <div class="pro-img lazy-box">
                <a href="#"><img class="lazy" src="http://10.201.128.236/h5/prd/images/productsearchlist/pro-img.png" alt=""></a>
              </div>
              <div class="pro-info">
                <div class="pro-title">
                  <a href="#" class="qqg">
                    <div class="clamp">GUCCI/古驰 牛皮金属立体狮子装饰女士黑色单肩包牛皮金属立体狮子装饰女士黑色单肩包包包包包包包包包</div>
                  </a>
                </div>
                <div class="pro-show-info">
                  <div class="pro-money">
                    <div><i>￥</i>14660.00</div>
                  </div>
                  <div class="pro-evaluate zy">
                    <span></span> 999999条评论 好评95%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="li-bg">
              <div class="pro-img lazy-box">
                <a href="#"><img class="lazy" src="http://10.201.128.236/h5/prd/images/productsearchlist/pro-img.png" alt=""></a>
              </div>
              <div class="pro-info">
                <div class="pro-title">
                  <a href="#" class="qqg">
                    <div class="clamp">GUCCI/古驰 牛皮金属立体狮子装饰女士黑色单肩包牛皮金属立体狮子装饰女士黑色单肩包包包包包包包包包</div>
                  </a>
                </div>
                <div class="pro-show-info">
                  <div class="pro-money">
                    <div><i>￥</i>14660.00</div>
                  </div>
                  <div class="pro-evaluate zy">
                    <span></span> 999999条评论 好评95%
                  </div>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </page-content>
  </page>
</template>

<script lang="babel">
import { Page, PageContent } from '../components/page';
import localdb from '../localdb';
import api from '../api';
export default {
  name: 'searchResult',
  components: {
    Page,
    PageContent,
  },
  data() {
    return {
      // searchText: ''
    };
  },
  created() {
    api.getSearchResult({
      sst: 1,
      n: 20,
      buying: "buyitnow",
      m: "api4h5",
      abtest: 10,
      wlsort: 10,
      page: 1,
      q: this.$route.query.q
    }).then((data) => {
      console.log(data)
    }, (data) => {})
  },
  methods: {

  },
};
</script>

<style lang="scss">
@import "../components/tobe/function";
.search-result{
  .search-input{
    margin: 0;
  }
  .search-icon{
    font-size: rem(46);
  }
}
.pro-ul {
  background: #eeeeee;
  i{
    font-style: normal;
  }
  ul {
    padding: 0;
    li {
      .li-bg {
        padding: rem(10);
        background: #ffffff;
        border-radius: rem(5);
      }
      .clamp{
        @include clamp;
      }
      float:left;
      width:50%;
      padding:rem(10) rem(5) rem(5) rem(5);
      border:0;
      background: none;
      .pro-img {
        float: none;
        width: 100%;
        height: auto;
        &:after {
          content: '';
          display: block;
          padding-top: 100%;
        }
      }
      .banner-li {
        margin: 0;
        border: none;
        height: rem(258*2);
        border-radius: rem(10);
      }
      .pro-info {
        padding: 0;
        .pro-title {
          height: auto;
          margin-top: rem(5);
        }
        .pro-show-info {
          padding-right: 0;
          margin-top: rem(15);
          .pro-cart-icon {
            display: none;
          }
          .pro-evaluate {
            font-size: rem(24);
          }
        }
      }
    }
  }
  &:after {
    display: block;
    content: " ";
    height: 0;
    clear: both;
    visibility: hidden
  }
}
.pro-money > div {
  font-size: .32rem;
  color: #e6133c;
  margin-right: .2rem;
}
.pro-evaluate {
  white-space: nowrap;
  height: .28rem;
  margin-top: .12rem;
  line-height: .28rem;
  padding-bottom: .12rem;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  color: #999999;
}
</style>
