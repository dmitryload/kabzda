import React from "react";

type AccordeonType = {
    title: string
    users: string[]
    collapsed: boolean
    onClickHandl: () => void
}
export const Accordeon: React.FC<AccordeonType> = ({
                                                       title,
                                                       collapsed,
                                                       users, onClickHandl
                                                   }) => {
    return (
        <div>
            <h2 onClick={onClickHandl}>{title}</h2>
            {collapsed && <ul>
                {users.map((u, index) => {
                    return (
                        <li key={index}>{u}</li>
                    )
                })}
            </ul>}
        </div>
    )
}
