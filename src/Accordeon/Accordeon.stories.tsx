import React, {useState} from "react";
import {Accordeon} from "./Accordeon";
import {ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordeon',
    component: Accordeon
}
export const Collapsed = () => <Accordeon users={["Viktor", "Alexander", "Vadim"]}
                                                                         title={"list students"}
                                                                         collapsed={false}
                                                                         setCollapsed={action("clicked")}/>
export const Uncollapsed = () => <Accordeon users={["Viktor", "Alexander", "Vadim"]}
                                                                           title={"list students"}
                                                                           collapsed={true}
                                                                           setCollapsed={action("clicked")}/>
export const Uncontrolled = () => {
    const [collapsed, setCollapsed] = useState(false)
    return ( <Accordeon users={["Viktor", "Alexander", "Vadim"]}
                        title={"list students"}
                        collapsed={collapsed}
                        setCollapsed={setCollapsed}/>)

}

