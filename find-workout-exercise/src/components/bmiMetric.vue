<template>
    <!-- <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4"> -->
        <div id="bmi">
            <div class="pt-4 me-5 mx-5 text-left">
                <label class="form-label">Username</label>
                <input type="email" class="form-control" v-model="username">
            </div>
            <div class="mt-2 me-5 mx-5 text-left">
                <label class="form-label">Age</label>
                <input type="email" class="form-control" v-model="age">
            </div>
                <div class="pt-4 me-5 mx-5 text-left">
                    <label class="form-label">Gender</label>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" v-model="unit">
                    <label class="form-check-label" for="flexRadioDefault3">
                        Male
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" v-model="unit">
                    <label class="form-check-label" for="flexRadioDefault4">
                        Female
                    </label>
                    </div>
                </div>
                <div class="mt-2 me-5 mx-5 text-left">
                    <label class="form-label">Weight</label>
                    <input type="email" placeholder="must be in kg" class="form-control" v-model="weight">
                </div>
                <div class="mt-2 me-5 mx-5 text-left">
                    <label class="form-label">Height</label>
                    <input type="email" placeholder="must be in m" class="form-control" v-model="height">
                </div>
                <div class="pb-3 mt-3 mx-5 text-left">
                    <button v-on:click="BMIresult" class="btn btn-secondary btn-md">Calculate</button>
                </div>
                <div class="pt-4 me-5 mx-5 text-left">
                <label class="form-label">BMI Result:</label>
                <div v-if="bmi > 0">{{ bmi }}</div>
            </div>
            </div>
      <!-- </div>
    </div> -->
</template>

<script>

export default {
    name: "bmiMetric",
    data: function() {
        return {
            username: "",
            age:"",
            gender: "male",
            weight: "",
            height: "",
            bmi: 0,
        };
    },
    // methods: {
    //     BMIresult() {
    //         if (this.unit === "metric") {
    //             this.bmi = this.weight / this.height ** 2;
    //             if (this.bmi < 15.5) {
    //                 return this.bmi.toFixed(2) + 'underweight';
    //             } else if (this.bmi < 18.5) {
    //                 return this.bmi.toFixed(2) + 'slightly underweight';
    //             }
    //         } else {
    //             this.bmi = (this.weight * 703) / this.height ** 2;
    //         }
    //     },
    // }
    // computed: {
    //     BMIresult: function() {
    //         this.bmi = this.weight / this.height ** 2;

    //         if(bmi < 25) {
    //             return 'Low' + this.bmi
    //         }
    //     }
    // }
    methods: {
        BMIresult() {
            this.bmi = this.weight / this.height ** 2;

            if (this.bmi < 25) {
                return 'Low' 
            }
            else if (this.bmi >= 25 && this.bmi < 30) {
                return 'moderate'
            }
        } 
    }
};

</script>

<style>

#bmi {
    background-color: hsla(44,30%,47%,.60);
    margin: auto;
    /* border-radius: 25px; */
}

</style>