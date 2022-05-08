import {useState} from "react";
import {CustomSelect} from "./CustomSelect";

export default {
    title: 'CustomSelect',
    component: CustomSelect
}
export type ItemType = {
    title: string
    ind: string
}
export const ControlledSelect = () => {
    const items = [{title: "swim", ind:"0"},{title: "bike", ind:"1"},{title: "run", ind:"2"}]
    const [parentValue, setParentValue] = useState<string>("select")
    const onChangeHandler = (title: string) => {
        setParentValue(title)
    }
    return (
        <CustomSelect items={items} value={parentValue} onChangeHandler={onChangeHandler}/>
    )
}
