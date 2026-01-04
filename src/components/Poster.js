import React from 'react'
import "../style/Poster.css"
import { Avatar } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from 'react';

const Poster = () => {

  const [input, setInput] = useState('');//by default = ''

  const handleSubmit = e => {
    e.preventDefault();//prevent refresh on submit

    //db queries

    setInput('');
  };

  return (
    <div className="Poster">
      <div className="Poster_top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={'Tell them, Butt!'}
            className="Poster_input"
          />
          <button onClick={ handleSubmit} type="Submit">Hidden btn sbmt</button>
        </form>
      </div>
      <div className="Poster_bot">
        <div className="Poster_option">
          <CameraAltIcon style={{ color: "rgb(57, 206, 255)" }} />
          <h4>Post photos</h4>
        </div>
        <div className="Poster_option">
          <VideocamIcon style={{ color: "rgba(255, 105, 178, 1)" }} />
          <h4>Post videos</h4>
        </div>
        <div className="Poster_option">
          <EmojiEmotionsIcon style={{ color: "rgb(255, 159, 57)" }} />
          <h4>Share your feelings</h4>
        </div>
      </div>
    </div>
  )
}

export default Poster
