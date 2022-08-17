import Table from './table';
import axios from 'axios';
import {useState} from 'react';
import NewPurchase from './newPurchase'
import {useRouter} from 'next/router';
import {generateGraphData, generatePieChartData} from './dataGen'

const Tables = ({data, userid, updateCharts, token}) =>{
    const [ purchase, setpurchase] = useState(data)
    const [addNew, setAddNew] = useState(false)

    const upateTable= async(userid, token) => {
        console.log(token)
       const purch = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase/user/${userid}`, {
        headers: {
            'Content-type' : 'application/json',
            'x-auth-token': token
        }
       })



       const purchase = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${userid}`, {
                method: 'GET',
                headers: {
                    'Content-type' : 'application/json',
                    'x-auth-token': token
                }
            }).then(response => response.json())

       const data = await purch.json()

       console.log(purchase)
       console.log(data)
       setpurchase(purchase)
    }

    const add = ()=>{
        if(addNew == true) {
            setAddNew(false)
        }
        else{
            setAddNew(true)
        }
    }

    const addPurchase = async(item, category, amount, date, user, token) => {
        const purchase = {item: item, category: category, price:amount, date:date,  user:user}
        const res = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase/`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'x-auth-token' : token
            },
            body: JSON.stringify(purchase),
        })
        setAddNew(false)
        updateCharts(user, token)
    }

    const onDelete = async(purcid, userid, token)=>{
        await fetch(`http://localhost:7000/api/v2/spendingApp/purchase/${purcid}`,{method: 'DELETE',    headers: {
            'Content-type' : 'application/json',
            'x-auth-token': token
        }})
        console.log(token, userid)
        upateTable(userid, token)
        updateCharts(userid, token)
    }
    return(
        <>
        <h3>Recent Spendings</h3>
        <div>
        {purchase.length > 0 ? purchase.map((item)=>(<Table key={item._id} purchase={item} onDelete={() => onDelete(item._id, userid, token )} />)) : <h3> No Data to Display </h3>}
        </div>
        <button type='button' onClick={add}> Add New Purchase </button>
        { addNew && <NewPurchase user={userid}  addPurchase={addPurchase} refreshData={upateTable} token={token}/>}
        </>
    )

}

export default Tables
