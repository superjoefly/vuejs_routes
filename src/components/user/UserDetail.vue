<template>
  <div class="w3-animate-bottom">

    <div class="w3-pale-yellow" v-if="id == 1">
      <h3 class="w3-padding">User Details</h3>
      <button class="w3-button w3-green w3-right back-button" @click="goBack">Back</button>
    </div>

    <div class="w3-pale-blue" v-if="id == 2">
      <h3>User Details</h3>
      <button class="w3-button w3-green w3-right" @click="goBack">Back</button>
    </div>

    <div class="w3-pale-red" v-if="id == 3">
      <h3>User Details</h3>
      <button class="w3-button w3-green w3-right" @click="goBack">Back</button>
    </div>

    <!-- Output id params from route -->
    <div class="w3-padding">
      <p>User loaded has ID: {{ $route.params.id }}</p>
      <hr />

      <router-link
        tag="button"
        :to="link"
        class="w3-button w3-blue"
        >Edit User
      </router-link>
    </div>

  </div>
</template>


<script>

export default {

  data() {
    return {
      link: {
        name: 'userEdit',
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: 'en',
          q: 100
        },
        // hash is for scrollBehavior
        hash: '#data'
      },

      id: this.$route.params.id
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }

  //beforeRouteEnter Guard
  // beforeRouteEnter(to, from, next) {
  //   // console.log('local beforeRouteEnter Guard!');
  //   // next();
  //
  //   if(true) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // }
}
</script>

<style scoped>
  .back-button {
    border-radius: 50%;
    transform:translateX(-5px);
  }
</style>
