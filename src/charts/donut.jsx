import { Doughnut } from 'react-chartjs-2';

export default function Donut(props) {

    console.log(props)

    let graphData = {
        labels: ['Red', 'Green', 'Yellow'],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: "#37474f",
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    return (
        <Doughnut data={data} height={50} width={50} />
    )
}