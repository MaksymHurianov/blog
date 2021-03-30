import React from 'react';
import {CommentWrapper, Wrapper} from "../styles/styles";
import {InitStateType} from "../store/commentsReducer";

type CommentsProps = {
    comments: Array<InitStateType>
}

export function Comments({comments}:CommentsProps){
    return <Wrapper>
        {comments.map((comment)=>{
            return <CommentWrapper key={comment.id}>Comment: {comment.body}</CommentWrapper>
        })}
    </Wrapper>
}