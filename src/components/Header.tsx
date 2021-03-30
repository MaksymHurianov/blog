import {NavLink} from "react-router-dom";
import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Typography} from "@material-ui/core";



export function Header(){
    return (
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <Typography variant="h6">
                            <div>
                            <NavLink style={{color:'white'}} to={'/'}>Posts</NavLink>
                            </div>
                            <div >
                            <NavLink style={{color:'white'}} to={'/createPost'}>Create Post</NavLink>
                            </div>
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
    )
}