<template>

  <canvas v-el:canvas style="width: 100%; height: 200px"></canvas>

</template>

<script>
import Chart from 'chart.js'

export default {
  ready: function () {

    // fetch canvas DOM element
    let canvas = this.$el.canvas

    // init chart.js
    let chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
    console.log(chart)

  }
}
</script>