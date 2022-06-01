import Graph from './components/graph'
import NewPurchase from './components/newPurchase'
import PieChart from './components/pieChart'
import Table from './components/table'
import UserBasic from './components/userBasics'

export default function dashboard() {
    return (
        <>
        <h1> User Dashboard</h1>
        <UserBasic/>
        <Table/>
        <Graph/>
        <PieChart/>
        <NewPurchase/>
        </>
    )
}