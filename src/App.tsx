import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getPostsThunkCreator, InitStateType} from "./store/postsReducer";
import {PostsPage} from "./components/PostsPage";
import {Redirect, Route, Switch} from "react-router";
import {PostPage} from "./components/PostPage";
import {Header} from "./components/Header";
import {CreatePost} from "./components/CreatePost";
import {AppRootStateType} from "./store/store";



function App() {
    const dispatch = useDispatch()
    const posts = useSelector<AppRootStateType, Array<InitStateType> >(state => state.posts)
    useEffect(() => {
        dispatch(getPostsThunkCreator())
    }, [])
    return (
        <div>
            <Header/>
            <Switch>
                <Route path={'/'} exact><PostsPage posts={posts}/></Route>
                <Route path={'/post/:id'} exact><PostPage posts={posts}/></Route>
                <Route path={'/createPost'} exact><CreatePost/></Route>
                <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default App;
