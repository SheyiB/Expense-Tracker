import Image from 'next/image';

const UserBasic = (props)=> {
    return (
        <>
        <div>
            <h1> Welcome {props.username}</h1>
            <h3>Monthly Spend: {props.monthlySpend}</h3>
        </div>

        {/* <div>
            <Image
            unoptimized
            src={props.image}
            alt='User Avatar'
            width= "200px"
            height= "300px"
            />
        </div> */}

        <div>
            <h2>Cash at Hand {props.atHand}</h2>
            <h2>Cash in Bank {props.inBank}</h2>
        </div>
        </>
    )
}

export default UserBasic