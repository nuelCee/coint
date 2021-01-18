<template>
  <div class="rate">
    <q-table
      class="table"
      :data="ratesData"
      :columns="columns"
      row-key="name"
      flat
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      :hide-bottom="true"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width>Coints</q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-avatar size="24px" class="q-mr-md">
              <img :src="`/rate_icons/${props.row.symbol}.svg`" />
            </q-avatar>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.name === "name" ? col.value : `` }}
            {{ col.name === "price_usd" ? formatMoney(col.value) : '' }}
            <span :class="!changeInValue(props.row.percent_change_1h) ? `green-8` : `red`">
            {{ col.name === "percent_change_1h" ? `${col.value}%` : ''}}
            </span>
            <span :class="!changeInValue(props.row.percent_change_24h) ? `green-8` : `red`">
            {{ col.name === "percent_change_24h" ? `${col.value}%` : ''}}
            </span>
            <span :class="!changeInValue(props.row.percent_change_7d) ? `green-8` : `red`">
            {{ col.name === "percent_change_7d" ? `${col.value}%` : ''}}
            </span>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import './Style/_rate.scss';
import formatMoney from '../../mixins/formatMoney';
import change from '../../mixins/change';

export default {
  name: 'Rate',
  data() {
    return {
      pagination: {
        rowsPerPage: 0,
      },
      columns: [
        {
          name: 'name',
          required: true,
          label: '',
          align: 'left',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'price_usd',
          align: 'left',
          label: 'Last Price',
          field: 'price_usd',
          sortable: true,
        },
        {
          name: 'percent_change_1h',
          label: '1h Change',
          field: 'percent_change_1h',
          sortable: true,
        },
        {
          name: 'percent_change_24h',
          label: '24h Change',
          field: 'percent_change_24h',
          sortable: true,
        },
        {
          name: 'percent_change_7d',
          label: '7d Change',
          field: 'percent_change_7d',
          sortable: true,
        },
        {},
      ],
      ratesData: [],
    };
  },
  mixins: [formatMoney, change],
  created() {
    this.$store.dispatch('rates/fetchRates').then((res) => {
      this.ratesData = res;
    });
  },
};
</script>
