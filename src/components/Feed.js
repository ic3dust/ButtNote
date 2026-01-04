import React from 'react'
import "../style/Feed.css"
import StoryReel from "./StoryReel"
import Poster from "./Poster"
import Post from "./Post"

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <Poster />

      <Post
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11kPxP9MbKHrxR7wdolw2uS4CYX1ZrWaNDQ&s"
        message='Hey'
        timestamp='Timestamp'
        username='Admin'
        image="https://www.siliconrepublic.com/wp-content/uploads/2014/12/img/tired.jpg"
      />
    </div>
  )
}

export default Feed

