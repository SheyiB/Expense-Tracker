import Graph from './components/graph'
import NewPurchase from './components/newPurchase'
import PChart from './components/pieChart'
import Tables from './components/tables'
import UserBasic from './components/userBasics'
import Image from 'next/image'
import { useState, useEffect} from 'react'  
import type {GetStaticProps} from "next";
import {useRouter} from 'next/router';
import styles from '../styles/Dashboard.module.css'
import {generateGraphData, generatePieChartData} from './components/dataGen'
import { setGlobalState, useGlobalState} from './index'



export default function dashboard ({data, buys, id}) {

    const [theId] = useGlobalState("id")

    console.log('THE ID IS:',theId)

    const [purch, setPurch] = useState(buys)

    const person = {username : data.firstname, monthlySpend: 20000, atHand: 1000, inBank: 50000, userid: data._id}
    
    const fetchPurchases = async(id) => {
        const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`)
        const data = await purch.json()
        return data
    }
    
    const upateTable= async(id) => {
       const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`)
       const data = await purch.json()

       setPurch(data)

    }

    const styling = {height: '300px' , width: '400px'}

    const graphData = generateGraphData(buys)
    const pieChartData = generatePieChartData(buys)
    
    const [ graph, setGraph ] = useState(graphData)
    const [ pie, setPie ] = useState(pieChartData)


    const updateCharts = async(id) => {
        const data = await fetchPurchases(id)
        const graphInfo = generateGraphData(data)
        const pieInfo = generatePieChartData(data)
        setGraph(graphInfo)
        setPie(pieInfo)
    }
    return (

        <div className={styles.main}>

        <h1> User Dashboard</h1>

        <div className={styles.head}>

        <UserBasic  username = {person.username} monthlySpend = {person.monthlySpend}  atHand = {person.atHand} inBank = {person.inBank}/>
        
        
        
        </div>

        <div className={styles.data}>
        
        <div className={styles.tables}>
        <Tables data={purch} userid={id} updateCharts={()=>updateCharts(id)}/>
        </div>
        
        <div className={styles.diagrams}> 

        <div style={styling} className={styles.graph}> 
        <Graph  graphData={graph}/>
        </div>
 
        <div style={styling} className={styles.pie}>
        
        <PChart pieData={pie}/>
        </div> 

        </div>
        
    
        </div>
        
        </div>

    )
}

export async function getServerSideProps(ctx) {
    // Fetch data from external API


    const id = ctx.query.id;

    const res = await fetch(`http://localhost:7000/api/v2/spendingApp/users/${id}`)
    const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`)


    const buys = await purch.json()
    const data = await res.json()

    return { props: { data, buys , id} }
  }

