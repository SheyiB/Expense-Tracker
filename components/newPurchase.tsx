import { useState } from 'react';


const NewPurchase = ({user, addPurchase, refreshData, token}) =>{

    const [item, setItem] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')

    const onSubmit = async(e, token) => {
        e.preventDefault()

        addPurchase(item, category, amount, date, user, token)
        refreshData(user, token)


        setItem('')
        setCategory('')
        setAmount(0)
        setDate('')

    }



    return (
        <>
        <form onSubmit={(e)=>onSubmit(e, token)}>
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