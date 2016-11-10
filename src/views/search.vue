<template>
  <div class="searchbox">
    <div class="search-head">
      <div class="search-input">
        <div class="inner-text"><em>宝贝</em><span></span></div>
        <div class="inner-input">
          <form method="GET" v-on:submit.prevent="onSubmit(searchText)">
            <input type="search" name="q" v-model.trim="searchText" v-focus placeholder="青少年裤子">
          </form>
        </div>
        <div class="inner-icon iconfont camerafill"></div>
      </div>
      <div class="search-cancle" v-back-link>取消</div>
    </div>
    <div class="search-content" v-show="searchHistory">
      <div class="hot-col" v-if="searchHistoryText == 0 ? false : true">
        <div class="hot-name">
          <div class="hot-text">历史搜索</div>
          <div class="hot-icon iconfont delete" @click="clearStore"></div>
        </div>
        <div class="hot-content">
          <ul>
            <li v-for="text in searchHistoryText"><router-link :to="'/searchResult?q=' + text">{{ text }}</router-link></li>
          </ul>
        </div>
      </div>
      <div class="hot-col">
        <div class="hot-name">
          <div class="hot-text">搜索发现</div>
          <div class="hot-icon iconfont attention"></div>
        </div>
        <div class="hot-content">
          <ul>
            <li><router-link :to="'/searchResult?q=青少年裤子'">青少年裤子</router-link></li>
            <li><router-link :to="'/searchResult?q=苹果pro13寸'">苹果pro13寸</router-link></li>
            <li><router-link :to="'/searchResult?q=运动裤男'">运动裤男</router-link></li>
            <li><router-link :to="'/searchResult?q=吸尘器 家用'">吸尘器 家用</router-link></li>
            <li><router-link :to="'/searchResult?q=牛仔外套'">牛仔外套</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-content nopadding" v-show="!searchHistory">
      <list>
        <list-item @click.native="currentClick(word.result)" v-for="word in words" :leftText="word.result" :arrowForward="''" :url="'/searchResult?q='+word.result"></list-item>
      </list>
    </div>
  </div>

</template>

<script lang="babel">
import api from '../api';
import localdb from '../localdb';
import { MessageBox } from 'mint-ui';
import { List, ListItem } from '../components/list';
export default {
  name: 'search',
  components: {
    List,
    ListItem,
  },
  data() {
    return {
      searchText: '',
      searchHistory: true,
      searchHistoryText: window.JSON.parse(localdb.get('searchHistoryText')) || '[]',
      words: []
    };
  },
  created() {
    // let storeJson = window.JSON.parse(localdb.get('searchHistoryText')) || '[]';
    // if (storeJson != null) {
    //   if (storeJson.length >= 1) {
    //     this.searchHistoryText = storeJson;
    //   }else{
    //     for (var i = 0; i < storeJson.length; i++) {
    //       storeJson[i] = window.JSON.parse(storeJson[i]);
    //     }
    //     this.searchHistoryText = storeJson;
    //   }
    // }


  },
  methods: {
    onSubmit(val){
      this.searchHistoryText.push({
        label: val
      });
      // localdb.set('searchHistoryText', this.searchHistoryText);
      localdb.set('currentText', val);
      this.$router.push('/searchResult?q=' + val);
    },
    currentClick(val) {
      localdb.set('currentText', val);
    },
    clearStore() {

      MessageBox.confirm('确认删除全部历史记录?').then(action => {
        localdb.remove('searchHistoryText');
        this.searchHistoryText = [];
      }, action => {});
    }
  },
  watch: {
    // '$route' (to, from) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   console.log(to.path, from.path)
    // },
    searchText(val, oldVal){
      // console.log(val)
      if (val.length !== 0) {
        this.searchHistory = false
        api.getSearch({
          searchText: this.searchText
        }).then((data) => {
          this.words = data.body;
        }, () => {

        })
      }else {
        this.searchHistory = true
      }

    },
    searchHistoryText: {
      handler(items) {
        localdb.set('searchHistoryText', items)
      },
      deep: true
    }

  },
};
</script>

<style lang="scss">
@import "../components/tobe/function";
.searchbox{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 3;
}
.search-head{
  height: rem(100);
  @extend %comm-flex;
  background: rgba(241,27,163,1);
  background: -moz-linear-gradient(-45deg, rgba(241,27,163,1) 0%, rgba(245,25,54,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(241,27,163,1)), color-stop(100%, rgba(245,25,54,1)));
  background: -webkit-linear-gradient(-45deg, rgba(241,27,163,1) 0%, rgba(245,25,54,1) 100%);
  background: linear-gradient(135deg, rgba(241,27,163,1) 0%, rgba(245,25,54,1) 100%);
  .search-input{
    @include flex(1);
    height: rem(60);
    @extend %comm-flex;
    margin-left: rem(20);
    background-color: #fff;
    border-radius: 2px;
  }
  .inner-text{
    width: rem(48*2);
    height: 100%;
    @extend %comm-flex;
    @include justify-content(center);
    position: relative;
    color: #949494;
    em{
      font-style: normal;
    }
    span{
      margin-left: 3px;
      @include triangle(bottom, 3px, #5f646e);
    }
  }
  .inner-icon{
    height: 100%;
    width: rem(60);
    @extend %comm-flex;
    @include justify-content(center);
    font-size: rem(46);
    color: #5f646e;
  }
  .inner-input{
    @include flex(1);
    height: rem(60);
  }
  input,form{
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    border: 0;
  }
  input{
    padding-left: 8px;
  }
  .search-cancle,.search-icon{
    width: rem(100);
    height: rem(100);
    color: #fff;
    font-size: rem(28);
    @extend %comm-flex;
    @include justify-content(center);
  }
}
.search-content{
  position: absolute;
  top: rem(100);
  width: 100%;
  bottom: 0;
  padding: rem(20);
  background-color: #ffffff;
  &.nopadding{
    padding: 0;
    .list-item{
      height: rem(80);
    }
    .list-between .list-item:last-child{
      @include hair(bottom, #e9e9e9);
    }
  }
  .hot-col{
    .hot-name{
      @extend %comm-flex;
      @include justify-content(space-between);
      margin-bottom: rem(8);
    }
    .hot-text{
      font-size: rem(28);
      color: #3c3c3c;
    }
    .hot-icon{
      width: rem(60);
      height: rem(60);
      font-size: rem(36);
      color: #666666;
      @extend %comm-flex;
      @include justify-content(center);
    }
    .hot-content{
      ul{
        overflow: hidden;
        margin-left: rem(-20);
        li{
          margin-left: rem(20);
          padding: rem(16) rem(32);
          float: left;
          background-color: #f5f5f5;
          border-radius: 3px;
          margin-bottom: rem(20);
          line-height: 1;
          a{
            font-size: rem(24);
            color: #0f0f0f;
          }
        }
      }
    }
  }
}
</style>
