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


    function showValues(){
        console.log(data)
    }






    return (
        <>
        <form>
            <input type="text" className="item"  onChange={onChangeItem} placeholder="Item"/><br/>
            <input type="text" className="category"  onChange={onChangeCategory} placeholder="Category"/><br/>
            <input type="number" className="amount"  onChange={onChangeAmount} placeholder="Amount"/><br/>
            <input type="date" className="date"  onChange={onChangeDate} placeholder="Date"/><br/>
            <button  type='button' onClick={showValues}> Submit </button>
        </form>
        </>
    )
}

export default NewPurchase