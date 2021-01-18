<template>
  <q-page>
    <div>
      <marquee-text :duration="150">
       <div v-for="(info,i) in feed" :key="i" class="feed">
         <q-avatar>
           {{info.title.substring(0, 1)}}
         </q-avatar>
         {{info.title}}
         <a :href="info.url">
         <q-btn color="primary" label="Learn More" />
    </a>
       </div>
      </marquee-text>
    </div>
    <div class="q-ml-auto q-mr-auto q-pt-xl" style="width:90%">
    <!-- <exchange class="q-mb-xl"/> -->
    <rate/>
    </div>
  </q-page>
</template>

<script>
// import Exchange from 'src/components/Exchange/Exchange.vue';
import MarqueeText from 'vue-marquee-text-component';
import Rate from '../components/Rates/Rate.vue';

export default {
  name: 'PageIndex',
  data() {
    return {
      feed: [],
    };
  },
  components: {
    Rate,
    MarqueeText,
    // Exchange,
  },
  created() {
    this.$store.dispatch('feed/fetchFeed').then((res) => {
      this.feed = res.results;
      console.log(res.results);
    });
  },
};
</script>
