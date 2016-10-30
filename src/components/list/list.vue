<template>
  <div class="list-between">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "../tobe/function";
.list-between{
  background-color: #fff;
  .list-item{
    @extend %comm-flex;
    @include justify-content(space-between);
    @include hair(bottom, #e9e9e9);
    padding: 0 rem(30);
    font-size: rem(28);
    line-height: 1;
    height: rem(88);
    background-color: #fff;
    &:first-child:last-child,&:last-child{
      background-image: none;
    }
    .small-font{
      font-size: rem(24);
      color: #b4b4b4;
      background-size: rem(12) auto;
    }
  }
  .list-left,.list-right{
    @include display(flex);
    @include align-items(center);
    height: 100%;
  }

}
.arrow-forward{
  @extend %arrow-forward;
}
</style>
