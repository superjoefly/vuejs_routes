<template>
  <div>

    <h3 class="w3-margin-left">User Edit Page</h3>

    <hr />

    <!-- output query parameters from UserDetail-->
    <div class="w3-container">
      <p>User Id: {{ $route.params.id }}</p>
      <p>Locale: {{ $route.query.locale }}</p>
      <p>Analytics: {{ $route.query.q }}</p>

      <hr />

      <button @click="confirmed = true" class="w3-button w3-green" title="Confirmation of User Details">Confirm</button>
    </div>


    <!-- Demonstrate navigating to specific point on page -->

    <!-- Hash (#data) is set for 'link' in UserDetail.vue -->
    <!-- Code for scrollBehavior is set in main.js -->

    <div style="height: 500px"></div>
    <p id="data" style="color: red; padding: 5px;">Demonstration of automatic scroll (using scrollBehavior and hash).</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    }
  },

  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else if (confirm("Are you sure?")) {
      next();
    } else {
      next(false);
    }
  }
}

</script>
