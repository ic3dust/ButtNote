import { signOut } from "firebase/auth"; 
import { auth } from "../firebase"; 
import { actionTypes } from "../Reducer"; 
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider"; 
import LogoutIcon from '@mui/icons-material/Logout';
import {colors} from "../colors"

const LogoutBtn = () =>{

    const [, dispatch] = useStateValue();
    const navigate = useNavigate();

    const logout = async() =>{
        try{
            await signOut(auth);

            dispatch({
                type: actionTypes.LOGOUT,
            });

            navigate("/login");
        }catch(err){
            console.log(err);
        }
    }
    return (
        <LogoutIcon 
        style={{color: colors.error}}
        onClick={logout}
        />
    )
}

export default LogoutBtn