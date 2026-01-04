import React from 'react'
import "../style/Story.css"
import {Avatar} from "@mui/material";

const Story = ({ image, profileSrc, title}) => {
  return (
      <div style={{ backgroundImage: `url(${image})` }} className="Story">
          <div className="StoryAvatarWrapper">
              <Avatar className="StoryAvatar"src={profileSrc} />
          </div>
          <h4>{title}</h4>
    </div>
  )
}

export default Story
