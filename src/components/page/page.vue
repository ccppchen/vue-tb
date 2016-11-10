<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .page, .view, body {
    box-sizing: border-box;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .slide-leave-active, .slide-enter-active{
    transition: transform .2s;
  }
  .slide-enter-active, .slide-leave {
    transform: translate3d(0, 0, 0);

  }
  .slide-enter, .slide-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  // .slide-leave{
  //   transform: translate3d(0, 0, 0);
  // }
  // .slide-leave-active{
  //   transform: translate3d(-100%, 0, 0);
  // }
  .transition-reverse {
    .slide-enter {
      transform: translate3d(100%, 0, 0);
    }
    .slide-enter-active {
      transform: translate3d(0, 0, 0);
    }
    .slide-leave {
      transform: translate3d(0, 0, 0);
    }
    .slide-leave-active {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
