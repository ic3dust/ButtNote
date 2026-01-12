import {React, useState, useContext} from 'react'
import { ThemesContext } from '../ThemesProvider';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Themes from '../components/Themes';
import "../style/Settings.css"
import { colors } from '../colors';

const ThemesRow = () => {

    const [opened, setOpened] = useState(false);
    const {theme, setTheme} = useContext(ThemesContext);

    const handleDarkTheme = () => setTheme("dark");
    const handleLightTheme = () => setTheme("light");
    const handleToggle = () => {
        setOpened(!opened);
    };

  return (
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
                    style={{ color: colors.yellow }} 
                    />
                </span>
            </div>
        </div>
                                
        <div className="themes">
            <Themes/>
        </div>
    </div>
  )
}

export default ThemesRow
