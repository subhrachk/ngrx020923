import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.model";

export const counterState = createFeatureSelector<CounterModel>('counter');

export const getCounter = createSelector(counterState,(state)=>state.counter);

export const getChannelName = createSelector(counterState,(state)=>state.channelName);