import Graph from '../components/graph'
import PChart from '../components/pieChart'
import Tables from '../components/tables'
import UserBasic from '../components/userBasics'
import { useState, useEffect} from 'react'
import type {GetStaticProps} from "next";
import {useRouter} from 'next/router';
import Router from "next/router"
import styles from '../styles/Dashboard.module.css'
import {generateGraphData, generatePieChartData} from '../components/dataGen'
import { setGlobalState, useGlobalState} from './index'



export default function dashboard ({data, buys, id}) {

  const checkLoggedInStatus = (data,buys,id) => {
         useEffect(() => {
             if(data == undefined || buys == undefined || id == undefined){
           Router.push('/');
         }
         })

    }
    //checkLoggedInStatus(data, buys, id)
    let currentUser, userPurchase

    const [theId] = useGlobalState("id")
    const [token] = useGlobalState("token")
    const [loggedInStatus] = useGlobalState("loggedInStatus")
    const [user] = useGlobalState("user")
    const [purchase] = useGlobalState("purchase")

    const header = {
        headers: {
            'Content-type' : 'application/json',
            'x-auth-token': token
        }
    }
    console.log('THE ID IS:',theId)
    console.log('THE TOKEN IS:',theId)
    console.log('THE LOGGED IN STATUS IS:', loggedInStatus)

    const fetchUser = async(id, currentUser, userPurchase) =>{
        const user = await fetch(`http://localhost:7000/api/v2/spendingApp/users/${theId}`, {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
                'x-auth-token': token
            }
        }).then(response => response.json())

        const purchase = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${theId}`, {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
                'x-auth-token': token
            }
        }).then(response => response.json())

        currentUser = user
        userPurchase = purchase


        console.log(`Current User is : ${currentUser.email} , user has ${purchase.length} purchases` )
        return user

    }


    useEffect(()=>{

    },[])

    //

//    if(userPurchase){
    const [purch, setPurch] = useState(purchase)
    const graphData = generateGraphData(purchase)
    const pieChartData = generatePieChartData(purchase)
    const [ graph, setGraph ] = useState(graphData)
    const [ pie, setPie ] = useState(pieChartData)
 //   }

//    let person
//    if(currentUser){
    const person = {username : user.firstname, monthlySpend: 20000, atHand: 1000, inBank: 50000, userid: user._id}
//    }


    const fetchPurchases = async(id, token) => {

        const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase/user/${id}`, {
            headers: {
                'Content-type' : 'application/json',
                'x-auth-token': token
            }
        })
        const data = await purch.json()
        return data
    }

    const upateTable= async(id, token) => {
       const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`, {
        headers: {
            'Content-type' : 'application/json',
            'x-auth-token': token
        }
       })
       const data = await purch.json()
       setPurch(data)
    }

    const styling = {height: '300px' , width: '400px'}

    const updateCharts = async(id, token) => {
        const data = await fetchPurchases(id,token)
        const graphInfo = generateGraphData(data)
        const pieInfo = generatePieChartData(data)
        setGraph(graphInfo)
        setPie(pieInfo)
    }
    return (
        <>
    {
        user ?


        <div className={styles.main}>
        <h1> User Dashboard</h1>
        <div className={styles.head}>
        <UserBasic  username = {person.username} monthlySpend = {person.monthlySpend}  atHand = {person.atHand} inBank = {person.inBank}/>
        </div>
        <div className={styles.data}>
        <div className={styles.tables}>
        <Tables data={purch} userid={theId} updateCharts={updateCharts} token={token}/>
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

        : <h1> No logged In User {theId}</h1>
    }
    </>

    )
 }

// export async function getServerSideProps(ctx) {
// // Fetch data from external API

// console.log('We live')

// const id = 'null'

// //     const id = ctx.query.id;
// //     const headers = ctx;

// //     console.log('headers are',headers.req.user)

// //     const res = await fetch(`http://localhost:7000/api/v2/spendingApp/users/${id}`)
// //     const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`)


// //     //const buys = await purch.json()
// //     //const data = await res.json()

//     return { props: {  id} }
//    }

