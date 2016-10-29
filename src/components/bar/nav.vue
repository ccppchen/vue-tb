<template>
  <div class="page-nav">
    <div class="j-nav" :class="{'show-nav': isShow}" @click="toggleShow">
        <div class="button iconfont more-v"></div>
        <div class="button iconfont error"></div>
    </div>
    <nav :class="{'show-navcontent': isShow}" class="j-navcontent">
        <ul class="ul-nav">
            <li><a href="javascript:;"><i class="iconfont ihome"></i><p>首页</p></a></li>
            <li><a href="javascript:;"><i class="iconfont isearch"></i><p>搜索</p></a></li>
            <li><a href="javascript:;"><i class="iconfont class"></i><p>分类</p></a></li>
            <li><a href="javascript:;"><i class="iconfont shop-car"></i><p>购物车</p></a></li>
            <li><a href="javascript:;"><i class="iconfont iuser"></i><p>我的i百联</p></a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Jnav',
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      toggleShow() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="scss">
  @import "./nav"
</style>
