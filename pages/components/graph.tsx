import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from "chart.js";

import {useState} from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

import { Bar, Line, Scatter, Bubble} from "react-chartjs-2";
const Graph = ({data, buys}) => {

    const [graphData, setgraphData] = useState(data);

    const upateGraphData = async() => {
       
       const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?userid=62a9018b3c07aa27a7b8959e`)
       const data = await purch.json()

       setpurchase(data)
        // setrecentSpendings(recentSpendings => [...recentSpendings, snewData])
    }

    let gdata = [0,0,0,0,0,0,0,0,0,0,0,0]

    const graphdata = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                data: gdata,
            },
        ],
    };

    for (let i in buys){
        const currendata = []
        const pos = Number(i) + 1
        const purchaseid = buys[i]._id
        
        const month = Number(buys[i].date.slice(5,7))
        const currentyear = new Date()

        if (Number(buys[i].date.slice(0,4)) == currentyear.getFullYear() ){
            for (let x in graphdata.labels){
                if (month == (Number(x)+1)){
                    gdata[x] = gdata[x] + buys[i].price
                }
            }
        }

    }

    console.log(graphdata.labels, gdata)

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
        <Line data={graphData} width={100} height={40} options={options} />
        </>
    )
}

export default Graph