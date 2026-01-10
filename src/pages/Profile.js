import React from 'react'
import { Avatar } from '@mui/material' 
import { useStateValue } from '../StateProvider'
import { useNavigate } from 'react-router-dom'
import defaultPfp from "../img/defaultpfp.png"
import "../style/Profile.css"

const Profile = () => {

    const stateValue = useStateValue();
    const navigate = useNavigate();
    const user = stateValue?.[0]?.user;

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
                           src={user?.photoUrl || defaultPfp}
                           imgProps={{referrerPolicy: "no-referrer"}}
                           style={{width: "60px", height: "60px"}}
                           />
                      </span>
                    <h3 contentEditable="true">{user?.displayname || "ButtNote user"}</h3>
              </div>
      </div>
    </div>
  )
}

export default Profile
