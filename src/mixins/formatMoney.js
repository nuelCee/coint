export default {
  methods: {
    formatMoney(value) {
      const mon = new Intl.NumberFormat('en-US', { style: 'decimal' });
      return `$${mon.format(String(value).replace(/,/gi, ''))}`;
    },
  },
};
