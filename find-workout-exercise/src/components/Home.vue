<template>
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
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
      </div>
      <div class="mt-2 mx-5 me-5 text-left">
        <label for="Goal">Fitness Goal</label>
        <select class="form-select" aria-label="Fitness Goal">
          <option selected></option>
          <option value="1">Lose Weight</option>
          <option value="2">Gain Weight</option>
          <option value="3">Lean Muscle</option>
          <option value="4">Bulky Muscle</option>
        </select>
      </div>
      <div class="mt-2 mx-5 me-5 text-left">
        <label for="Intensity">Difficulty</label>
        <select class="form-select" aria-label="Difficulty">
          <option selected></option>
          <option value="1">Beginner</option>
          <option value="2">Intermediate</option>
          <option value="3">Advanced</option>
        </select>
      </div>
      <div class="mt-2 mx-5 text-left">
        <label class="form-label">Program</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Chest
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Shoulder
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Back
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Biceps
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Triceps
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
          <label class="form-check-label" for="flexCheckDefault">
            Legs
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
          <label class="form-check-label" for="flexCheckDefault">
            Forearm
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
          <label class="form-check-label" for="flexCheckDefault">
            Abdominal
          </label>
        </div>
      </div>
      <div class="mt-3 mx-5 text-left">
        <button v-on:click="submit" class="btn btn-secondary btn-lg">Submit</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loginForm {
  background-color: hsla(44,30%,47%,.60);
  height: 95%;
  width: 30%;
  /* margin-top: 20px;
  margin-left: 25px; */
  margin: auto;
  border-radius: 25px;
}
/* h3 {
  margin: 40px 0 0;
} */
/* ul {
  list-style-type: none;
  padding: 0;
} */
/* li {
  display: inline-block;
  margin: 0 10px;
} */
/* a {
  color: #42b983;
} */
</style>
