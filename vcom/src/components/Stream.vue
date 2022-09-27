<template>
    <div>
        <h1>{{name}} - {{age}} - {{exp}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'StreamVue',
        props: {
            name: String,
            age: Number,
            exp: Number
        }
    }
</script>

<style>

</style>