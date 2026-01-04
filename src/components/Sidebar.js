import React from 'react'
import '../style/Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AssistantIcon from '@mui/icons-material/Assistant';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebar_profile">
        <SidebarRow src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11kPxP9MbKHrxR7wdolw2uS4CYX1ZrWaNDQ&s' title='Simple coder'/>
      </div>
      <SidebarRow Icon={FavoriteIcon} title='You liked'/>
      <SidebarRow Icon={BookmarkIcon} title='Featured'/>
      <SidebarRow Icon={HistoryIcon} title='History'/>
      <SidebarRow Icon={PersonSearchIcon} title='Following'/>
      <SidebarRow Icon={PermContactCalendarIcon} title='Followers'/>
      <SidebarRow Icon={AssistantIcon} title='AI Chatbot'/>
    </div>
  )
}

export default Sidebar
