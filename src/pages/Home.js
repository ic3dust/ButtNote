import "../style/Home.css"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import defaultPfp from "../img/defaultpfp.png"
import { useStateValue } from "../StateProvider";
import {useAvatar} from "../providers/AvatarProvider";
import { useUname } from "../providers/UnameProvider";

function Home() {

  const [{user}] = useStateValue();
  const avatar = useAvatar();
  const uname = useUname();

  return (
    <div className="Home">
        <>
          <Header 
          avatar={avatar}
          uname={uname}
          />
          <div className="Home_body">
            <Sidebar 
            avatar={avatar}
            uname={uname}
            />
            <Feed avatar={avatar}/>
          </div>
        </>
    </div>
  );
}

export default Home;   
