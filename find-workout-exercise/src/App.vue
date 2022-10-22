<template>
  
  <div id="homepage">
    <section>
      <nav class="navbar navbar-expand-lg bg-light mb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Fitness Passion</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" v-on:click="changePage('home')">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" v-on:click="changePage('login')">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" v-on:click="changePage('bmi')">BMI Calculator</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </nav>
    </section>
    <div class="container-fluid">
      <Home v-if="page === 'home'"/>
      <Login v-if="page === 'Login'" v-on:login-page="changePage('login')"/>
      <BMI v-if="page ==='bmi'"/>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import BMI from './components/BMI.vue';

export default {
  name: 'App',
  data: function() {
    return {
      page: "home", 
    };
  },
  components: {
    Home,
    Login,
    BMI,
  },
  methods: {
    changePage(newPage) {
      this.page = newPage;
    }
  }
}
</script>

<style>
#homepage {
  background-image: url(assets/backgroundB.jpg);
  height: 100vh;
  width: 100%;
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

.loginForm {
  background-color: hsla(44,30%,47%,.60);
  height: 90%;
  width: 30%;
  /* margin-top: 20px;
  margin-left: 25px; */
  margin: auto;
  border-radius: 25px;
}

div {
  display: block;
}

/* @media (min-width: 280px) {
  .loginForm {
    background-color: hsla(44,30%,47%,.75);
    height: 90%;
    width: 25%;
    margin: auto;
    border-radius: 25px;
  }
} */
</style>
