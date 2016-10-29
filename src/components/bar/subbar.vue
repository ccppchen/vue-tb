<template>
  <div class="subhead">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import "../tobe/function";
  .subhead{
    position: absolute;
    top: $bar-height;
    left: 0;
    right: 0;
    height: $bar-height;
    + .page-content{
      top: $bar-height*2;
    }
  }

</style>
