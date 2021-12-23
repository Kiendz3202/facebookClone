import { Avatar } from '@mui/material'
import { React, useState, useRef, useContext, useEffect, useCallback } from 'react';
import './MessageSender.css'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AuthContext from './store/auth-context';


function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [getNewPost, setGetNewPost] = useState(false)
    // const statusRef = useRef()
    // const urlRef = useState()
    const [data, setData] = useState([])
    const ctx = useContext(AuthContext)

    const inputChangHandle = (event) => {
        setInput(event.target.value)
    }
    const imageChangHanlde = (event) => {
        setImageUrl(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const request = await fetch('https://auth-production-bfcdb-default-rtdb.asia-southeast1.firebasedatabase.app/post.json', {
                method: 'POST',
                body: JSON.stringify({
                    status: input,
                    url: imageUrl
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!request.ok) {
                throw new Error(request.error.message)
            }
            const data = await request.json()
            console.log(data)

        } catch (error) {
            alert(error.message)
        }

        setGetNewPost(true)

        setInput('')
        setImageUrl('')
    }
    const getAllPosts = useCallback(async () => {

        setGetNewPost(false)

        // event.preventDefault()
        try {
            const response = await fetch('https://auth-production-bfcdb-default-rtdb.asia-southeast1.firebasedatabase.app/post.json')
            if (!response.ok) {
                throw new Error('something wrong')
            }
            const data = await response.json()
            const transformedComments = [];

            for (const key in data) {
                const quoteObj = {
                    id: key,
                    ...data[key],
                };

                transformedComments.push(quoteObj);
            }
            ctx.pushData(transformedComments)
        } catch (error) {
            alert(error.message)
        }
    }, [])
    useEffect(() => {
        getAllPosts()
    }, [getNewPost])
    console.log(input)
    console.log(imageUrl)
    console.log(ctx.dataPost)


    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src='https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/120232674_713344279394520_7558732814290978650_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=98bnVb8de8gAX8yZKWz&_nc_ht=scontent.fhan5-4.fna&oh=7004b087844f583079d6ff1d9d5522df&oe=61B9FBB2' />
                <form onSubmit={handleSubmit}>
                    <input value={input} onChange={inputChangHandle} className='messageSender__input' type='text' placeholder="What's on your mind,Manh Kien" />
                    <input value={imageUrl} onChange={imageChangHanlde} type='text' placeholder="image URL (Optional)" />
                    <button>Hidden button</button>
                </form>
                {/* <button onClick={getAllPosts}>reset and get new post</button> */}
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideoCameraBackIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
