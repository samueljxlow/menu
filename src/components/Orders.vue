<template>
    <ul >
        <li v-for="(item,index) in orders" :key="index" id="item">
            <p v-for="(food,index) in item[1]" :key="index" id="food">{{food.name}}  {{food.quantity}}</p>
            <button v-bind:ids=item[0]  v-on:click="deleteItem($event)">Delete</button>
            <button v-bind:id=index @click="route($event)">Modify</button>
        </li>
    </ul>
</template>

<script>
import database from "../firebase.js"

export default {
    data() {
        return {
            orders: [],
            modifyID: []
        }
    }, 
    methods: {
        fetchItems: function() {
            database.collection('orders').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    this.orders.push([doc.id,doc.data().food])   
                });
            });
            console.log(this.orders)
        },
        fetch:function() {
            database.collection('orders').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
            console.log(doc.data());
    });
});

        },
        deleteItem: function(event) {
            let doc_id = event.target.getAttribute('ids');
            database.collection('orders').doc(doc_id).delete().then(()=>location.reload())
        },
        route: function(event) {
            let id = event.target.getAttribute('id');
            this.$router.push({path: '/modify', name: 'modify', params: { modifyID: this.orders[id]}, props: true});
        }

    },
    created: function() {
        console.log('created order')
        this.fetchItems();

    }  
}
</script>
<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>
