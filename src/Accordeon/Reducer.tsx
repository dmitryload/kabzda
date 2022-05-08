
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: { type: string }): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const cope = {...state, collapsed: !state.collapsed}
            console.log(cope)
            return cope
        default:
            throw new Error("Throw action type")
    }
}

