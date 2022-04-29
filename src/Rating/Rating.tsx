import React, {useState} from "react";
import {Star} from "./Star/Star";
type RatingType = {
    title: string
    value: number
    setValue: (v: number) => void
}
export const Rating = (props:RatingType) => {

const [value,setValue] = useState(4)

    return (
        <div>
            <h3>{props.title}</h3>
           <Star v={1} selected={value > 0} setValue={setValue}/>
           <Star v={2} selected={value > 1} setValue={setValue}/>
           <Star v={3} selected={value > 2} setValue={setValue}/>
           <Star v={4} selected={value > 3} setValue={setValue}/>
           <Star v={5} selected={value > 4} setValue={setValue}/>
        </div>
    )
}


// type RatingType = {
//     title: string
//     value: StarsType
//     setValue: (value: StarsType) => void
// }
// export const Rating: React.FC<RatingType> = ({title, value, setValue}) => {
//
//
//
//     return (
//         <div>
//             <h3>{title}</h3>
//            <Star v={1} selected={value > 0} setValue={setValue}/>
//            <Star v={2} selected={value > 1} setValue={setValue}/>
//            <Star v={3} selected={value > 2} setValue={setValue}/>
//            <Star v={4} selected={value > 3} setValue={setValue}/>
//            <Star v={5} selected={value > 4} setValue={setValue}/>
//         </div>
//     )
// }
