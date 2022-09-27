<template>
    <div>
        <h1>Hello From {{name}}</h1>
    </div>
</template>
<script>
    export default {
        name: 'GreetVue',
        props: ['name']
    }
</script>