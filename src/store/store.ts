import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {postsReducer} from "./postsReducer";
import {commentsReducer} from "./commentsReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>