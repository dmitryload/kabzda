import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./btn/OnOff";
import {Rating} from "./Rating/Rating";
import {Accordeon} from "./Accordeon/Accordeon";

function App() {
    const students = ["Victor", "David", "Dror", "Eliran", "Mohammed"]
    const teachers = ["Alex", "Dor", "Omri", "Liraz", "Lunny"]
    const [value,setValue] = useState<number>(4)
    const [on, setOn] = useState(false)
  return (
    <div className="App">
      <OnOff on={on} setOn={()=>{setOn(!on)}}/>

        <Accordeon users={students} title={"students"} />
        <Rating value={value} title={"rating of students"} setValue={setValue} />
        <Accordeon users={teachers} title={"teachers"}/>
        <Rating value={value} title={"rating of teachers"} setValue={setValue}/>
    </div>
  );
}

export default App;
