<template>
    <div>
        <br><br>
        <form v-on:submit="updateOrder">
            <ul v-for="(item,index) in this.datapacket[0].food" :key="index" id="item">
                <li>
                <label>{{item.name}}: {{item.quantity}}</label>
                <br>            
                <input v-model="datapacket[0].food[index].quantity" type="number" placeholder=0 min=0>
                <br>
                <br>
                
                </li>
            </ul>
            <button type="submit">Update Order</button>
        </form>
  
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    name:'modify',
    data() {
        return {
            datapacket: [],
            dataPacketCopy: []
        }
    },
    props: 
        ['modifyID']
    ,
    methods: {
        updatedData: function() {
            console.log(this.modifyID[0])
            database.collection("orders").doc(this.modifyID[0]).get().then(
                (doc) => {
                    this.datapacket.push(doc.data())
                }
            );
            this.dataPacketCopy = this.datapacket
            console.log('end of update')
        },
        updateOrder: function() {
            console.log("updateOrder")
            console.log(this.dataPacketCopy[0].food)
            database.collection("orders").doc(this.modifyID[0]).set({
                food: this.dataPacketCopy[0].food
            })     
            this.$router.push("orders").location.refresh()
            console.log("done")
        }
        
    },
    created: function() {
        console.log('create')
        this.updatedData()
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding:0

}
</style>