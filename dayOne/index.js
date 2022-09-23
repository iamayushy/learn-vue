
const app = Vue.createApp({
    // data function -> an object that hold the value
    data(){
        return {    
            firstName: 'John',
            lastName: 'Smigla',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            gender: 'male'
        }
    },
    methods :{
        async getRandomUser () {
            const response = await fetch("https://randomuser.me/api/")
            const data = await response.json()
            const userData = data.results
            this.firstName = userData[0].name.first,
            this.lastName = userData[0].name.last,
            this.gender = userData[0].gender,
            this.image = userData[0].picture.large
        }
    }
})

app.mount("#app")