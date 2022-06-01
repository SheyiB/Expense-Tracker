const Table = (props)=> {
    return (
        <>
        <h1> Recent Spendings </h1>

        <table>
        <thead>
        <th> S/N </th> <th>Item</th><th>Category</th><th>Amount</th><th>Date</th>
        </thead>
        {props.spendings.map(data => <tr>{data.map(item => <td>{item}</td>)}</tr>)}
        </table>
        </>
    )
}

export default Table