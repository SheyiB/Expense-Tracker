
const Table = ({purchase, onDelete})=> {

    return (
        <>
            <h3>{purchase.item}</h3>
            <div>
                <span>{purchase.price}</span>
                <span>{purchase.category}</span>
                <span>{purchase.date.slice(0,10)}</span>
                <button onClick={onDelete}>Delete</button>
            </div>
            {/* data => (<tr key={data.id}>{data.map(item =><td key={item.id}>{item}</td>)} <button type='button' onClick={onDelete}>delete</button></tr>))} */}

        </>
    )
}

export default Table