import React from 'react'
import "../style/Settings.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Themes from './Themes';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Settings = () => {

    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
        setOpened(!opened);
    };

    const handleAddress = () => {
        alert('address handled');
    }

    return (
  <div className="settings-container">

    <header className="settings_header">
      <div className="settings_logo"><h2>Settings</h2></div>
      <div className="search-bar">
        <input type="text" placeholder="Search settings" />
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
                                        {opened ? (
                                            <KeyboardArrowUpIcon />
                                        ) : (
                                            <KeyboardArrowDownIcon />
                    
                                        )}
                    </button>
                    <div className={`themeOptions ${opened? 'show':''}`}>
                        <span className="themeOption">
                            <DarkModeIcon style={{ color:"rgba(43, 43, 43, 1)"}} />
                        </span>
                        <span className="themeOption">
                            <LightModeIcon className="themeOption" style={{ color: "rgb(255, 159, 57)" }} />
                        </span>
                    </div>
                </div>
                                
                <div className="themes">
                    <Themes/>
                </div>
            </div>
            
            <div className="setting-row">
              <div className="settings_text">
                <div className="title">Set an NFT Avatar</div>
              </div>
              <div className="settings_input_field">
                <input type="text" id="wallet_addr" placeholder="Your wallet address here"/>
              </div>
                <Button onClick={handleAddress}>Primary</Button>
                <div id = "nfts"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
);
}

export default Settings