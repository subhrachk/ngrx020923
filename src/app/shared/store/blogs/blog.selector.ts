import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogList } from "./blog.model";


export const blogseletor = createFeatureSelector<BlogList>('Blogs');

export const getblogs = createSelector(blogseletor,(state)=>state.Blogs);
