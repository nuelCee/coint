<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
    class=""
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="`eva-${icon}`" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Links',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
};
</script>
