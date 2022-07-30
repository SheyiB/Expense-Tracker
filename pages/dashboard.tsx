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


export default function dashboard ({data, buys, id}) {
    
    const [purch, setPurch] = useState(buys)
    
    const person = {username : data.firstname, monthlySpend: 20000, atHand: 1000, inBank: 50000, userid: data._id}
    
    const fetchPurchases = async(id) => {
        const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`)
        const data = await purch.json()
        return data
    }
    
    const upateTable= async(id) => {
       refreshData()
       const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`)
       const data = await purch.json()

       setPurch(data)
        refreshData()
    }

    const styling = {height: '300px' , width: '400px'}

    const generateGraphData = (buys) => {

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

    return graphdata;
    
    }

    const finalData = generateGraphData(buys)
    

    return (
        <div className={styles.main}>

        <h1> User Dashboard</h1>

        <div className={styles.head}>

        <UserBasic  username = {person.username} monthlySpend = {person.monthlySpend}  atHand = {person.atHand} inBank = {person.inBank}/>
        
        
        
        </div>

        <div className={styles.data}>

        <div className={styles.tables}>
        <Tables data={purch} userid={id}/>
        </div>

        
        <div className={styles.diagrams}> 

        <div style={styling} className={styles.graph}> 
        <Graph  finalData={finalData}/>
        </div>

        <div style={styling} className={styles.pie}>
        
        <PChart data={purch}/>
        </div> 

        </div>
        
    
        </div>
        
        </div>
    )
}

export async function getServerSideProps(ctx) {
    // Fetch data from external API

    

    const id = ctx.query.id;

    console.log(id);

    const res = await fetch(`http://localhost:7000/api/v2/spendingApp/users/${id}`)
    const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`)


    const buys = await purch.json()
    const data = await res.json()
    console.log(buys)

    // Pass data to the page via props
    return { props: { data, buys , id} }
  }

