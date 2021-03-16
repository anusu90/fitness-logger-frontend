import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Linechart(props) {

    console.log(props.axislabel[0])



    let data = {
        datasets: [
            {
                label: props.title,
                fill: false,
                lineTension: 0.4,
                backgroundColor: 'rgba(75,192,192,0.4)',
                // backgroundColor: 'red',
                // borderColor: 'rgba(75,192,192,1)',
                borderColor: '#ff9999',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 100,
            }
        ]
    }

    var options = {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                labelString: props.axislabel[0]
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                labelString: props.axislabel[1]
            }]
        },
    }

    data.labels = props.data.labels
    data.datasets[0].data = props.data.data

    return (
        <div>
            {/* <h2>Line Chart</h2> */}
            <Line data={data} height={200} width={800} options={options} />
        </div>
    );
};