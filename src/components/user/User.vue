<template>
  <div class="w3-pale-green">
    <div class="clearfix">

      <h3 style="float: left">Manage An Account</h3>
      <button class="w3-btn w3-orange" style="float: right" @click="goHome">Home</button>

    </div>

        <hr />

    <!-- Render UserStart Component -->
    <div class="w3-animate-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goHome() {
        this.$router.push({ name: 'home' });
      }
    }
  }
</script>

<style>
  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }
</style>
