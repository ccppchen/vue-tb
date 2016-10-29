<template>
  <div>
    <page-footer>
      <div class="footer-item" :class="{'active' : currentView === 'home'}" @click="changeView('home')"><a href="javascript:;"><i class="iconfont" :class="[currentView === 'home' ? 'homefill' : 'home']"></i><div class="tab-tro">首页</div></a></div>
      <div class="footer-item" :class="{'active' : currentView === 'we'}" @click="changeView('we')"><a href="javascript:;"><i class="iconfont we" :class="[currentView === 'we' ? 'wefill' : 'we']"></i><div class="tab-tro">微淘</div></a></div>
      <div class="footer-item" :class="{'active' : currentView === 'ask'}" @click="changeView('ask')"><a href="javascript:;"><i class="iconfont ask" :class="[currentView === 'ask' ? 'askfill' : 'ask']"></i><div class="tab-tro">问大家</div></a></div>
      <div class="footer-item" :class="{'active' : currentView === 'cart'}" @click="changeView('cart')"><a href="javascript:;"><i class="iconfont cart" :class="[currentView === 'cart' ? 'cartfill' : 'cart']"></i><div class="tab-tro">购物车</div></a></div>
      <div class="footer-item" :class="{'active' : currentView === 'my'}" @click="changeView('my')"><a href="javascript:;"><i class="iconfont my" :class="[currentView === 'my' ? 'myfill' : 'my']"></i><div class="tab-tro">我的淘宝</div></a></div>
    </page-footer>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script lang="babel">
  import Home from './home';
  import Class from './class';
  import { PageFooter } from '../components/footer';
  export default {
    components: {
      'home': Home,
      'class': Class,
      PageFooter,
    },
    data() {
      return {
        currentView: 'home'
      };
    },
    methods: {
      changeView(view) {
        this.currentView = view
      }
    },
  };
</script>

<style lang="scss">
@import "../components/tobe/base";
@import "../components/tobe/icons";
</style>
