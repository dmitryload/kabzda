import React, {useState} from "react";

export default {
    title: 'react.Memo demo'
}

const Couner = (props: { count: number }) => {
return <div>{props.count}</div>
}
const UserSecret = (props: {users: Array<string>}) => {
    console.log("users")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const NewMessageUser = React.memo(UserSecret)
export const exampl1 = () => {
    const [counter, setCounter] = useState(10)
    const [users, setUsers] = useState(["lala", "lulu", "lili"])
    return (
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <Couner count={counter}/>
            <NewMessageUser users={users}/>
        </>
    )
}
