const Table = (props)=> {

    const onDelete =(e)=>{
        console.log(e.target)
    }

    return (
        <>
        <h1> Recent Spendings </h1>

        <table>
        <thead><th>S/N</th><th>Item</th><th>Category</th><th>Amount</th><th>Date</th></thead>
        <tbody>
        {props.spendings.map(
            data => (<tr key={data.id}>{data.map(item =><td key={item.id}>{item}</td>)} <button type='button' onClick={onDelete}>delete</button></tr>))}
        {/* {props.spendings.map(data => <tr key={data.id}>{data.map(item => <td key={item.id}>{item}</td>)}</tr>)}  */}
        </tbody>

        </table>
        </>
    )
}

export default Table