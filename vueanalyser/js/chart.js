/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ctx = document.getElementById("myBar");
var myBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["F0911", "F0910", "F0902", "F0901", "F411"],
        datasets: [{
            label: '# Top 5 Tables',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
               
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                //    padding: 50,
                }
            }]
        }
    }
});

//the labels below should be added dynamically
  var doughnutData = {
    labels: [
      'F0911',
      'F0901',
      'F0902',
      'F0903',
      'F0982'
    ],
    datasets: [{
      data: [300, 50, 100, 60, 25],
      backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
         'rgba(153, 102, 255, 0.6)'
//        '#FF6384',
//        '#36A2EB',
//        '#FFCE56',
//        '#000066',
//        '#660066'
      ],
       borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
              borderWidth: 2,
           
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#000066',
        '#660066'
      ]
     
    }]
  };
  var ctx = document.getElementById('myDoughnut');
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: doughnutData,
    options: {
      responsive: true,
      defaultFontColor: '#ffffff',

    }
  });

// Polar Area Chart

      var polarData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
    ]
 
};

  var ctx = document.getElementById('myPolar');
  var chart = new Chart(ctx, {
    type: 'polarArea',
    data: polarData,
    options: {
      responsive: true,
      defaultFontColor: '#ffffff',
    }
 });

// Line Chart
 var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
};

var ctx = document.getElementById('myLine');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
      options: {
      responsive: true,
      defaultFontColor: '#ffffff',
    }
});

