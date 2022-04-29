import React, {useState} from "react";

type AccordeonType = {
    title: string
    users: string[]
}
export const Accordeon = (props: AccordeonType) => {
    const [collapsed, setCollapsed] = useState(false)
    let userStyle = {
        display: collapsed ? "inherit" : "none"
    }
    return (
        <div>
            <h2 onClick={() => {setCollapsed(!collapsed)}}>{props.title}</h2>
            <ul style={userStyle}>
                {props.users.map((u) => {
                    return (
                        <li>{u}</li>
                    )
                })}
            </ul>
        </div>
    )
}