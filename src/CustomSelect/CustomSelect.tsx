import React, {MouseEvent, useState} from "react";
import {ItemType} from "./CustomSelect.stories";
import s from "./CustomSelect.module.css"

type CustomSelectType = {
    value: string | undefined
    items: ItemType[]
    onChangeHandler: (title: string)=> void
}
export const CustomSelect:React.FC<CustomSelectType> = ({items, onChangeHandler, value}) => {
    const [collapsed, setCollapsed] = useState(false)
    const [hovered, setHovered] = useState(value)
    const hoveredItem = items.find(e => e.ind === hovered)
    const getName = (e: MouseEvent<HTMLDivElement>) => {
        onChangeHandler(e.currentTarget.innerHTML)
        setCollapsed(true)
    }
    return (
        <div className={s.select}>
            <div className={s.title}

                 onClick={()=>setCollapsed(!collapsed)}>{value}</div>
            <div className={(collapsed ? s.items : s.items__active)}>
            {items.map((el, index) => {
                return (
                    <div
                        className={s.item + " " + (hovered === el.ind ? s.item__active : "")}
                        onMouseEnter={()=> setHovered(el.ind)}
                        onClick={getName} key={index}>{el.title}</div>
                )
            })}
            </div>
        </div>
    )
}
