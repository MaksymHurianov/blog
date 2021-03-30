import React, {ChangeEvent, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getPostCommentThunkCreator, updateCommentThunkCreator} from "../store/commentsReducer";
import {Comments} from "./Comments";
import {CreateComment} from "./CreateComment";
import {Wrapper, DivWrapper, PostWrapper} from "../styles/styles";
import {Button, TextareaAutosize} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {deletePostThunkCreator, InitStateType} from "../store/postsReducer";
import {AppRootStateType} from "../store/store";


export type PropsType = {
    posts: Array<InitStateType>
}

type ValueType = {
    title: string
    body: string
}


export function PostPage({posts}: PropsType) {

    const {id} = useParams<{ id: string }>()
    const history = useHistory()
    const comments = useSelector((state: AppRootStateType) => state.comments)
    const [value, setValue] = useState<ValueType>({
        body: '',
        title: ''
    })
    const dispatch = useDispatch()
    const [updateTitle, setUpdateTitle] = useState<boolean>(true)
    const [updateBody, setUpdateBody] = useState<boolean>(true)

    useEffect(() => {
        dispatch(getPostCommentThunkCreator(id))
    }, [])

    const post = posts.find((post) => {
        //@ts-ignore
        return post.id == id
    })


    if (!post) {
        return <h1>404: PAGE NOT FOUND</h1>
    }

    function deletePost() {
        dispatch(deletePostThunkCreator(+id))
        history.push('/')
    }

    function changeTitle() {
        setUpdateTitle(false)
        if (post) {
            setValue({
                body: post.body,
                title: post.title
            })
        }

    }

    function changeBody() {
        setUpdateBody(false)
        if (post) {
            setValue({
                body: post.body,
                title: post.title
            })
        }
    }

    function setTitle() {
        dispatch(updateCommentThunkCreator(id, value))
        console.log(value)
        setUpdateTitle(true)
    }

    function setBody() {
        dispatch(updateCommentThunkCreator(id, value))
        console.log(value)
        setUpdateBody(true)
    }

    function changeUpdateTitle(e: ChangeEvent<HTMLTextAreaElement>) {
        setValue({
            ...value,
            title: e.target.value
        })
    }

    function changeUpdateBody(e: ChangeEvent<HTMLTextAreaElement>) {
        setValue({
            ...value,
            body: e.target.value
        })
    }

    return <DivWrapper>
        <PostWrapper>
            <Button startIcon={<DeleteIcon/>} variant={'contained'} color={"secondary"} onClick={deletePost}>delete
                post</Button>
            {updateTitle ? <Wrapper onDoubleClick={changeTitle}>{post.title}</Wrapper>
                : <Wrapper><TextareaAutosize style={{width: '75%'}} rowsMin={5} value={value.title}
                                             onChange={changeUpdateTitle}/><Button variant={'contained'}
                                                                                   color={"primary"}
                                                                                   onClick={setTitle}>update</Button></Wrapper>}
            {updateBody ? <Wrapper onDoubleClick={changeBody}>{post.body}</Wrapper>
                : <Wrapper><TextareaAutosize style={{width: '75%'}} rowsMin={10} value={value.body}
                                             onChange={changeUpdateBody}/><Button variant={'contained'}
                                                                                  color={"primary"}
                                                                                  onClick={setBody}>update</Button></Wrapper>}
            <CreateComment id={id}/>
            <Comments comments={comments}/>

        </PostWrapper>
    </DivWrapper>

}