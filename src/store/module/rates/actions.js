import axios from 'axios';

export default {
  fetchRates() {
    return new Promise((resolve, reject) => {
      axios.get('https://api.coinlore.net/api/tickers/').then((response) => {
        const { data } = response;
        resolve(data.data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};
