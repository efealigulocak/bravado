<template>
  <div>
    <b-container id="login-register">
      <p id="mainheader">BRAVADO Registeration</p>
      <nuxt-link to="/">Homepage</nuxt-link>
      <b-row>
        <b-col md="6">
          <div id="socialdiv">
            <p id="header" class="text-center">LOGIN FORM</p>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="input-group-1" label="Email address:" label-for="input-email">
                <b-form-input
                  id="input-email"
                  v-model="login.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Password:" label-for="input-pw">
                <b-form-input
                  id="input-pw"
                  v-model="login.Password"
                  type="password"
                  required
                  placeholder="Password"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" size="lg" variant="primary">Login via account</b-button>

              <b-button href size="lg" variant="danger">Login via Gmail</b-button>
            </b-form>
          </div>
        </b-col>
        <b-col md="6">
          <div id="registerform">
            <p id="header" class="text-center">REGISTER FORM</p>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-email-register"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-email-register"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-name">
                <b-form-input id="input-name" v-model="form.name" required placeholder="Enter name"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Surname:" label-for="input-surName">
                <b-form-input
                  id="input-surName"
                  v-model="form.surName"
                  required
                  placeholder="Enter surname"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Age:" label-for="input-age">
                <b-form-input
                  type="number"
                  id="input-age"
                  v-model="form.age"
                  required
                  placeholder="Enter age"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Your gender">
                <b-form-radio v-model="form.gender" name="some-radios" value="male">Male</b-form-radio>
                <b-form-radio v-model="form.gender" name="some-radios" value="female">Female</b-form-radio>
              </b-form-group>

              <b-form-group id="input-group-3" label="Password:" label-for="input-pw1">
                <b-form-input
                  id="input-pw1"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Enter Password"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Password again:" label-for="input-pw2">
                <b-form-input
                  id="input-pw2"
                  v-model="form.password2"
                  type="password"
                  required
                  placeholder="Password again"
                ></b-form-input>
              </b-form-group>

              <b-button type="reset" variant="danger" class="float-left">Reset Form</b-button>
              <b-button type="submit" variant="primary" class="float-right">Register</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login:{
       email:"",
       password:""
      },
      form: {
        email: '',
        name: '',
        surName:"",
        password: "",
        password2:"",
        gender: '',
        age: 0
      },

      show: true
    }
  },
  methods: {
    onReset: function() {
      this.form.email=""
      this.form.name= ''
      this.form.surName=""
      this.form.password= ""
      this.form.password2=""
      this.form.gender= ''
      this.form.age=0
    },
    onSubmit: function() {}
  }
}
</script>

<style>
#mainheader {
  font-size: 50px;
  text-align: center;
  background-color: lightblue;
  color: black;
  padding: 40px;
}

#login-register {
  background: white;
  padding: 10px;
}

#header {
  font-size: 30px;
  text-align: center;

  color: black;
  padding: 40px;
}
</style>
