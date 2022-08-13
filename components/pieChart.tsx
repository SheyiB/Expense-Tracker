import { PieChart } from 'react-minimal-pie-chart';



const PChart = ({pieData}) => {

 //console.log('Final Result : ',pfutdata)
    
    const piedata = [
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]

    return (
        <>
        <h1> PieChart of Spendings</h1>

        <PieChart  data={pieData} 
        label={(data) => data.dataEntry.title}
        labelPosition={65}
        labelStyle={{ fontSize: "5px", fontColor: "FFFFFA", fontWeight: "200", }}
        />;
        </>
    )
}

export default PChart