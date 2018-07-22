<template>
  <div class="container">
    <h2>Users</h2>
    <div v-if="loading">loading...</div>
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  // async fetch ({ store, params }) {
  //   await store.dispatch('users/getUsers')
  // },
  computed: mapState({
    users: state => state.users.list,
    loading: state => state.users.loading
  }),
  created () {
    this.$store.dispatch('users/getUsers')
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
.users {
  list-style-type: none;
}
.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>
