import React from "react";
import {Star} from "./Star/Star";
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingType = {
    title?: string
    value: RatingValueType
    setValue: (v: RatingValueType) => void
}
export const Rating:React.FC<RatingType> = ({value, setValue, title}) => {
    return (
        <div>
            <h3>{title}</h3>
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
