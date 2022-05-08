import React, {useReducer} from "react";
import {Accordeon} from "./Accordeon";
import {reducer} from "./Reducer";

export default {
    title: 'Accordeon',
    component: Accordeon
}
/*export const Collapsed = () => <Accordeon users={["Viktor", "Alexander", "Vadim"]}
                                                                         title={"list students"}
                                                                         collapsed={false}/>
export const Uncollapsed = () => <Accordeon users={["Viktor", "Alexander", "Vadim"]}
                                                                           title={"list students"}
                                                                           collapsed={true}/>*/


export const Controlled = () => {

    const onClickCallback = () => {
        dispatch({type: "TOGGLE-COLLAPSED"})
    }
    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, {collapsed:false})

    return (<Accordeon users={["Viktor", "Alexander", "Vadim"]}
                       title={"list students"}
                       collapsed={collapsed.collapsed} onClickHandl={onClickCallback}/>)

}

