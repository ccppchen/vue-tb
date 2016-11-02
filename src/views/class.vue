<template>
  <page>
    <bar :barTitle="'分类'" :nav="true" :icons="[]"></bar>
    <page-content>
      <!-- <p>{{ count }}</p> -->
        <!-- <p>
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </p> -->
        <swipe class="my-swipe" :prevent="true">
          <swipe-item v-for="swipeItem in swipeItems.swipeItems">
            <a :href="swipeItem.url">
              <img v-lazy="swipeItem.img">
            </a>
          </swipe-item>
        </swipe>

        <!-- <ul>
          <li v-for="article in articles">
            {{article.text}}
          </li>
        </ul> -->
        <!-- {{ data.swipeItems }} -->
    </page-content>

  </page>
</template>

<script>
import { Page, PageContent } from '../components/page';
import { Bar } from '../components/bar';
import { Swipe, SwipeItem } from '../components/vue-swipe';
import { mapGetters, mapActions } from 'vuex';
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment: state => state.count++,
//     decrement: state => state.count--
//   }
// })

export default {
  components: {
    Bar,
    Page,
    PageContent,
    Swipe,
    SwipeItem,
  },
  computed: mapGetters({
    swipeItems: 'allClass'
  }),
  created () {
    this.$store.dispatch('getAllClass')
  }
  // mounted () {
  //   this.increment();
  //   // GET /someUrl
  //   this.$http.get('http://localhost:3000/vue/vuetb',{}, {emulateJSON: true}).then((response) => {
  //     // success callback
  //     this.data = response.data;
  //     console.log(response.data.swipeItems[0].url)
  //   }, (response) => {
  //     // error callback
  //   });
  // },
  // methods: {
  //   increment () {
  //     store.commit('increment')
  //   },
  //   decrement () {
  //     store.commit('decrement')
  //   }
  // },

};
</script>
