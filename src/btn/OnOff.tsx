import * as React from "react";

export type OnOffType = {
    on: boolean
    setOn: (on: boolean) => void
}
export const OnOff: React.FC<OnOffType> = ({on, setOn}) => {


    const onStyle = {
        width: "30px",
        display: "inline-block",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white",
        cursor: "pointer"
    }
    const offStyle = {
        width: "30px",
        display: "inline-block",
        border: "1px solid black",
        backgroundColor: on ? "white" : "red",
        marginLeft: "10px",
        cursor: "pointer"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: on ? "green" : "red",
    }
    return (
        <div>
            <span style={onStyle} onClick={() => setOn(true)}>On</span>
            <span style={offStyle} onClick={() => setOn(false)}>Off</span>
            <span style={indicatorStyle}/>
        </div>
    )
}
