import Table from './table';
import axios from 'axios';
import {useState} from 'react';
import NewPurchase from './newPurchase'
import {useRouter} from 'next/router';
import {generateGraphData, generatePieChartData} from './dataGen'

const Tables = ({data, userid, updateCharts}) =>{
    const [ purchase, setpurchase] = useState(data)
    const [addNew, setAddNew] = useState(false)

    const upateTable= async(userid) => {
       const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${userid}`)
       const data = await purch.json()
       setpurchase(data)
    }

    const add = ()=>{
        if(addNew == true) {
            setAddNew(false)
        }
        else{
            setAddNew(true)
        }
    }

    const addPurchase = async(item, category, amount, date, user) => {
        const purchase = {item: item, category: category, price:amount, date:date,  user:user}
        const res = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${user}`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(purchase),
        })
        setAddNew(false)
        updateCharts(user)
    }

    const onDelete = async(purcid, userid)=>{
        await fetch(`http://localhost:7000/api/v2/spendingApp/purchase/${purcid}`,{method: 'DELETE'})
        upateTable(userid)
        updateCharts(userid)
    }
    return(
        <>
        <h3>Recent Spendings</h3>
        <div>
        {purchase.length > 0 ? purchase.map((item)=>(<Table key={item._id} purchase={item} onDelete={() => onDelete(item._id, userid )} />)) : <h3> No Data to Display </h3>}
        </div>
        <button type='button' onClick={add}> Add New Purchase </button>
        { addNew && <NewPurchase user={userid}  addPurchase={addPurchase} refreshData={upateTable}/>}
        </>
    )

}

export default Tables
