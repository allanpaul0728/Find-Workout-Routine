<template>
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-4">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link" aria-current="page" href="#" active-class="active" to="/metric">Metric</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" active-class="active" to="/USunit">US Unit</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</div>
</template>

<script>

export default {
    name: "bmiCalc",
    data: function() {
        return {
            // username: "",
            // age:"",
            // gender: "male",
            // weight: "",
            // height: "",
            // bmi: 0,
        };
    }
}

</script>

<style>

#bmi {
    background-color: hsla(44,30%,47%,.60);
    margin: auto;
}

</style>