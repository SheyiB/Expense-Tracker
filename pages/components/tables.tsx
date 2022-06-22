import Table from './table';
import axios from 'axios';
import {useState} from 'react';

const Tables = ({data, userid}) =>{
    const [userdata, setuserdata] = useState(data)

    const onDelete = async(id)=>{
        console.log(data)
        console.log(userdata)
        axios.delete(`http://localhost:7000/api/v2/spendingApp/purchase/${id}`)
        .then(res => console.log(res.data))
		.catch(err => console.log(err.message))

        const purchdata =  axios.get(`http://localhost:7000/api/v2/spendingApp/purchase?userid=${userid}`)
        console.log(purchdata)
        setuserdata(purchdata)
    }
    return(
        <>
        <h3>Recent Spendings</h3>
        <div>
            {userdata.map((item)=>(
            <Table key={item._id} purchase={item} onDelete={() => onDelete(item._id)} />
            ))}
        </div>

        </>
    )

}

export default Tables