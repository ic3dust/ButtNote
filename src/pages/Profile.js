import React from 'react'
import { Avatar } from '@mui/material' 
import { useStateValue } from '../StateProvider'
import { useNavigate } from 'react-router-dom'
import defaultPfp from "../img/defaultpfp.png"
import "../style/Profile.css"
import { useUname  } from '../providers/UnameProvider' 
import { useAvatar } from '../providers/AvatarProvider'

const Profile = () => {

    const [{user}] = useStateValue();
    const avatar = useAvatar();
    const uname = useUname();
    const navigate = useNavigate();

  return (
    <div>
      <div className="profile-card">
              <div className="profile-card-top">
                  <h2>Change Avatar:</h2>
                  <h2>Change username:</h2>
              </div>
              <div className="profile-card-bot">
                      <span className="avatar">
                          <Avatar
                           src={avatar}
                           imgProps={{referrerPolicy: "no-referrer"}}
                           style={{width: "60px", height: "60px"}}
                           />
                      </span>
                    <h3 contentEditable="true">{uname}</h3>
              </div>
      </div>
    </div>
  )
}

export default Profile
