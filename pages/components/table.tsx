const Table = ({purchase})=> {

    const onDelete =(e)=>{
        console.log(e.target)
        console.log(purchase._id)
    }

    return (
        <>
            <h3>{purchase.item}</h3>
            <ol>
                <li>{purchase.price}</li>
                <li>{purchase.category}</li>
                <li>{purchase.date}</li>
            </ol>
            <button onClick={onDelete}>Delete</button>
            {/* data => (<tr key={data.id}>{data.map(item =><td key={item.id}>{item}</td>)} <button type='button' onClick={onDelete}>delete</button></tr>))} */}

        </>
    )
}

export default Table