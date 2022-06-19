import { useState} from 'react';
import axios from 'axios';



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


    function showValues(data){
        axios.post(`http://localhost:7000/api/v2/spendingApp/purchase?userid=62a9018b3c07aa27a7b8959e`, data)
		  .then(res => console.log(res.data))
        console.log(data)
    }






    return (
        <>
        <form >
            <input type="text" className="item"  onChange={onChangeItem} placeholder="Item"/><br/>
            <input type="text" className="category"  onChange={onChangeCategory} placeholder="Category"/><br/>
            <input type="number" className="amount"  onChange={onChangeAmount} placeholder="Amount"/><br/>
            <input type="date" className="date"  onChange={onChangeDate} placeholder="Date"/><br/>
            <button  type='button' onclick={showValues({data})}> Submit </button>
        </form>
        </>
    )
}

export default NewPurchase