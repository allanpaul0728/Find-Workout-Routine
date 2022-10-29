<template>
    <div>
        <h1>Workout Exercises</h1>
        <ul class="yourExercise">
            <li class="yourExercise-prog" v-for="w in this.workouts" v-bind:key="w._id">
                {{ w.muscle }} {{ w.muscle_term }} {{ w.target_muscle }} {{ w.target_muscleTerm }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

const APIUrl = "https://3000-allanpaul07-fitnessenth-yl0jjy1cmaz.ws-us73.gitpod.io/"

export default {
  name: 'fitnessExer',
  data: function() {
    return {
        workouts: [],
    };
  },
  async created() {
    const response = await axios.get(APIUrl + "workouts");
    this.workouts = response.data;
  },
//   methods: {
//     clear(workoutsId) {
//         this.$emit("clear-workouts", workoutsId);
//     }
//   }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
