import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

import { Bar, Line, Scatter, Bubble, Doughnut} from "react-chartjs-2"


const PieChart = (props) => {
    const piedata ={
        backgroundColor: [
            "rgb(2, 88, 255)",
            "rgb(249, 151, 0",
            "rgb(255, 199, 0)",
            "rgb(32, 214, 152)",
        ],
        labels: ["Tech", "Food", "Entertainment", "Clothing"],
        datasets: [
            {
                label: "My first Dataset",
                data: [300, 50, 100, 300],
                backgroundColor: [
                    "rgb(2, 88, 255)",
                    "rgb(249, 151, 0",
                    "rgb(255, 199, 0)",
                    "rgb(32, 214, 152)",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        elements: {
            arc: {
                weight: 0.5,
                borderWidth: 3,
            },
        },
        cutout: 150,

    };
    return (
        <>
        <h1> The PieChart goes in here</h1>
        <Doughnut data={piedata} width={50} height={50} options={options} />
        </>
    )
}

export default PieChart