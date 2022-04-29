import React from "react";
type starType = {
    selected: boolean
    v: number
    setValue: (v: number) => void
}

export const Star = (props: starType) => <span onClick={()=> props.setValue(props.v)}>{props.selected ? <b>-star-</b> : "-star-"}</span>