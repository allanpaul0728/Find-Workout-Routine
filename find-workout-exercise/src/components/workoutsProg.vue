<template>
    <div>
        <h1>Your Program</h1>
        <ul>
            <li v-for="w in $store.getters.workouts" v-bind:key="w.id">
            {{ w.muscle }} {{ w.muscle_term }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {};

</script>

<style scoped>
</style>