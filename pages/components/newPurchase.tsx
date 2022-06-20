import { useState, Component} from 'react';
import axios from 'axios';



export default class NewPurchase extends Component{
    constructor(props){
        super(props);

        this.onChangeItem = this.onChangeItem.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            item: '',
            price: 0,
            category: '',
            date: '',
            user: props.userId
        }
    }
    onChangeItem(e){
        this.setState({ item : e.target.value})
    }

    onChangeCategory(e){
        this.setState({ category : e.target.value})
    }

    onChangeAmount(e){
        this.setState({ price : e.target.value})
    }

    onChangeDate(e){
        this.setState({ date : e.target.value})
    }


    onSubmit(){

        //axios.post(`http://localhost:7000/api/v2/spendingApp/purchase?userid=62a9018b3c07aa27a7b8959e`, data)
		//  .then(res => console.log(res.data))
		//  .catch(err => console.log(err.message))
        console.log(this.state)
    }




    render(){

    return (
        <>
        <form >
            <input type="text" className="item"  onChange={this.onChangeItem} placeholder="Item"/><br/>
            <input type="text" className="category"  onChange={this.onChangeCategory} placeholder="Category"/><br/>
            <input type="number" className="amount"  onChange={this.onChangeAmount} placeholder="Amount"/><br/>
            <input type="date" className="date"  onChange={this.onChangeDate} placeholder="Date"/><br/>
            <button  type='button' onClick={this.onSubmit}> Submit </button>
        </form>
        </>
    )
    }

}

