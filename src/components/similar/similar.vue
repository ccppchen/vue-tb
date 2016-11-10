<template>
  <div :class="[similarColumn ? similarColumn : 'similar-two', myClass ? myClass : '']">
    <ul class="similar-ul">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'similar',
    props: {
      similarColumn: {
        type: String,
      },
      myClass: {
        type: String,
      }
    }
  };
</script>

<style lang="scss">
  @import "../tobe/function";
  .similar-item{
    display: inline-block;
    vertical-align: top;
    .similar-img{
      text-align: center;
    }
  }
  .similar-ul{
    font-size: 0;
    overflow: hidden;
  }
  .similar-title{
    margin: rem(10) rem(20);
    font-size: rem(24);
    color: #333;
    @include clamp;
    height: rem(72);
  }
  .similar-price{
    margin: 0 rem(20) rem(10) rem(20);
    color: #ff5000;
    font-size: rem(32);
    position: relative;
    .small-rmb{
      font-size: rem(20);
      font-style: normal;
      margin-right: 3px;
    }
    .join-cart{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      color: #666666;
      font-size: rem(20);
      @extend %comm-flex;
      *{
        padding: 4px 0 4px rem(10);
        line-height: 1;
      }

    }
  }
  // 商品列表，里面4个参数分别为：外盒子类名，想要几列，背景色，间隙
  @mixin similar-list( $class: similar-two, $col: 2, $bg: #ffffff, $padding: rem(20) ) {
    .#{"" + $class}{
      overflow: hidden;
      width: 100%;
      .similar-ul{
        margin-left: - $padding;
      }
      .similar-item{
        padding-left: $padding;
        width: (1 / $col)*100%;
        margin-bottom:$padding;
        text-align: left;
        font-size: rem(28);
      }
      .similar-inner{
        background: $bg;
      }
    }

  }
  @include similar-list(similar-two, 2, #fff, 4px);
  @include similar-list(similar-three, 3, #fff, 4px);
</style>
