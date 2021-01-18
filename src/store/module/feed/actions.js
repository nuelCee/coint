import axios from 'axios';

export default {
  fetchFeed() {
    return new Promise((resolve, reject) => {
      axios.get('https://cryptopanic.com/api/v1/posts/?auth_token=c93be8dafa1de3c611367f3de4386bffaae0a1ff').then((response) => {
        const { data } = response;
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};
