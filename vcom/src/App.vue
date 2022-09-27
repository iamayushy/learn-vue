<template>
  <div>
    <GreetVue name="Ayush"/>
    <GreetVue name="Fynd"/>

    <StreamVue name="Fixer" :age = 'age' :exp = 'exp'/>
  </div>
</template>

<script>
import GreetVue from "./components/Greet.vue";
import StreamVue from "./components/Stream.vue";
  
export default {
    components : {
    GreetVue,
    StreamVue,
},
 data() {
  return {
    age: 120,
    exp:  4
  }
 }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
