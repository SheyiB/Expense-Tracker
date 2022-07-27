import Graph from './components/graph'
import NewPurchase from './components/newPurchase'
import PChart from './components/pieChart'
import Tables from './components/tables'
import UserBasic from './components/userBasics'
import Image from 'next/image'
import { useState, useEffect} from 'react'
import type {GetStaticProps} from "next";
import {useRouter} from 'next/router';


export default function dashboard ({data, buys, id}) {

        
    
    const [purch, setPurch] = useState(buys)

    const person = {username : data.firstname, monthlySpend: 20000, atHand: 1000, inBank: 50000, userid: data._id}

    console.log(buys)
    
    const router = useRouter();
    
    const refreshData = () => {
        router.replace(router.asPath);
    }

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
    }

    const styling = {height: '400px' , width: '600px'}

    return (
        <>
        <h1> User Dashboard</h1>
        <UserBasic  username = {person.username} monthlySpend = {person.monthlySpend}  atHand = {person.atHand} inBank = {person.inBank}/>
        <Tables data={purch} userid={id}/>
        
        <div style={styling}> 
        <Graph  buys={buys}/>
        </div>
        
        <div style={styling}>
        <PChart data={buys}/>
        </div>
         
        
        </>
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

