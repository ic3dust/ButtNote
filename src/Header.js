import React from 'react'
import './Header.css'
import logo from './img/logo.svg'

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import {Avatar} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Header = () => {

  return (
    <div className="header">

    <div className="header_left">
        <img src={logo} alt="logo"></img>

        <div className="header_input">
            <SearchIcon />
            <input type="text" placeholder='Search ButtNote'></input>
        </div>
    </div>



    <div className="header_middle">


        <div className="header_option header_option--active">
            <GroupIcon></GroupIcon>
        </div>


        <div className="header_option">
            <SubscriptionsIcon></SubscriptionsIcon>
        </div>


        <div className="header_option">
            <NewspaperIcon></NewspaperIcon>
        </div>


    </div>



    <div className="header_right">


        <div className="header_info">
            <Avatar></Avatar>
            <h4>ButtnoteUser</h4>
        </div>
            <div className = "right_option right_option--active">
            <ChatIcon></ChatIcon>
            </div>
            <div className = "right_option">
                <NotificationsIcon></NotificationsIcon>
            </div>
    </div>


    </div>

  )
}

export default Header
