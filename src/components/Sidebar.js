import { React, useState  } from 'react'; 
import '../style/Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AssistantIcon from '@mui/icons-material/Assistant';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import defaultPfp from "../img/defaultpfp.png"

import { useNavigate } from 'react-router-dom';

const Sidebar = ({avatar, uname}) => {

  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <div className="sidebar_profile">
        <span onClick={()=>navigate("/profile")}>
          <SidebarRow
            src={avatar}
            imgProps={{ referrerPolicy: "no-referrer" }}
            title={uname}
          />
        </span>
      </div>
      <SidebarRow Icon={FavoriteIcon} title='You liked'/>
      <SidebarRow Icon={BookmarkIcon} title='Featured'/>
      <SidebarRow Icon={HistoryIcon} title='History'/>
      <span onClick={()=>navigate("/settings")}>
        <SidebarRow Icon={SettingsIcon} title='Settings'/>
      </span>
      <SidebarRow Icon={AssistantIcon} title='AI Chatbot'/>
      <SidebarRow Icon={ContactSupportIcon} title='Support'/>
    </div>
  )
}

export default Sidebar
