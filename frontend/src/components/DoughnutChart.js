import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart() {

    const data = {
        labels: ['Books', 'Food', 'Electronic', 'Houses', 'Cars'],
        datasets: [
            {
                label: 'Stock produit 2020 (%)',
                data: [23, 17, 19, 40, 65],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ]
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    }
    return (
        <Doughnut data={data} options={options} />
    )
}

export default DoughnutChart