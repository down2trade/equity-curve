const ctx = document.getElementById("myChart").getContext("2d");
const response = fetch((typeof path === "undefined") ? "./data.csv" : path)
    .then(response => {
        return response.text();
    })
    .then(v => Papa.parse(v, { header: true }))

response.then(v => new Chart(ctx, {
    type: "line",
    data: {
        datasets: [{
            label: "# of Red Votes",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data: v.data
        }, {
            label: "# of Blue Votes",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            data: [
                {
                    "date": "2021-11-06",
                    "amount": 20
                },
                {
                    "date": "2021-11-07",
                    "amount": 80
                },
                {
                    "date": "2021-11-08",
                    "amount": 30
                },
                {
                    "date": "2021-11-16",
                    "amount": 80
                }
            ],
        }]
    },
    options: {
        parsing: {
            xAxisKey: 'date',
            yAxisKey: 'amount'
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day"
                }
            }
        }
    }
}));

// fetch("./data.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => new Chart(ctx, {
//         type: "line",
//         data: {
//             datasets: [{
//                 label: "# of Red Votes",
//                 borderColor: "rgb(255, 99, 132)",
//                 backgroundColor: "rgba(255, 99, 132, 0.5)",
//                 data: data.totals
//             }, {
//                 label: "# of Blue Votes",
//                 borderColor: "rgb(54, 162, 235)",
//                 backgroundColor: "rgba(54, 162, 235, 0.5)",
//                 data: [
//                     {
//                         "x": "2021-11-06",
//                         "y": 20
//                     },
//                     {
//                         "x": "2021-11-07",
//                         "y": 80
//                     },
//                     {
//                         "x": "2021-11-08",
//                         "y": 30
//                     },
//                     {
//                         "x": "2021-11-16",
//                         "y": 80
//                     }
//                 ],
//             }]
//         },
//         options: {
//             scales: {
//                 x: {
//                     type: "time",
//                     time: {
//                         unit: "day"
//                     }
//                 }
//             }
//         }
//     }));
