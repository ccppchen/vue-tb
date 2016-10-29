<template>
  <div class="tag" :class="color">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'orange'
      }
    }
  }
</script>

<style lang="scss">
  @import "../tobe/function";
  @import "./tag";
  $tagMulti: (orange #d91c29);
  @include simpleTag;
</style>
