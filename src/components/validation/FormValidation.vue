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
import router from "../../router/router";
//import axios from "axios"; 

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
    computed: {
        loginUsers(){
             return this.$store.state.loginUsers;
        }
    },
  methods: {
   async submitForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(
          `User Name: ${this.userName}, Email: ${this.email}, Password: ${this.password}`
        );
        this.loginUsers.forEach(e => {
          if(e.userName == this.userName && e.email == this.email && e.password == this.password) {
            console.log("giriş başarılı");
            router.push({path:'/userpage'});
          }
          else {
            console.log("başarısız!");  
          }
        });
      }
    }
    //Assuming utils controls and token
    //Example for api login
    // async Login(loginInfo) {
    //     if (loginInfo.UserName != "" && loginInfo.Password) {
    //       let response = await axios.post("auth/login", loginInfo);

    //       if (this.$utils.isResponseReturnedOk(response)) {
    //         localStorageService.set({
    //           key: "user",
    //           value: response.data.data
    //         });
    //         this.$router.push("/");
    //       } else if (!response.data.state) {
    //         this.loginInfo.ErrorMessage = response.data.message;
    //       }
    //     }
    //   }

      // checkUserInfo() {
      //   let userInfo = localStorageService.get("user");

      //   console.log(userInfo.accessToken);
      //   if (!this.$utils.isNullOrUndefined(userInfo)) {
      //     axios
      //       .get("/token/validatetoken", {
      //         params: {
      //           token: userInfo.accessToken
      //         }
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //         this.$router.push("/auth/login");
      //       });
      //   }
      // }
  }
};
</script>

<style scoped>
</style>