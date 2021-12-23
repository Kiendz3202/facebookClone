import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MessageIcon from '@mui/icons-material/Message';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow avatar='https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/120232674_713344279394520_7558732814290978650_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=98bnVb8de8gAX8yZKWz&_nc_ht=scontent.fhan5-4.fna&oh=7004b087844f583079d6ff1d9d5522df&oe=61B9FBB2' title='Manh Kien' />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={SupervisorAccountIcon} title='Friends' />
            <SidebarRow Icon={MessageIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='MarketPlace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Video' />
            <SidebarRow Icon={ExpandMoreIcon} title='MarketPlace' />
        </div>
    )
}

export default Sidebar
