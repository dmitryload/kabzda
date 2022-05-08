import {reducer, StateType} from "./Reducer";

test("reduser controlled should be true", () => {
        const state: StateType = {
            collapsed: false
    }
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    expect(newState.collapsed).toBe(true)
})
test("reduser controlled should be false", () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    expect(newState.collapsed).toBe(false)
})
test("reduser controlled should be error", () => {
    const state: StateType = {
        collapsed: true
    }
    expect(()=> reducer(state, {type: "FAKE_ERROR"})).toThrowError()
})
