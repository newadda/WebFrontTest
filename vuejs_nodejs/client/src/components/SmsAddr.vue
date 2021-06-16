<template>
  <div>
      <div>
        <span>id : </span> <input>
      </div>
       <div>
        <span>password : </span> <input>
      </div>
    <button></button>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'SmsAddr',
  props: {
    id: String,
    password: String,
  },
  methods: {
    login() {
      axios.create({
        url: '/oauth/token',
        baseURL: 'http://192.168.1.36:9090/',
        method: 'post',
        headers: {

          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
          grant_type: 'password',
          username: 'root',
          password: 'hong2020#@',
          scope: null,

        },
        auth: {
          username: 'my_client_id',
          password: 'my_client_secret',
        },

      });
    },

  },
};
</script>
