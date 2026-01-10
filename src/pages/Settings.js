import React from 'react'
import "../style/Settings.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Themes from '../components/Themes';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import NFTs from '../components/NFTs';
import defaultPfp from "../img/defaultpfp.png"
import { useStateValue } from '../StateProvider';
import {Avatar} from "@mui/material";

const Settings = () => {

    const [opened, setOpened] = useState(false);
    const [theme, setTheme] = useState("light");
    const [photo, setPhoto] = useState(defaultPfp);
    const stateValue = useStateValue();
    const user = stateValue?.[0]?.user;

    const handleToggle = () => {
        setOpened(!opened);
    };

    const handleAddress = () => {
        alert('address handled');
    }

    const handleDarkTheme = () => setTheme("dark");
    const handleLightTheme = () => setTheme("light");

    useEffect(()=>{
      if(user?.photoUrl){
        setPhoto(user.photoUrl);
      }
    }, [user]);

    return (
  <div className={`settings-container ${theme}`}>

    <header className="settings_header">
      <div className="settings_logo"><h2>Settings</h2></div>
      <div className="search-bar">
        <input class="inputField" type="text" placeholder="Search settings" />
      </div>
    </header>

    <div className="main-layout">

      <nav className="settings_sidebar">
        <ul>
          <li className="settings_active">You and Google</li>
          <li>Autofill</li>
          <li>Privacy and security</li>
          <li>Appearance</li>
          <li>Search engine</li>
        </ul>
      </nav>

      <main className="content">
        <section className="settings-group">
          <h3>General settings</h3>
            <div className="card">
                            
                <div className="setting-row">
                    <div className="settings_text">
                    <h4>Theme</h4>
                    <h5>Change theme color</h5>
                </div>
                                
                <div className="themeWrapper">
                    <button className="togleArrow" onClick={handleToggle}>
                      {opened ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}
                    </button>
                    <div className={`themeOptions ${opened? 'show':''}`}>
                        <span className="themeOption" onClick={handleDarkTheme}>
                            <DarkModeIcon 
                            style={{ color:"rgba(43, 43, 43, 1)"}}
                            />
                        </span>
                        <span className="themeOption" onClick={handleLightTheme}>
                            <LightModeIcon className="themeOption" 
                            style={{ color: "rgb(255, 159, 57)" }} 
                            />
                        </span>
                    </div>
                </div>
                                
                <div className="themes">
                    <Themes/>
                </div>
            </div>
            
            <div className="setting-row">
              <div className="settings_text">
                <h4>Set an NFT Avatar</h4>
                <h5>Enter your wallet address</h5>

                <div className="avatar_palete">
                  <span className="avatar">
                    <Avatar
                      src={photo}
                      imgProps={{ referrerPolicy: "no-referrer" }}
                      onError={() => setPhoto(defaultPfp)}
                    />
                  </span>
                  <div className="avatar_options"><NFTs/></div>
                </div>

              </div>
              <div className="addressHandler">
                <input className="inputField" type="text" id="wallet_addr" placeholder="Your wallet address here"/>
                <button className="btn" onClick={handleAddress} type="submit">Submit</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
);
}

export default Settings