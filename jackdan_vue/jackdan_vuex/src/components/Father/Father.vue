<template>
  <div class="container">
    <span class="app-data">{{count}}</span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {}
  },

  methods: {

  },
  
  computed: {
    ...mapGetters([
      'count'
    ])
  }
}
</script>
<style scoped>
.container {
  display: block;
  width: 300px;
  height: 300px;
  border: 1px solid red;
}

</style>