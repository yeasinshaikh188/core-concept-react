export default function Friend(friend){
    const {name, id, email} = friend;
    // console.log(email)
    console.log(friend)
    return (
        <div style={{
            border: '2px solid yellow', margin: '10px', padding: '10px'
        }}>
            <h4>name: {name} </h4>
            <p>Email: {email} </p>
            <li>id : {id} </li>
        </div>
    )
}