<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .page, .view, body {
    box-sizing: border-box;
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .slide-enter-active, .slide-leave {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all .2s;
  }
  .slide-enter {
    opacity: 0;
    transform: translate3d(70%, 0, 0);
  }
  .slide-leave-active {
    opacity: 0;
    transform: translate3d(-70%, 0, 0);
  }

  .transition-reverse {
    .slide-enter {
      opacity: 0;
      transform: translate3d(-70%, 0, 0);
    }
    .slide-leave-active {
      opacity: 0;
      transform: translate3d(70%, 0, 0);
    }
  }
</style>
