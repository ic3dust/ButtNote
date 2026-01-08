import { React, useState,useEffect  } from 'react'; 
import '../style/Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AssistantIcon from '@mui/icons-material/Assistant';

import { useStateValue } from '../StateProvider';
import defaultPfp from "../img/defaultpfp.png"

import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [{user}] = useStateValue();
  const [photo, setPhoto] = useState(defaultPfp);
  const navigate = useNavigate();

  useEffect(()=>{
    if(user?.photoURL){
      setPhoto(user.photoURL);
    }

  }, [user]);

  return (
    <div className="Sidebar">
      <div className="sidebar_profile">
        <SidebarRow
          src={photo}
          imgProps={{ referrerPolicy: "no-referrer" }}
          onError={() => setPhoto(defaultPfp)}
          title={user?.displayName}
        />
      </div>
      <SidebarRow Icon={FavoriteIcon} title='You liked'/>
      <SidebarRow Icon={BookmarkIcon} title='Featured'/>
      <SidebarRow Icon={HistoryIcon} title='History'/>
      <SidebarRow Icon={PersonSearchIcon} title='Following'/>
      <SidebarRow Icon={PermContactCalendarIcon} title='Followers'/>
      <SidebarRow Icon={AssistantIcon} title='AI Chatbot'/>
    </div>
  )
}

export default Sidebar
