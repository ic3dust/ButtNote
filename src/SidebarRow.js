import React from 'react'
import './SidebarRow.css'
import {Avatar} from "@mui/material";


const SidebarRow = ({src, Icon, title}) => {
  return (
    <div className="SidebarRow">
        {src && <Avatar src={src}></Avatar>}
        {Icon && <Icon/>}

      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
