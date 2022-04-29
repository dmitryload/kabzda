import React from "react";

type AccordeonType = {
    title: string
    users: string[]
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
export const Accordeon:React.FC<AccordeonType> = ({title,
                                                      setCollapsed,
                                                      collapsed,
                                                      users}) => {
    return (
        <div>
            <h2 onClick={() => setCollapsed(!collapsed)}>{title}</h2>
            {collapsed && <ul>
                {users.map((u) => {
                    return (
                        <li>{u}</li>
                    )
                })}
            </ul>}
        </div>
    )
}
