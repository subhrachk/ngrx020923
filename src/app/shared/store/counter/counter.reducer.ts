import { createReducer, on } from "@ngrx/store";
import { counterinitialState } from "./counter.state";
import { increment, decrement, reset, changechannelname, customChanges } from './counter.actions';



export const counterReducer = createReducer(
    counterinitialState,
    on(increment,(state)=>{
        return {
            ...state,
            counter : state.counter + 1
    }}),
    on(decrement,(state)=>{
        return {
            ...state,
            counter : state.counter - 1
    }}),
    on(reset,(state)=>{
        return {
            ...state,
            counter : counterinitialState.counter,
            channelName : counterinitialState.channelName
    }}),
    on(changechannelname,(state,action) => {
        return {
            ...state,
            channelName : action.channel 
        }
    }),
    on(customChanges,(state,action)=>{
        return {
            ...state,
            counter : action.counterchange.type === 'inc'? 
            (state.counter + +action.counterchange.value) : 
            (state.counter - +action.counterchange.value),
            channelName : counterinitialState.channelName
    }}),
)