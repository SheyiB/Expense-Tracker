import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

import { Bar, Line, Scatter, Bubble} from "react-chartjs-2";
const Graph = (props) => {
    const options = {
        pulugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            line:{
                tension: 0,
                borderWidth: 2,
                borderColor: "rgba(47,97,68, 1)",
                fill: "start",
                backgroundColor: "rgba(47,97,68, 0.3)",
            },
            point : {
                radius: 0,
                hitRadius: 0,
            },
        },
        scales: {
            xAxis: {
                display: false,
            },
            yAxis:{
                display: false,
            },
        },
    };
    return (
        <>
        <h1> The Graph goes in here</h1>
        <Line data={props.data} width={100} height={40} options={options} />
        </>
    )
}

export default Graph