import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

import { Bar, Line, Scatter, Bubble} from "react-chartjs-2";


const Graph = ({graphData}) => {


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
    
    return (
        <>
        <h1> Graph of Spendings </h1>
       
         <Line data={graphData} width={100} height={40} options={options} />   
       
        
        </>
    )
}

export default Graph