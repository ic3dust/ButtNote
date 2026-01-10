import "../style/Poster.css"
import { Avatar } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import { React, useState } from 'react';
import { useStateValue } from '../StateProvider';
import defaultPfp from "../img/defaultpfp.png"

import { useNavigate } from "react-router-dom";

const Poster = () => {

  const [input, setInput] = useState('');//by default = ''
  const stateValue = useStateValue();
  const user = stateValue?.[0]?.user;

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();//prevent refresh on submit

    //db queries

    setInput('');
  };

  return (
    <div className="Poster">
      <div className="Poster_top">
        <span className="Poster_profile" onClick={()=>navigate("/profile")}>
            <Avatar
                src={user?.photoUrl || defaultPfp}
                imgProps={{ referrerPolicy: "no-referrer" }}
            />
        </span>
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
          <h5>Post photos</h5>
        </div>
        <div className="Poster_option">
          <VideocamIcon style={{ color: "rgba(255, 105, 178, 1)" }} />
          <h5>Post videos</h5>
        </div>
        <div className="Poster_option">
          <EmojiEmotionsIcon style={{ color: "rgb(255, 159, 57)" }} />
          <h5>Share your feelings</h5>
        </div>
      </div>
    </div>
  )
}

export default Poster
