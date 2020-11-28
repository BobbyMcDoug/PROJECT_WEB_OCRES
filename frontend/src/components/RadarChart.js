import React from 'react'
import { Radar } from 'react-chartjs-2'

function RadarChart() {

    const data = {
        labels: ['Jan', 'Mar', 'May', 'Juil', 'Sep', 'Nov'],
        datasets: [
            {
                label: 'Chiffre daffaire mensuel 2020 (M)',
                data: [85, 75, 85, 45, 25, 85],
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                borderColor: '#00FF00',
                borderWidth: 2
            },
            {
                label: 'Chiffre daffaire mensuel 2019 (M)',
                data: [70, 90, 65, 55, 35, 85],
                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                borderColor: '#00FFFF',
                borderWidth: 2
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Radar Chart'
        },
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
    return (
        <Radar data={data} options={options} />
    )
}

export default RadarChart