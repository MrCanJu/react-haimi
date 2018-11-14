import axios from 'axios';
export default {
  get(url, params) {
    return axios.get(url, {params}).then(res => res.data);
  },
  post(url, params) {
    return axios.post(url, params).then(res => res.data);
  }
};

