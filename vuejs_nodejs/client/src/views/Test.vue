<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListTest></ListTest>
  </div>
</template>

<script>
// @ is an alias to /src
import ListTest from '@/components/ListTest.vue';

export default {
  name: 'Test',
  components: {
    ListTest,
  },
};
</script>
