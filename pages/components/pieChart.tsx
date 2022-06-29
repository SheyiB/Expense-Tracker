import { PieChart } from 'react-minimal-pie-chart';



const PChart = () => {

    const piedata = [
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]

    return (
        <>
        <h1> The PieChart goes in here</h1>

        <PieChart  data={piedata} />;
        </>
    )
}

export default PChart