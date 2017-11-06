<template>
  <div class="w3-pale-green">
    <div class="clearfix">

      <h3 class="w3-left w3-padding">Manage An Account</h3>

      <button class="w3-button w3-orange" style="float: right" @click="goHome">Home</button>

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

<style scoped>
  .w3-button {
    border-radius: 50%;
    transform: translate(-5px, 10px)
  }
  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }
</style>
