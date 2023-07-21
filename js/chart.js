let weapons = [
    {
     "Weapon": "OTHER",
     "No of crime": 12788
    },
    {
     "Weapon": "HANDS",
     "No of crime": 46629
    },
    {
     "Weapon": "FIREARM",
     "No of crime": 18625
    },
    {
     "Weapon": "KNIFE",
     "No of crime": 8925
    }
]



let time= [
    {
     "TIME": "0-1",
     "FREQUENCY": 4321
    },
    {
     "TIME": "1-2",
     "FREQUENCY": 5031
    },
    {
     "TIME": "2-3",
     "FREQUENCY": 4063
    },
    {
     "TIME": "3-4",
     "FREQUENCY": 2674
    },
    {
     "TIME": "4-5",
     "FREQUENCY": 1744
    },
    {
     "TIME": "5-6",
     "FREQUENCY": 1190
    },
    {
     "TIME": "6-7",
     "FREQUENCY": 1060
    },
    {
     "TIME": "7-8",
     "FREQUENCY": 1389
    },
    {
     "TIME": "8-9",
     "FREQUENCY": 2046
    },
    {
     "TIME": "9-10",
     "FREQUENCY": 2174
    },
    {
     "TIME": "10-11",
     "FREQUENCY": 2580
    },
    {
     "TIME": "11-12",
     "FREQUENCY": 2998
    },
    {
     "TIME": "12-13",
     "FREQUENCY": 3350
    },
    {
     "TIME": "13-14",
     "FREQUENCY": 3280
    },
    {
     "TIME": "14-15",
     "FREQUENCY": 3575
    },
    {
     "TIME": "15-16",
     "FREQUENCY": 4663
    },
    {
     "TIME": "16-17",
     "FREQUENCY": 4121
    },
    {
     "TIME": "17-18",
     "FREQUENCY": 4190
    },
    {
     "TIME": "18-19",
     "FREQUENCY": 4374
    },
    {
     "TIME": "19-20",
     "FREQUENCY": 4461
    },
    {
     "TIME": "20-21",
     "FREQUENCY": 8482
    },
    {
     "TIME": "21-22",
     "FREQUENCY": 5121
    },
    {
     "TIME": "22-23",
     "FREQUENCY": 5032
    },
    {
     "TIME": "23-24",
     "FREQUENCY": 5306
    }
   ]

const ctx = document.getElementById('myChart1');

const data = {
    labels: ['Other', 'Hands', 'Firearm', 'Knife'],
    datasets: [{
      label: 'Frequency',
      data: [12788, 46629, 18625, 8925],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(54, 120, 150)'
      ],
      hoverOffset: 4
    }]
  };


new Chart(ctx, {
    type: 'doughnut',
    data: data,
  }
);








// Line Chart
const ctx1 = document.getElementById('myChart2');

const labels = time.map((ele) => {return ele.TIME});
const data1 = {
  labels: labels,
  datasets: [{
    label: 'Frequency',
    data: time.map((ele) => {return ele.FREQUENCY}),
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

new Chart(ctx1, {
    type: 'line',
    data: data1,
  }
);