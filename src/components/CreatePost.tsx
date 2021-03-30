import React, {ChangeEvent, useState} from 'react';
import {useHistory} from "react-router";
import {Button, TextField} from "@material-ui/core";
import {DivWrapper, InputField, PostWrapper} from "../styles/styles";
import {createPostThunkCreator} from "../store/postsReducer";
import {useDispatch} from "react-redux";

export type ValueType = {
    title: string,
    body: string
}
export function CreatePost() {

    const dispatch = useDispatch()
    const history = useHistory()
    const [value, setValue] = useState<ValueType>({
        'title': '',
        'body': ''
    })

    function changeValue(e:ChangeEvent<HTMLTextAreaElement>) {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    function submit() {
        dispatch(createPostThunkCreator(value))
        history.push('/')
    }

    return (
        <DivWrapper>
        <PostWrapper>
                <InputField>
                    <TextField label={'create title'} type="text" value={value.title} name={'title'} onChange={changeValue}/>
                </InputField>
                <InputField>
                    <TextField label={'create text'} value={value.body} name={'body'} onChange={changeValue}/>
                </InputField>
                <Button variant={'contained'} color={"primary"} onClick={submit}>create post</Button>
        </PostWrapper>
        </DivWrapper>


    )
}