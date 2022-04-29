import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}
export const ActiveOnOff:ComponentStory<typeof OnOff> = () => <OnOff on={true} setOn={action("clicked")}/>
export const DeactiveOnOff:ComponentStory<typeof OnOff> = () =><OnOff on={false} setOn={action("clicked")}/>
export const UnConstrolledOnOff:ComponentStory<typeof OnOff> = () => {
    const [on, setOn] = useState<boolean>(true)
    return (
      <OnOff on={on} setOn={setOn}/>
    )
}
