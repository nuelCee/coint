<template>
  <div class="exchange">
    <div class="row">
      <div class="col exchange__title text-center">
        <div class="exchange__title--sub">Cryptocurrency</div>
        <div class="text-h3 exchange__title--main">Exchange</div>
      </div>
    </div>
    <div class="exchange__container q-mr-auto q-ml-auto q-pt-xl">
      <div class="row">
        <div class="col-6 exchange__container--title q-pb-lg">Send</div>
        <div class="col-6 text-right exchange__container--title q-pb-lg">
          Get
        </div>
      </div>
      <div class="row relative-position">
        <div class="exchange__container--symbol absolute flex justify-center">
          <div class="exchange__container--symbol-con q-pa-md">
            <q-icon size="25px" class="q-pa-md shadow-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <g data-name="repeat">
                    <rect width="24" height="24" opacity="0" />
                    <path
                      d="M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5z"
                    />
                    <path
                      d="M18.21 14.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z"
                    />
                  </g>
                </g>
              </svg>
            </q-icon>
          </div>
        </div>
        <div class="col-6 flex bg-secondary q-pl-md exchange__container--left">
          <q-select
            transition-show="jump-up"
            transition-hide="jump-up"
            bg-color="transparent"
            v-model="model"
            :options="options"
            square
            borderless
            hide-dropdown-icon
            class="ellipsis"
          >
            <template v-slot:prepend>
              <q-icon name="arrow_drop_down" color="primary" />
            </template>
            <template v-slot:append>
              <div class="line"></div>
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                <q-item-section avatar>
                  <q-icon :name="scope.opt.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label v-html="scope.opt.label" />
                  <q-item-label caption>{{
                    scope.opt.description
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-input
            v-model="text"
            bg-color="transparent"
            class=" flex"
            borderless
          />
        </div>
        <div
          class="col-6 flex bg-secondary q-pl-md exchange__container--left q-pr-md"
        >
          <q-input
            v-model="text"
            bg-color="transparent"
            class="text-end"
            borderless
          />
          <q-select
            transition-show="jump-up"
            transition-hide="jump-up"
            bg-color="transparent"
            v-model="model"
            :options="options"
            square
            borderless
            hide-dropdown-icon
            class="text-right"
          >
            <template v-slot:append>
              <q-icon name="arrow_drop_down" color="primary" />
            </template>
            <template v-slot:prepend>
              <div class="line"></div>
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                <q-item-section avatar>
                  <q-icon :name="scope.opt.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label v-html="scope.opt.label" />
                  <q-item-label caption>{{
                    scope.opt.description
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
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
      text: '',
      options: [
        {
          label: 'Google',
          value: 'Google',
          description: 'Search engine',
          icon: 'mail',
        },
        {
          label: 'Facebook',
          value: 'Facebook',
          description: 'Social media',
          icon: 'bluetooth',
        },
        {
          label: 'Twitter',
          value: 'Twitter',
          description: 'Quick updates',
          icon: 'map',
        },
        {
          label: 'Apple',
          value: 'Apple',
          description: 'iStuff',
          icon: 'golf_course',
        },
        {
          label: 'Oracle',
          value: 'Oracle',
          disable: true,
          description: 'Databases',
          icon: 'casino',
        },
      ],
    };
  },
};
</script>
