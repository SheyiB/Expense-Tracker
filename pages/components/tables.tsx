import Table from './table';
import axios from 'axios';
import {useState} from 'react';

const Tables = ({data, userid}) =>{
    const  [ purchase, setpurchase] = useState([data])

    const onDelete = async(id)=>{
        console.log('The data gotten by ssr is -> ' + data)
        console.log('The current state of the Data is ' + purchase)
        axios.delete(`http://localhost:7000/api/v2/spendingApp/purchase/${id}`)
        .then(res => console.log(res.data))
		.catch(err => console.log(err.message))

        const purchdata = await axios.get(`http://localhost:7000/api/v2/spendingApp/purchase?userid=${userid}`)
        console.log('New data is' + purchdata)
        setpurchase([purchdata])
    }
    return(
        <>
        <h3>Recent Spendings</h3>
        <div>

            {data.map((item)=>(
            <Table key={item._id} purchase={item} onDelete={() => onDelete(item._id)} />
            ))}
        </div>

        </>
    )

}

export default Tables