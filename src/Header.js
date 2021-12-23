import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { useContext, useState } from 'react';
import AuthContext from './store/auth-context';
import { useNavigate } from 'react-router';


function Header() {
    const ctx = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleLogout = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            await ctx.logout()
            navigate('/login')

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }
    return (
        <div className='header'>
            <div className='header__left'>
                <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' />
                <div className='header__input'>
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>
            </div>
            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SupervisorAccountIcon fontSize='large' />
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src='https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/120232674_713344279394520_7558732814290978650_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=98bnVb8de8gAX8yZKWz&_nc_ht=scontent.fhan5-4.fna&oh=7004b087844f583079d6ff1d9d5522df&oe=61B9FBB2' />
                    <h4>Manh Kien</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                {!loading ? <button class='btn' onClick={handleLogout}>Log out</button> : <p style={{ color: "black", fontSize: 'medium' }}>Loading....</p>}
            </div>
        </div>
    )
}

export default Header
