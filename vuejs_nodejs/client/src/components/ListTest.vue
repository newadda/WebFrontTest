<template>
  <div>
    <button @click="refresh">새로고침</button>
    <table>
      <th v-for="(item, index) in columns" :key="index">{{ item }}</th>
      <tr></tr>
    </table>

    <p>{{ text }}</p>
    <button></button>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'ListTest',
  props: {
    id: String,
    password: String,
  },
  data() {
    return {
      columns: ['컬럼1', '컬럼2'],
      text: '이것',
      datas: [],
    };
  },

  methods: {
    refresh() {
      axios
        .create({
          url: '',
          baseURL: 'http://192.168.1.19:8080//api/v1/sms_admin/sms_addrs',
          method: 'get',
          // withCredentials: true,
        })
        .request()
        .then((res) => {
          this.columns = ['zz'];
          console.log(res);
        });
    },
  },
};
</script>
