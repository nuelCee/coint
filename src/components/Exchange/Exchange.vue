<template>
  <div class="exchange">
    <div class="row">
      <div class="col exchange__title text-center">
        <div class="exchange__title--sub">Cryptocurrency</div>
        <div class="text-h3 exchange__title--main">Exchange</div>
      </div>
    </div>
      <div class="exchange__container q-mr-auto q-ml-auto q-pt-xl">
    <div class="row relative-position">
        <div class="col-6">
          <q-select
            label="Jump up"
            transition-show="jump-up"
            transition-hide="jump-up"
            filled
            bg-color="secondary"
            v-model="model"
            :options="options"
            style="width: 100%"
          />
        </div>
        <div class="exchange__container--symbol absolute">hdewfkl</div>
        <div class="col-6">
             <q-select
            label="Jump up"
            transition-show="jump-up"
            transition-hide="jump-up"
            filled
            bg-color="secondary"
            v-model="model"
            :options="options"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './Style/_exchange.scss';

export default {
  name: 'Exchange',
  data() {
    return {
      model: '',
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
    };
  },
};
</script>
