import { useState } from 'react';
import axios from 'axios';



const NewPurchase = ({user}) =>{

    const [item, setItem] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault()
       if(!item || !category || !amount || !date) {
           alert('Please fill all fields')
       }
        const purchase = {item, category, amount, date,  user}

        const res = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?userid=${user}`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(purchase),
        })

        const data = await res.json()

        setItem('')
        setCategory('')
        setAmount(0)
        setDate('')

    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <input type="text" className="item" required value={item} onChange={(e) => setItem(e.target.value)} placeholder="Item"/><br/>
            <input type="text" className="category" required value={category}  onChange={(e) => setCategory(e.target.value)} placeholder="Category"/><br/>
            <input type="number" className="amount" required value={amount}  onChange={(e) => setAmount(Number(e.target.value))} placeholder="Amount"/><br/>
            <input type="date" className="date" required value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date"/><br/>
            <button  type='submit'> Submit </button>
        </form>
        </>
    )

    }



export default NewPurchase