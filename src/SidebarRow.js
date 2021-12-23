import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarRow.css'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import MessageIcon from '@mui/icons-material/Message';
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function SidebarRow({ title, Icon, avatar }) {
    return (
        <div className='sidebarRow'>
            {avatar && <Avatar src={avatar} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
