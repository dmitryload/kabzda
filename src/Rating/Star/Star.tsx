import React from "react";
import {RatingValueType} from "../Rating";
type starType = {
    selected: boolean
    v: RatingValueType
    setValue: (v: RatingValueType) => void
}

export const Star = (props: starType) => <span onClick={()=> props.setValue(props.v)}>{props.selected ? <b>-star-</b> : "-star-"}</span>
