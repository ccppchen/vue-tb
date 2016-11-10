<template>
  <page>
    <bar :barTitle="'分类'" :nav="true" :icons="[]"></bar>
    <page-content>
      <swipe class="my-swipe" :prevent="true">
        <swipe-item v-for="swipeItem in data.swipeItems">
          <a :href="swipeItem.url">
            <img v-lazy="swipeItem.img">
          </a>
        </swipe-item>
      </swipe>
      {{ time }}
    </page-content>

  </page>
</template>

<script>
import { Page, PageContent } from '../components/page';
import { Bar } from '../components/bar';
import { Swipe, SwipeItem } from '../components/vue-swipe';
import { mapGetters, mapActions } from 'vuex';
import utils from '../utils';
export default {
  components: {
    Bar,
    Page,
    PageContent,
    Swipe,
    SwipeItem,
  },
  data() {
    return {
      time: '',
    }
  },
  computed: {
    ...mapGetters({
      data: 'allHomeResource'
    })
  },
  created () {
    this.$store.dispatch('getAllClass')
    this.time = utils.fmtDate(new Date(), "yyyy年MM月dd日 hh:mm:ss");
  }
};
</script>
