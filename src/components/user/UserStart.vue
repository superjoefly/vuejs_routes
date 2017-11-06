<template>
    <div>
        <p>Please select a User</p>
        <p>Password Hint: admin</p>

        <hr />

        <ul class="w3-ul w3-hoverable">
            <router-link
              tag="li"
              to="/user/1"
              class="list-group-item"
              style="cursor: pointer"
              id="user1"
              >
              User 1
            </router-link>

            <router-link
              tag="li"
              to="/user/2"
              class="list-group-item"
              style="cursor: pointer"
              id="user2"
              >
              User 2
            </router-link>

            <router-link
              tag="li"
              to="/user/3"
              class="list-group-item"
              style="cursor: pointer"
              id="user3"
              >
              User 3
            </router-link>

        </ul>
    </div>
</template>

<script>

export default {
  // Password Check
  beforeRouteLeave(to, from, next) {
    if (event.target.id === 'user1' && prompt("Please, enter password") !== 'admin') {
      next(false)
    } else if (event.target.id === 'user2' && prompt("Please, enter password") !== 'admin') {
      next(false)
    } else if (event.target.id === 'user3' && prompt("Please, enter password") !== 'admin') {
      next(false)
    } else {
      next()
    }
  }
}

</script>
