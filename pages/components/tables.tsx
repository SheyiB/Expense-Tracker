import Table from './table';

const Tables = ({data}) =>{
    return(
        <>
        <h3>Recent Spendings</h3>
        <div>
            {data.map(item=><Table purchase={item} />)}
        </div>

        </>
    )

}

export default Tables