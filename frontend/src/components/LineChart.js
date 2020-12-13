import React from 'react' 
import { Line } from 'react-chartjs-2'
import axios from 'axios';

function LineChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)'
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 2, 3],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: 'rgba(54, 162, 235, 0.2)'
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Ventes sur lannée 2019 vs 2020'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0 ,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return ( 
        <Line data={data} options={options}/>
    )
}

export default LineChart