import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

import { Bar, Line, Scatter, Bubble, Doughnut} from "react-chartjs-2"


const PieChart = (props) => {
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
        <Doughnut data={props.data} width={50} height={50} options={options} />
        </>
    )
}

export default PieChart