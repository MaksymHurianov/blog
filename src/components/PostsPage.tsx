import React from 'react';
import {Post} from "./Post";
import {DivWrapper} from "../styles/styles";
import {InitStateType} from "../store/postsReducer";

export type PropsType = {
    posts: Array<InitStateType>
}

export function PostsPage({posts}:PropsType){
    return (
        <DivWrapper>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Post title={post.title} body={post.body} id={post.id}/>
                    </div>
                )
            })
            }</DivWrapper>
)
}