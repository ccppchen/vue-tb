<template>
  <page>
    <bar :barTitle="'分类'" :nav="true" :icons="[]"></bar>
    <page-content>

    </page-content>

  </page>
</template>

<script>
import { Page, PageContent } from '../components/page';
import { Bar } from '../components/bar';

export default {
  components: {
    Bar,
    Page,
    PageContent,
  },
  data() {
    return {
      // headIcons: [
      //   { icon: 'more-v', href: 'https://www.baidu.com' }
      // ],
    };
  },
  methods: {

  },
};
</script>
