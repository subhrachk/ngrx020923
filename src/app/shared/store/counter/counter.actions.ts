import { createAction, props } from "@ngrx/store";


export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const changechannelname = createAction('changechannelname',props<{channel : string}>());
export const customChanges = createAction('customChanges',props<{counterchange : { value :number, type : string}}>());
