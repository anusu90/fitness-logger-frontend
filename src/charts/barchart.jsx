import React from 'react';
import { Bar } from 'react-chartjs-2';



export default function BarChart(props) {
    return (
        <div>
            <h2>Bar Example (custom size)</h2>
            <Bar
                data={props.data}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}