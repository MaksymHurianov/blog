import {postsAPI} from "../api/posts-api";
import {getPostsThunkCreator} from "./postsReducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";

export type InitStateType = {
    id: number | null
    postId: number | null
    body: string | null
}
type ActionType = {
    type: string,
    payload: Array<InitStateType>
}
type ValueType = {
    title: string,
    body: string
}

const initState: Array<InitStateType> = [{
    id: null,
    postId: null,
    body: null
}]

export function commentsReducer(state=initState, action:ActionType){
        switch (action.type){
            case 'GET-POST-COMMENT':{
                console.log(action.payload)
                return [...action.payload]
            }
            default:
                return state
        }
}

type ThunkActionType = ThunkAction<Promise<void>, AppRootStateType, unknown, ActionType>

export const getPostCommentThunkCreator = (id:string):ThunkActionType => async (dispatch) => {
    postsAPI.getPostComment(id).then((data) => {
        dispatch({type:'GET-POST-COMMENT', payload:data.data.comments})
    })
}
export const updateCommentThunkCreator = (id:string, value:ValueType):ThunkActionType => async (dispatch) => {
    postsAPI.updatePost(id, value).then((data)=>{
        dispatch(getPostsThunkCreator())
    })
}