import React, {ChangeEvent , useState} from 'react';
import {getPostCommentThunkCreator} from "../store/commentsReducer";
import {useDispatch} from "react-redux";
import {postsAPI} from "../api/posts-api";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

type IdType = {
    id: string
}

export function CreateComment({id}:IdType){
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    function changeValue(e:ChangeEvent<HTMLTextAreaElement>){
        setValue(e.target.value)
    }
    function submit(e:any){
        setValue("")
        postsAPI.createComment({
            "postId": +id ?? id,
            "body": value
        }).then(data=>{
            dispatch(getPostCommentThunkCreator(id))
        })
    }

    return(
        <div style={{margin: '25px'}}>
            <TextField label={'create comment'} value={value} onChange={changeValue}/>
            <Button variant={'contained'} color={"primary"} onClick={submit}>create comment</Button>
        </div>


    )
}