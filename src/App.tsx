import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./btn/OnOff";
import {Rating, RatingValueType} from "./Rating/Rating";
import {Accordeon} from "./Accordeon/Accordeon";

function App() {
    const students = ["Victor", "David", "Dror", "Eliran", "Mohammed"]
    const teachers = ["Alex", "Dor", "Omri", "Liraz", "Lunny"]

    const [value, setValue] = useState<RatingValueType>(4)
    const [on, setOn] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <div className="App">
            <OnOff on={on} setOn={setOn}/>

            <Accordeon users={students} title={"students"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Rating value={value} title={"rating of students"} setValue={setValue}/>
            <Accordeon users={teachers} title={"teachers"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Rating value={value} title={"rating of teachers"} setValue={setValue}/>
        </div>
    );
}

export default App;
