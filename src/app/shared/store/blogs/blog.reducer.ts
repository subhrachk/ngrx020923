import { createReducer } from "@ngrx/store"
import { bloginitialState } from "./blog.state"


export const blogReducer = createReducer(
    bloginitialState
);
