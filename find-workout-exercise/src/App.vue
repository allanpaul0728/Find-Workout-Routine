<template>
  
  <div id="homepage">
    <section>
      <NavBar/>
    </section>
    <div class="loginForm">
      <div class="pt-4 me-5 mx-5 text-left">
        <label class="form-label">Full Name</label>
        <input type="email" class="form-control" v-model="fullname">
      </div>
      <div class="mt-2 me-5 mx-5 text-left">
        <label class="form-label">Email Address</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="mt-2 me-5 mx-5 text-left">
        <label class="form-label">Username</label>
        <input type="email" class="form-control" v-model="username">
      </div>
      <div class="mt-2 mx-5 text-left">
        <label class="form-label">Gender</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
      </div>
      <div class="mt-2 mx-5 me-5 text-left">
        <label for="Gender">Fitness Goal</label>
        <select class="form-select" aria-label="Gender">
          <option selected>Goal</option>
          <option value="1">Lose Weight</option>
          <option value="2">Gain Weight</option>
          <option value="3">Lean Muscle</option>
          <option value="4">Bulky Muscle</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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
  background-color: hsla(44,30%,47%,.75);
  opacity: 0.75;
  height: 85%;
  width: 25%;
  margin-top: 20px;
  margin-left: 25px;
  border-radius: 25px;
}
</style>
