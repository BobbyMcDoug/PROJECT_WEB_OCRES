import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {

    const data = {
        labels: ['Books', 'Food', 'Electronic', 'Houses', 'Cars'],
        datasets: [
            {
                label: 'Sales for 2020 (M €)',
                data: [5, 10, 12, 4, 2],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ]
            },
            {
                label: 'Sales for 2019 (M €)',
                data: [3, 6, 10, 3, 9],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ]
            }
        ]
    }
    const options = {

        title: {
            display: true,
            text: 'Bar Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 13,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return (
        <Bar data={data} options={options} />
    )
}

export default BarChart