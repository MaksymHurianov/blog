import {postsAPI} from "../api/posts-api";
import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ValueType} from "../components/CreatePost";
import {AppRootStateType} from "./store";



export type InitStateType = {
    id: number|null
    title: string,
    body: string
}
type ActionType = {
    type: string,
    payload: Array<InitStateType>
}

const initState: Array<InitStateType> = [{
    id:null,
    title:'',
    body:''
}]

export function postsReducer(state=initState, action:ActionType): Array<InitStateType>{
    switch (action.type){
        case 'GET-POSTS':{
            console.log(action.payload)
            return [...action.payload]
        }
        default:
            return state
    }
}

type ThunkActionType = ThunkAction<Promise<void>, AppRootStateType, unknown, ActionType>

export const getPostsThunkCreator = (): ThunkActionType => async (dispatch) =>{
    postsAPI.getAllPosts().then(data => {
        dispatch({type:'GET-POSTS', payload:data.data})
    })
}
export const deletePostThunkCreator = (id:number): ThunkActionType => async (dispatch) =>{
    postsAPI.deletePost(id).then((data)=>{
        dispatch(getPostsThunkCreator())
    })
}
export const createPostThunkCreator = (value:ValueType): ThunkActionType => async (dispatch) =>{
    postsAPI.createPost(value).then((data)=>{
        dispatch(getPostsThunkCreator())
    })
}
