<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="relative-position">
      <q-toolbar bordered>
        <q-btn
          flat
          dense
          round
          icon="eva-menu-2"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          coint
        </q-toolbar-title>
        <q-item>
          <q-item-section top avatar class="q-pa-none">
            <q-avatar text-color="primary" icon="eva-github-outline" class="q-ml-auto"/>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <SidebarLinks
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <div>
      <router-view />
    </div>
  </q-layout>
</template>

<script>
import SidebarLinks from 'components/Sidebar/Links.vue';
import linksData from '../mixins/Sidebar/links';

export default {
  name: 'MainLayout',
  components: { SidebarLinks },
  mixins: [linksData],
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
