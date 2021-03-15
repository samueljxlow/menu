
import {Bar} from'vue-chartjs'
import database from '../../firebase.js'

export default {

    extends:Bar,
    data:function () {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    label: "Total number of each dish",
                    backgroundColor: ["blue","forestgreen","yellow","salmon","red","Teal"],
                    data:[]
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total number of each dish'
                },
                responsive: true,
                maintainAspectRatio: false
            },
            dict: []
        }
    },
    methods: {
        fetchItems: function () {
            database.collection('menu').get().then(querySnapShot => {
                querySnapShot.docs.forEach(docs => {
                    this.datacollection.labels.push(docs.data().name)
                    this.datacollection.datasets[0].data.push(0)
                })
            })
            console.log("yeet")
            database.collection('orders').get().then(querySnapShot => {
                querySnapShot.docs.forEach(docs => {
                   console.log(docs.data().food.length)
                   for (let i = 0; i<docs.data().food.length;i++) {
                       let item = docs.data().food[i].name
                       let index = this.datacollection.labels.indexOf(item)
                       let newCount = Number(this.datacollection.datasets[0].data[index]) + Number(docs.data().food[i].quantity)
                       this.datacollection.datasets[0].data[index] = newCount
                   }
                })
                this.renderChart(this.datacollection,this.options)
            })
            
        }
        
    },
    created() {
        this.fetchItems()
    }
}