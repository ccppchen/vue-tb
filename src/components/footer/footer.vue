<template>
  <footer class="footer footer-light">
    <slot></slot>
  </footer>
</template>

<style lang="scss">
@import "../tobe/function";
.footer + .page-content,.footer ~ .page-content{
  bottom: rem(100);
}
.footer + .page{
  bottom: rem(100);
}
.footer{
  position: absolute;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: rem(100);
  /* @include box-shadow(0 0 10px 0 rgba(155,143,143,0.6)); */
  @include hair(top, #d8d8d8);
  &.footer-light{
    background-color: #f9f5f4;
  }
  @extend %comm-flex;
  .footer-item{
    @include flex(1);
    width: 0;
    @include justify-content(center);
    text-align: center;
    @extend %comm-flex;
    height: 100%;
    a{
      display: block;
      font-size: 0;
    }
    i{
      font-size: rem(45);
      line-height: 1;
      color: #555555;
    }
    .tab-tro{
      font-size: rem(24);
      color: #333333;
      line-height: 1;
      margin-top: rem(10);
    }
    &.active{
      i,.tab-tro{
        color: #fc511e;
      }
    }
  }
}
</style>
