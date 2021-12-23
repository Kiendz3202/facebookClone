import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import { useContext } from 'react'
import AuthContext from './store/auth-context'


function Feed() {
    const ctx = useContext(AuthContext)

    return <div className='feed'><StoryReel />
        <MessageSender />
        {ctx.dataPost && ctx.dataPost.map(post => (
            <Post key={post.id} message={post.status} image={post.url} />
        ))}
    </div>
}

export default Feed


    // (
    //     <div className='feed'>
    //         <StoryReel />
    //         <MessageSender />
    //         <Post
    //             profilePic='https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/120232674_713344279394520_7558732814290978650_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=98bnVb8de8gAX8yZKWz&_nc_ht=scontent.fhan5-4.fna&oh=7004b087844f583079d6ff1d9d5522df&oe=61B9FBB2'
    //             username='Manh Kien'
    //             timestamp='right now'
    //             message='This is my post'
    //             image='https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/120232674_713344279394520_7558732814290978650_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=98bnVb8de8gAX8yZKWz&_nc_ht=scontent.fhan5-4.fna&oh=7004b087844f583079d6ff1d9d5522df&oe=61B9FBB2'
    //         />
    //         <Post
    //             profilePic='https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/120232674_713344279394520_7558732814290978650_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=98bnVb8de8gAX8yZKWz&_nc_ht=scontent.fhan5-4.fna&oh=7004b087844f583079d6ff1d9d5522df&oe=61B9FBB2'
    //             username='Manh Kien'
    //             timestamp='right now'
    //             message='This is my post'
    //             image='https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/120232674_713344279394520_7558732814290978650_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=98bnVb8de8gAX8yZKWz&_nc_ht=scontent.fhan5-4.fna&oh=7004b087844f583079d6ff1d9d5522df&oe=61B9FBB2'
    //         />
    //     </div>
    // )