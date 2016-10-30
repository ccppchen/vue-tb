<template>
  <router-link :to="url" tag="div" v-if="url !== ''" class="list-item">
    <div :class="['list-left', leftClass ? leftClass : null]" v-once>{{ leftText ? leftText : null }}</div>
    <div :class="['list-right', rightClass ? rightClass : '', arrowForward ? arrowForward : null]" v-once>{{ rightText ? rightText : null }}</div>
  </router-link>
  <div class="list-item" v-else>
    <div :class="['list-left', leftClass ? leftClass : null]" v-once>{{ leftText ? leftText : null }}</div>
    <div :class="['list-right', rightClass ? rightClass : '', arrowForward ? arrowForward : null]" v-once>{{ rightText ? rightText : null }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      leftClass: {
        type: String,
      },
      leftText: {
        type: String,
      },
      rightClass: {
        type: String,
      },
      rightText: {
        type: String,
      },
      arrowForward: {
        type: String,
        default: 'arrow-forward',
      },
      url: {
        type: String,
        default: '',
      }
    },
  };
</script>
