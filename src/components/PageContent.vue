<template>
  <div>
    <ul>
        <li v-for="item in list" v-bind:key="item.name">

            <h2>{{item.name}}</h2>
            <img v-bind:src="item.imageURL"/>
            <p>{{"$" + item.price}}</p>
            <custBtn v-bind:item="item" v-on:counter="onCounter"></custBtn>     
        </li>
    </ul>
    <br><br>
    <basket v-bind:itemsSelected="itemsSelected"></basket>

   
  </div>
</template>


<script>
import Basket from './Basket2.vue'
import QuantityCounter from './QuantityCounter'
import database from "../firebase.js"

export default {
  props:{
      items: {
        type:Array
      }
  },
  components: {
      'basket':Basket,
      'custBtn':QuantityCounter,
  },
  data(){
    return {
        itemsSelected: [],
        list: []
    }
  },
  methods:{
      onCounter: function (item, count) {     
      if (this.itemsSelected.length === 0 && count > 0) {
        //If there is nothing in items selected, push the ORDER in
        this.itemsSelected.push([item.name, count, item.price]);
      } else {
          console.log("else")
        // Loop through everything to check what is not in the basket
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];

            if (item_name == item.name) {

                if (count <= 0) {
                    this.itemsSelected.splice(i,1);
                }
                else if (count > 0) {
                    console.log("one")
                    this.itemsSelected.splice(i,1,[item.name, count, item.price])
                    break
                }
            }

            else if (i + 1 == this.itemsSelected.length && 
                    item_name != item.name && count > 0) {
                        console.log("two")
              this.itemsSelected.push([item.name, count, item.price])
              //this.itemsSelected.splice(i,1,[item.name, count, item.price])
              break
            }

          else {
              console.log("error")
          }
          // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected

          // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.

          // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
          
        }
      }    
      console.log(this.itemsSelected)
    },
    fetchItems: function() {
      database.collection('menu').get().then(snapshot => {
      snapshot.docs.forEach(doc => {  
        console.log(doc.data());
        this.list.push(doc.data())
    });
    });
    console.log("lsit" + this.list)
    }
  },
  created(){
    console.log("create");
    this.fetchItems();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory
}
h2{
  text-align: center
}
#itemsList {
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
  width: 30%
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  float:left;
  width: 75%
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
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#basket {
  float: left;
  width: 20%;
}


</style>