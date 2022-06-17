const NewPurchase = (props) => {
    const onSub = async() => {
        const item = document.querySelector('.item').innerHTML,
              category = document.querySelector('.category').innerHTML,
              amount = document.querySelector('.amount').innerHTML,
              date = document.querySelector('.date').innerHTML

        console.log(item, category, amount, date)
    }
    return (
        <>
        <form>
            <input type="text" className="item" placeholder="Item "/><br/>
            <input type="text" className="category" placeholder="Category"/><br/>
            <input type="number" className="amount" placeholder="Amount"/><br/>
            <input type="date" className="date" placeholder="Date"/><br/>
            <button onClick={onSub} > Submit </button>
        </form>
        </>
    )
}

export default NewPurchase