import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <SidebarRow src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11kPxP9MbKHrxR7wdolw2uS4CYX1ZrWaNDQ&s' title='Simple coder'/>
      <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 infocentrum'/>
      <SidebarRow Icon={PeopleAltIcon} title='friends'/>
    </div>
  )
}

export default Sidebar
