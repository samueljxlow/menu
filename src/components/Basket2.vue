<template>
  <div>
      Menu:
    <ul v-for="item in itemsSelected" :key="item.name">
        <li >            
            <p>{{item[0] + " x " + item[1]}}</p>
        </li>
    </ul>
    <br><br>
  <button v-on:click="showFx(); sendOrder()" >  Calculate Total </button>
  <p v-show='showAmount'>Subtotal: ${{subtotal}}</p>
  <p v-show='showAmount'>Grand Total: ${{grandtotal}}</p>
  </div>
</template>


<script>
import database from "../firebase.js"

export default {
  name: 'basket',
    props: 
    ['itemsSelected']
  ,
  data() {
    return {
      subresult: 0,
      result: 0,
      showAmount: false,
    }
  },
  computed: {
    grandtotal: function() {
      console.log(this.itemsSelected)
      let grandTotal = this.result
      for (let i=0; i < this.itemsSelected.length; i++) {
        grandTotal += this.itemsSelected[i][2] * this.itemsSelected[i][1]
      }
      return parseFloat(grandTotal * 1.07).toFixed(2)
    },
    subtotal: function() {
      let subTotal = this.subresult
      for (let i=0; i < this.itemsSelected.length; i++) {
        subTotal += this.itemsSelected[i][2] * this.itemsSelected[i][1]
      }
      return subTotal
    },
  },
  methods: { 
    showFx: function() {
      this.showAmount = true;
    },
    sendOrder: function() {
      let tracker = ["Prawn Omelette",
      "Dry Beef Hor Fun",
      "Mapo Tofu",
      "Pork Fried Rice",
      "Cereal Prawn",
      "Sambal KangKung"]
      let food = []
      for (let i=0; i < this.itemsSelected.length; i++) {
        food.push({
          name: this.itemsSelected[i][0],
          quantity: this.itemsSelected[i][1]
        })
        const index = tracker.indexOf(this.itemsSelected[i][0])
        tracker.splice(index,1)
      }
      for (let i=0; i < tracker.length; i++) {
        food.push({
          name: tracker[i],
          quantity: 0
        })
      }
      database.collection('orders').add({food}
      ).then(() => {location.reload()})
    },
  }
}
</script>

<style scoped>
    button {
      font-family: 'Avenir',Helvetica, Arial, sans-serif;
      text-align: center;
      background-color: pink;
      border-radius: 4px;
    }
  
  ul {
    display: table;
    margin: 0 auto;
    text-align: left;
  }
</style>

<!-- #itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
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
img {
  width: 135px;
  height: 135px;
} -->
