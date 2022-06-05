import Graph from './components/graph'
import NewPurchase from './components/newPurchase'
import PieChart from './components/pieChart'
import Table from './components/table'
import UserBasic from './components/userBasics'
import Image from 'next/image'

export default function dashboard() {

    const person = {
        username : 'SheyiB',
        monthlySpend: 20000,
        atHand: 1000,
        inBank: 50000,

    }
    return (
        <>
        <h1> User Dashboard</h1>
        <UserBasic  username = {person.username} monthlySpend = {person.monthlySpend}  atHand = {person.atHand} inBank = {person.inBank}/>
        <Table/>
        <Graph/>
        <PieChart/>
        <NewPurchase/>
        </>
    )
}