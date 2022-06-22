import Table from './table';

const Tables = ({data}) =>{
    return(
        <>
        <h3>Recent Spendings</h3>
        <div>
            {data.map(item=><Table key={item.id} purchase={item} />)}
        </div>

        </>
    )

}

export default Tables