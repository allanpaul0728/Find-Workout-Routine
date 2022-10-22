<template>
    <div id="bmi">
      <div class="pt-4 me-5 mx-5 text-left">
        <label class="form-label">Username</label>
        <input type="email" class="form-control" v-model="username">
      </div>
      <div class="mt-2 me-5 mx-5 text-left">
        <label class="form-label">Age</label>
        <input type="email" class="form-control" v-model="age">
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
        <div class="pt-4 me-5 mx-5 text-left">
            <label class="form-label">Unit</label>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
            <label class="form-check-label" for="flexRadioDefault3">
                US
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
            <label class="form-check-label" for="flexRadioDefault4">
                Metric
            </label>
            </div>
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
            <label class="form-label">Weight</label>
            <input type="email" class="form-control" v-model="weight">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
            <label class="form-label">Height</label>
            <input type="email" class="form-control" v-model="height">
        </div>
        <div class="mt-3 mx-5 text-left">
            <button v-on:click="BMIresult" class="btn btn-secondary btn-lg">Calculate</button>
        </div>
        <div v-if="bmi > 0">{{ bmi }}</div>
    </div>
</template>

<script>

export default {
    name: "App",
    data: function() {
        return {
            username: "",
            age:"",
            gender: "male",
            bmi: 0,
            unit: "metric",
        };
    },
    methods: {
        BMIresult() {
            if (this.unit === "metric") {
                this.bmi = this.weight / this.height ** 2;
            } else {
                this.bmi = (this.weight * 703) / this.height ** 2;
            }
        },
    },
};

</script>

<style>

#bmi {
    background-color: hsla(44,30%,47%,.60);
    height: 90%;
    width: 30%;
    margin: auto;
    border-radius: 25px;
}

</style>