import './Post.css'
import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



let isImage = false
function Post({ profilePic, image, username, timestamp, message }) {

    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avatar' />
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className='post__bottom'>
                <p>{message}</p>
            </div>
            <div className='post__image'>
                <img src={image} alt="" /> :
                {/* <video style={{ width: '100%', height: 'auto' }} controls>
                    <source src={image} type="video/mp4" />
                    <source src={image} type="video/ogg" />
                    Your browser does not support HTML video.
                </video> */}
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpAltIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
