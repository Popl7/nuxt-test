<template>
  <div>
    <div v-if="user" class="user">
      <h3>{{ user.name }}</h3>
      <h4>@{{ user.username }}</h4>
      <p>Email : {{ user.email }}</p>
    </div>
    <p><nuxt-link to="/users">List of users</nuxt-link></p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  computed: mapState({
    user: state => state.user.item
  }),
  created () {
    this.$store.dispatch('user/getUser', +this.$route.params.id)
  }
}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
