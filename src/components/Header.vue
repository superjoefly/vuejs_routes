<template>
  <div class="w3-container">
    <nav class="w3-bar w3-blue">
      <router-link
      to="/"
      tag="li"
      class="w3-bar-item w3-button w3-mobile"
      exact
      >Home</router-link>

      <router-link
      to="/user"
      tag="li"
      class="w3-bar-item w3-button w3-mobile"
      >Accounts</router-link>
    </nav>

      <!-- Render Home Component -->
      <transition appear name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

    </div>
</template>

<script>
</script>

<style>
  .router-link-active {
    background-color: grey;
  }

  .fade-enter {
    opacity: 0 !important;
  }

  .fade-enter-active {
    opacity: 1;
    transition: all 1s ease;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    opacity: 0;
    transition: all 1s ease;
  }
</style>
