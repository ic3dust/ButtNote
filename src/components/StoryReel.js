import React from 'react'
import "../style/StoryReel.css"
import Story from "./Story"

const StoryReel = () => {
  return (
    <div className="StoryReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Okzanih2ZwxgrUNcRDV5rRcSpljUl2j5zA&s"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11kPxP9MbKHrxR7wdolw2uS4CYX1ZrWaNDQ&s"
        title="Coder 2"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUthnEklL6QfviF2aMb0ci6nksSWbVFcinLQ&s"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11kPxP9MbKHrxR7wdolw2uS4CYX1ZrWaNDQ&s"
        title="Coder 3"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcN-hABFRZVSnL_qqkTBG8aVCYtc2Gstj5w&s"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11kPxP9MbKHrxR7wdolw2uS4CYX1ZrWaNDQ&s"
        title="Coder 4"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Okzanih2ZwxgrUNcRDV5rRcSpljUl2j5zA&s"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11kPxP9MbKHrxR7wdolw2uS4CYX1ZrWaNDQ&s"
        title="Coder 5"
      />
    </div>
  )
}

export default StoryReel
