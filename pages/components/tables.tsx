import Table from './table';

const Tables = ({data}) =>{
    return(
        <>
        {data.map(item => <Table purchase={item} />)}
        </>
    )

}

export default Tables