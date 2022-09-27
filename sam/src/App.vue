<template>

  <div>
    <h1>Learning Computed Mechanism</h1>
    <h2>Method Calculated: {{getCompleteValue()}}</h2>
    <h2>Computed Calculated: {{getComputedValue}}</h2>
    <input type="text" v-model="message">
    <button @click="this.cart.push({
      id: this.cart.length,
      price: 12422,
      product_name: 'Mack Board'
    })" >ADD Extra Item</button>


    <section>
      <h3 v-for="item in getExpensive" :key="item.id">{{item.product_name}} ${{item.price}}</h3>
    </section>

    <button @click="changeFullName">Update Name</button>

    <section>
      <h2>Method FullName : {{getFullName()}}</h2>
      <h2>Computed FullName: {{fullName}}</h2>
    </section>


    <!--  voulme  -->
    <h1>{{volume}}</h1>
    <button @click="volume += 2">Volume UP</button>
    <button @click="volume -= 2">Volume DOWN</button>
    <br>
    <!-- moie  -->

    <input type="text" v-model="movie">
    <input type="text" v-model="webseries.funny">
    <input type="text" v-model = "webseries.scam">
  </div>
</template>

<script>


export default {
 data(){
  return {
    message: '',
    volume : 0,
    cart : [
      {
        id: 1,
        price: 2230,
        product_name: 'Galaxy F23'
      },

      {
        id: 2,
        price: 145,
        product_name: 'Pixel 7'
      },

      {
        id: 3,
        price: 2415,
        product_name: 'Asus Machine'
      }
    ],

    firstName: "Vue",
    lastName: "Javascript",

    movie: 'Dacman',
    webseries : {
      funny: 'Mirzapur',
      scam: 'Scam 1992'
    }
  }
 },
 methods: {
  getCompleteValue () {
    console.log("Method Called")
    return this.cart.reduce((total, acc) => (total = total + acc.price), 0)
  },
  getFullName () {
    return this.firstName +' '+ this.lastName
  },
  changeFullName () {
    this.fullName = 'Dino James'
  }
 },

 computed: {
  getComputedValue () {
    console.log("Computed Called")
    return this.cart.reduce((total, acc) => (total = total + acc.price), 0)
  },

  getExpensive(){
    return this.cart.filter((item) => item.price < 2000)
  },

  fullName: {
    get(){
      return this.firstName +' '+ this.lastName
    },
    set(value){
      const userName = value.split(' ')
      this.firstName = userName[0]
      this.lastName = userName[1]
    }
  }
 },
 watch: {
  volume(newValue, oldValue) {
    if(oldValue < newValue && newValue === 16 ) {
      alert('You may become behra')
    }
  },
  movie : {
    handler (newValue){
    console.log("API Called at ", newValue)
    },
    immediate: true
  },
  webseries: {
    handler(newValue) {
      console.log('Here gos the two series', newValue.funny, newValue.scam)
    },
    deep:  true
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
