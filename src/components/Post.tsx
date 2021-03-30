import React  from 'react';
import {NavLink} from "react-router-dom";
import {Wrapper, PostWrapper} from '../styles/styles';

type PostType = {
    title: string,
    body: string,
    id: number | null
}

export function Post({title, body, id}:PostType){
    return(
        <PostWrapper>
            <Wrapper><NavLink to={`/post/${id}`}>{title}</NavLink></Wrapper>
            <Wrapper>{body}</Wrapper>

        </PostWrapper>
    )
}