<template>
    <h2>{{msg}}</h2>
</template>


<script>
import Vue from 'vue/dist/vue.js'

export default {
    data() {
        return {
            msg: 'Hello'
        }
    }
}

</script>

<style scoped>
h2 {
text-align: center;
margin: 15px 0 30px;
}

</style>