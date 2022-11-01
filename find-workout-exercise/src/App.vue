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
                <a class="nav-link active" aria-current="homepage" href="#" v-on:click="changePage('home')">Home</a>
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
      <div><fitnessExer v-if="page ==='fitness'"/></div>
    </section>
    <div class="container-fluid">
      <homeView v-if="page === 'home'"/>
      <loginView v-if="page === 'login'"/>
      <bmiCalc v-if="page ==='bmi'"/>
      <bmiMetric v-if="page === 'bmiMetric'"/>
      <!-- <fitnessExer v-if="page ==='fitness'"/> -->
    </div>
  </div>
</template>

<script>
import homeView from './components/homeView'
import loginView from './components/loginView'
import bmiCalc from './components/bmiCalc'
import fitnessExer from './components/fitnessExer'
import bmiMetric from './components/bmiMetric'

export default {
  name: 'App',
  data: function() {
    return {
      page: "home", 
    };
  },
  components: {
    homeView,
    loginView,
    bmiCalc,
    fitnessExer,
    bmiMetric,
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

div {
  display: block;
}

</style>
