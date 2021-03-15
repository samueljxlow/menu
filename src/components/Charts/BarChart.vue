<template>
  <div class="chart">
    <h1>Load data from Firebase</h1>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import barchart from "./BarChart.js";
export default {
  components: {
    barchart
  }
};
</script>

<style>
</style> 

<!-- <script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['datacollection', 'option'],
  mounted () {
    this.renderChart(this.datacollection, this.option)
  }
}
</script>

<style>
</style> -->