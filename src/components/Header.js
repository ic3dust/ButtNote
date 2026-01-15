import { React } from 'react'
import '../style/Header.css'
import logo from '../img/logo.svg'

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import {Avatar} from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import { useNavigate } from 'react-router-dom';

import LogoutBtn from "../utils/logout"

const Header = ({avatar, uname}) => {

    const navigate = useNavigate();

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
            <Avatar
                style={{cursor: "pointer"}}
                src={avatar}
                imgProps={{ referrerPolicy: "no-referrer" }}
                onClick={()=>navigate("/profile")}      
            />
            <h4 onClick={()=>navigate("/profile")}>{uname}</h4>
        </div>
            <div className = "right_option right_option--active">
            <ChatIcon></ChatIcon>
            </div>
            <div className = "right_option">
                <NotificationsIcon></NotificationsIcon>
            </div>
            <div className = "right_option" >
                <div className="logout_btn" data-title="Log out from the account?">
                    <LogoutBtn />
                </div>
            </div>
    </div>
    </div>
    

  )
}

export default Header
