<template>
  <div id="app">
    <h1>Hao Chi Zi Cha</h1>
    <!--<pageContent></pageContent>-->
    <router-link to="/" exact>
    Home</router-link>
    <router-link to="/orders" exact>Orders</router-link>
    <router-link to="/dashboard" exact>Dashboard</router-link>
    <br>
    <router-view></router-view>

    <basket></basket>
  </div>
</template>

<script>
export default {
  data() {
    return{
      title:'your first Vue Compoenent',
    }
  },
  methods:{
  }
}
</script>

<style scoped>
a {
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 100px;
  padding-inline: 8%;
  float: center
}

#nav {
  width: 100%;
}
pageContent {
  float: left;
  width: 100%;
}
basket {
  float: right;
  width: 35%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
