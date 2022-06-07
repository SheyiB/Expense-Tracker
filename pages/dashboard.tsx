import Graph from './components/graph'
import NewPurchase from './components/newPurchase'
import PieChart from './components/pieChart'
import Table from './components/table'
import UserBasic from './components/userBasics'
import Image from 'next/image'
import { useState} from 'react'
export default function dashboard() {


    const [person, setPerson] = useState({
    username : 'SheyiB',
    monthlySpend: 20000,
    atHand: 1000,
    inBank: 50000,
    })


    const [recentSpendings, setrecentSpendings] = useState<Array<any>>([
        [1, "Popcorn", "Food", 100, "26-04-2022"],
        [2, "Beans", "Food", 200, "27-05-2022"],
        [3, "Mac Book Pro", "Tech", 1200, "28-05-2022"],
        [4, "Samsung S30", "Tech", 1500, "30-05-2022"],
        [5, "NF Merch", "Clothing", 100, "31-05-2022"],
        [6, "Data", 'Tech', 20000, "30-05-2021"],
        [7, "Match Game Ticket",'Entertainment', 2000, "1-05-2021"]
        ])


    const snewData = [8, 'Curved Monitor', 'Tech', 500, "1-07-2022"]

    const graphdata = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3],
            },
        ],
    };



    function upateTable(){
        setrecentSpendings(recentSpendings => [...recentSpendings, snewData])
    }

    return (
        <>
        <h1> User Dashboard</h1>
        <UserBasic  username = {person.username} monthlySpend = {person.monthlySpend}  atHand = {person.atHand} inBank = {person.inBank}/>
        <Table spendings={recentSpendings}  onclick={upateTable}/>
        <button onClick={upateTable}> update </button>
        <Graph data={graphdata}/>
        <PieChart />
        <NewPurchase/>
        </>
    )
}