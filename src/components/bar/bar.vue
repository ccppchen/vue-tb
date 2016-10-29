<template>
  <header :class="['bar', 'bar-header', barStyle ? barStyle : 'bar-light']">
    <div class="bar-left">
        <a v-back-link class="button" v-if="barLeft">
            <div :class="['iconfont', barLeftIcon ? barLeftIcon : 'arrow-back']"></div>{{ barLeftText }}
        </a>
    </div>
    <h1 class="title" v-once v-cloak>
        {{ barTitle }}
    </h1>
    <div class="bar-right" v-if="nav">
      <j-nav></j-nav>
    </div>
    <div class="bar-right" v-else>
      <a :href="icon.href" :class="['button', 'iconfont', icon.icon]" v-for="icon in icons"></a>
    </div>
  </header>
</template>

<script lang="babel">
  import Jnav from './nav'

  export default {
    name: 'bar',
    props: {
      barStyle: {
        type: String
      },
      barLeft: {
        type: Boolean,
        default: true
      },
      barLeftIcon: {
        type: String
      },
      barLeftText: {
        type: String
      },
      barTitle: {
        type: String
      },
      icons: {
        type: Array,
        default: [{ icon: 'more-v', href: 'javascript:;' }],
        require: false
      },
      nav: {
        type: Boolean,
        default: false,
      }
    },
    components: {
      'j-nav': Jnav
    }
  };
</script>

<style lang="scss">
@import "../tobe/function";
@import "bar";
</style>
