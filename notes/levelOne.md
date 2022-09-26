## Concepts of Vue
## Vue follows directive syntax i.e uses the data binding attribute in the list
```js
<template>
// It hold the component logic
<h1>{{name}} -- {{dev}}</h1> // this is the moustache
<p v-bind:text="name">This is the v-bind directive</p>
</template>
<script>
data(){
    return {
        // these are the data that is used dom on the page
        name: "xterm",
        dev: "Development"
    }
}
</script>
```