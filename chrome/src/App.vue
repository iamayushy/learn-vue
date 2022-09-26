<script>
// currencies, flag, continent, language, area, population
const API = "https://restcountries.com/v3.1/name"

export default {
  data() {
    return {
      countryList: [],
      message:'',
      warning: undefined,
      loading: false

    }
  },

  methods: {
    async getCountries(countryname) {
      this.loading = true
      console.log(countryname)
      try{
      const response = await fetch(`${API}/${countryname}`)
      const data = await response.json()
      this.countryList = [...data]
      this.loading = false
      this.warning = undefined
      }
      catch(e){
        this.warning = e
        this.loading = false
      }
    }
  },

}
</script>

<template>
  <div class="view">
    <div class="loader" v-if="loading"></div>
      <br>
      <br>
    <input v-model="message" @input="getCountries(message)"  placeholder="start the world search" type="text">
    <div class="container">
     
      <div v-if="warning === undefined" class="card" v-for="(country, index) in countryList">

        <img :src="country.flags.png" :alt="country.name.common" width="300">
        <h3>{{country.name.common}}</h3>
        <h3>{{country.region}}</h3>
        <h3>{{country.population}}</h3>
        <div v-for="currency in country.currencies">
          <h3>Currency: {{currency.name}}</h3>
          <h3>Symbol: {{currency.symbol}}</h3>
        </div>
      </div>
      </div>
      <div>
      <h3 v-if="warning">No Data Found</h3>
      
      
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  position: relative;
  z-index: -1;
}

.card {
  border-radius: 8px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
  padding: 0.5rem;
  margin: 1rem;
}

img {
  border-radius: 8px;
  background: #e0e0e0;
  box-shadow: inset 20px 20px 60px #bebebe,
    inset -20px -20px 60px #ffffff;
}
.view{
  display: grid;
  justify-items: center;
  
}
.view input{
  width: 80vmin;
  margin: 2rem;
  padding: 0.8rem;
  border-radius: 8px;
  outline: none;
  border: 1.5px solid #bebebe;
  font-size: 1.2rem;
  font-weight: 500;
}

.view input:focus{
  outline: black;
  border: 1.5px solid #bebebe;
}
.loader{
  width: 8vmin;
  background-color: rgb(204, 152, 255);
  height: 8vmin;
  border-radius: 100%;
  position: absolute;
  top: 1%;
  left: 45%;
  z-index: 1;
  animation: rotate 3s infinite;
}
.loader::after{
  content: '';
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: rgb(231, 255, 246);
  border-radius: 100%;
  animation: rotates 1s infinite;
  
}
@keyframes rotate{
  0%{
    transform: rotate(-360deg);
  }
 
}
@keyframes rotates{
  0%{
    transform: rotateY(-360deg);
  }
  50%{
    background-color: rebeccapurple;
  }
  100%{
    background-color: rgb(255, 11, 198);
  }
 
}
</style>
