<template>
    <div id="main">
        <div id="bar">
            <h1 id='header'>Bar Chart</h1>
            <barchart></barchart>
        </div>
    </div>
</template>

<script>
import barchart from './Charts/BarChart.js'

export default {
    components: {
        'barchart':barchart
    }
}
</script>

<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#bar{
    height:250px;
    width:90%;
    padding:30px;
    position:absolute;
}
#header{
    background-color: aquamarine;
    height: 100px;
    font-size: 50px;
    margin:auto;
    padding-top: 50px;
}
</style>