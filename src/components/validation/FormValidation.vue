<template>
  <div>
    <h2>Login Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>User Name</label>
        <input type="text" v-model="userName" class="form-control" />
        <span v-if="!$v.userName.required && $v.userName.$dirty" class="text-danger">User name is required!</span>
        <span v-if="!$v.userName.alpha && $v.userName.$dirty" class="text-danger">User name is required!</span>
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" class="form-control" />
        <span
          v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
          class="text-danger"
        >Valid Email is required!</span>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control" />
        <span
          v-if="!$v.password.required && $v.password.$dirty"
          class="text-danger"
        >Password is required!</span>
        <span
          v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty"
          class="text-danger"
        >Password must be between {{ $v.password.$params.minLength.min}} and {{ $v.password.$params.maxLength.max}} characters!</span>
      </div>
       <br> <button type="submit" class="btn btn-primary mt-2">Sign in</button>
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  email
} from "vuelidate/lib/validators";
export default {
  data: () => ({
    userName: "",
    email: "",
    password: "",
  }),
  validations: {
    userName: {
      required,
      alpha
    },
    email: {
      required,
      email
    },
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6)
    }
  },
  methods: {
    submitForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(
          `Name: ${this.name}, Email: ${this.email}, Password: ${this.password}`
        );
      }
    }
  }
};
</script>

<style scoped>
</style>