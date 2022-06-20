import Graph from './components/graph'
import NewPurchase from './components/newPurchase'
import PieChart from './components/pieChart'
import Table from './components/table'
import UserBasic from './components/userBasics'
import Image from 'next/image'
import { useState} from 'react'
import type {GetStaticProps} from "next";

export default function dashboard ({data, buys}) {

    const person = {
    username : data.firstname,
    monthlySpend: 20000,
    atHand: 1000,
    inBank: 50000,
    userid: data._id
    }



    let userSpendings = []

    for (let i in buys){
        const currendata = []
        const pos = Number(i) + 1
        const purchaseid = buys[i]._id
        const tempdata = [pos, buys[i].item, buys[i].category,  buys[i].price, buys[i].createdAt.slice(0,10)]

        userSpendings.push(tempdata)
    }

    const graphdata = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3],
            },
        ],
    };



    function upateTable(){
       console.log('Table Updated')
        // setrecentSpendings(recentSpendings => [...recentSpendings, snewData])
    }

    return (
        <>
        <h1> User Dashboard</h1>
        <UserBasic  username = {person.username} monthlySpend = {person.monthlySpend}  atHand = {person.atHand} inBank = {person.inBank}/>
        <Table spendings={userSpendings}  onclick={upateTable}/>

        <button onClick={upateTable}> update </button>
        {/* <Graph data={graphdata}/> */}
        {/* <PieChart /> */}
        <NewPurchase userId={person.userid}/>
        </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:7000/api/v2/spendingApp/users/62a9018b3c07aa27a7b8959e`)
    const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?userid=62a9018b3c07aa27a7b8959e`)
    const buys = await purch.json()
    const data = await res.json()


    // Pass data to the page via props
    return { props: { data, buys } }
  }

