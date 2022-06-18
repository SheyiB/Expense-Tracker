import { useState} from 'react';



const NewPurchase = (props) => {


    const [data, setdata] = useState({item: '', price: 0, category: '', date: '', user: props.userId})

    function onChangeItem(e){
        data.item = e.target.value
        setdata(data)
    }

    function onChangeCategory(e){
        data.price = e.target.value
        setdata(data)
    }

    function onChangeAmount(e){
        data.category = e.target.value
        setdata(data)
    }

    function onChangeDate(e){
        data.date = e.target.value
        setdata(data)
    }


    async function showValues(data){
        const newPurchase = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?userid=62a9018b3c07aa27a7b8959e`, {
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        })
        console.log(data)
    }






    return (
        <>
        <form >
            <input type="text" className="item"  onChange={onChangeItem} placeholder="Item"/><br/>
            <input type="text" className="category"  onChange={onChangeCategory} placeholder="Category"/><br/>
            <input type="number" className="amount"  onChange={onChangeAmount} placeholder="Amount"/><br/>
            <input type="date" className="date"  onChange={onChangeDate} placeholder="Date"/><br/>
            <button  type='button' > Submit </button>
        </form>
        </>
    )
}

export default NewPurchase