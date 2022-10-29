<template>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div id="bmi">
            <div class="pt-4 me-5 mx-5 text-left">
                <label class="form-label">Username</label>
                <input type="email" class="form-control" v-model="username">
            </div>
            <div class="mt-2 me-5 mx-5 text-left">
                <label class="form-label">Age</label>
                <input type="email" class="form-control" v-model="age">
            </div>
            <div class="mt-2 mx-5 me-5 text-left">
                <label for="Intensity">Gender</label>
                <select class="form-select" aria-label="Gender">
                <option selected></option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                </select>
            </div>
                <div class="pt-4 me-5 mx-5 text-left">
                    <label class="form-label">Unit</label>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" value="us" name="flexRadioDefault" id="flexRadioDefault3" v-model="unit">
                    <label class="form-check-label" for="flexRadioDefault3">
                        US
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" value="metric" name="flexRadioDefault" id="flexRadioDefault4" v-model="unit">
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
                <div class="pb-3 mt-3 mx-5 text-left">
                    <button v-on:click="BMIresult" class="btn btn-secondary btn-md">Calculate</button>
                </div>
                <div class="pt-4 me-5 mx-5 text-left">
                <label class="form-label">BMI Result</label>
                <div v-if="bmi > 0">{{ bmi }}</div>
            </div>
            </div>
      </div>
    </div>
</template>

<script>

export default {
    name: "bmiCalc",
    data: function() {
        return {
            username: "",
            age:"",
            gender: "male",
            weight: "",
            height: "",
            bmi: 0,
            unit: "metric",
        };
    },
    methods: {
        BMIresult() {
            if (this.unit === "metric") {
                this.bmi = this.weight / this.height ** 2;
                if (this.bmi < 15.5) {
                    return this.bmi.toFixed(2) + 'underweight';
                } else if (this.bmi < 18.5) {
                    return this.bmi.toFixed(2) + 'slightly underweight';
                }
            } else {
                this.bmi = (this.weight * 703) / this.height ** 2;
            }
        },
    },
    // computed: {
    //     bmiComputation: function() {
    //         let weight = parseInt(this.weight);
    //         let height = parseInt(this.height) / 100;
    //         let bmi = weight / (height * height)
    //     }
    // }
};

</script>

<style>

#bmi {
    background-color: hsla(44,30%,47%,.60);
    margin: auto;
    border-radius: 25px;
}

</style>