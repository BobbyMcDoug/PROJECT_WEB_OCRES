import React from 'react'
import { Radar } from 'react-chartjs-2'

function RadarChart() {

    const data = {
        labels: ['Marketing', 'Sponsor', 'Evenements', 'Recherche', 'Maintenance', 'Recrutement'],
        datasets: [
            {
                label: 'Budget 2020 (1000€)',
                data: [25, 15, 8, 65, 40, 10],
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                borderColor: '#00FF00',
                borderWidth: 2
            },
            {
                label: 'Budget  2019 (1000€)',
                data: [40, 20, 25, 35, 35, 45],
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
                suggestedMax: 50
            }
        }
    }
    return (
        <Radar data={data} options={options} />
    )
}

export default RadarChart