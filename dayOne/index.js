
const app = Vue.createApp({
    // data function -> an object that hold the value
    data(){
        return {    
            firstName: 'John',
            lastName: 'Smigla',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            gender: 'male',
            list: [],
            task: ''
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
        },

        handleInput(e){
            this.task = e.target.value
        },
        addToList(){
            const mytask = {message: this.task, completed: false}
            this.list.push(mytask)
            console.log(this.list)
        },
        updateList(index){
            console.log(index)
            this.list.splice(index, 1)
            console.log("git working")
            // console.log(newList)
            // this.list = newList
        }

    }
})

app.mount("#app")