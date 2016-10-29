<template>
  <div class="page-content"><slot></slot></div>
</template>

<style>
  .page-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .bar + .page-content{
    top: .88rem;
  }
</style>
