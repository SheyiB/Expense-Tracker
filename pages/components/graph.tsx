import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from "chart.js";

import { useState, useEffect} from 'react' 

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

import { Bar, Line, Scatter, Bubble} from "react-chartjs-2";

const Graph = ({data, buys, userid}) => {

//    const [graphData, setgraphData] = useState(data);
   // const [finalData, setfinalData] = useState(graphdata)    
    let gdata = [0,0,0,0,0,0,0,0,0,0,0,0]

    const graphdata = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                data: gdata,
            },
        ],
    };

    const sortData = (buys, graphdata, gdata) => {
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

    return graphdata;
    }

    const fdata = sortData(buys, graphdata, gdata);
    

    const options = {
        responsive: true,
        pulugins: {
           
        },

        elements: {
            line:{
                tension: 0,
                borderWidth: 2,
                borderColor: "rgba(47,97,68, 1)",
                
                
            },
            point : {
                radius: 0,
                hitRadius: 0,
            },
        },
        scales: {        
        },
    };

    const [finalData, setfinalData] = useState(fdata)

    useEffect(()=>{
       console.log('use useEffect ran')

       let data;
       async function purch() {
        const response = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${userid}`)
        data = await response.json()

        }

        purch();

        

       
       const newD = sortData(data, graphdata, data)
       
       setfinalData(newD)
    
    }, [])
    
    return (
        <>
        <h1> Graph of Spendings </h1>
       
         <Line data={finalData} width={100} height={40} options={options} />   
       
        
        </>
    )
}

export default Graph