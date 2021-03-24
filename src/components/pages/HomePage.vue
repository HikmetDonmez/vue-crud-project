<template>
  <div class="container mt-5 mb-5" style="width: 500px">
      <FormValidation />
      <div>
          <li v-for="user in loginUsers" v-bind:key="user.name">
              <span class="name">{{user.name}}</span>
              <span class="email">{{user.email}}</span>
          </li>
      </div>
  </div>
</template>

<script>
import FormValidation from '../validation/FormValidation'

export default {
    components: {
        FormValidation
    },
    computed: {
        loginUsers(){
            return this.$store.state.loginUsers;
        }
    }
}

</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>