import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'Input',
}
const Input = () => <input/>

export const TrackingInput = () => {
    const [value, setValue] = useState("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <input onChange={onChangeHandler}/> value = {value}
        </>
    )
}
export const UncontrolledInputSetButton = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const element = inputRef.current as HTMLInputElement
        setValue(element.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>add</button>
            actualValue = {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
}
    return <input value={parentValue} type="text" onChange={onChangeHandler}/>
}

 export const ControlledSelect = () => {
     const [parentValue, setParentValue] = useState<string | undefined>("2")
     const onChangeHandler2 = (e: ChangeEvent<HTMLSelectElement>) => {
         setParentValue(e.currentTarget.value)
     }
    return  (
        <select onChange={onChangeHandler2} value={parentValue} name="city">
            <option>null</option>
            <option value="1">swim</option>
            <option value="2">run</option>
            <option value="3">bike</option>
        </select>
    )
 }
