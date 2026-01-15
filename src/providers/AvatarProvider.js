import {React, createContext, useContext} from 'react'
import { useStateValue } from '../StateProvider'
import defaultPfp from "../img/defaultpfp.png"

const AvatarContext = createContext();

export const AvatarProvider = ({children}) =>{

    const [{user}] = useStateValue();
    const avatar = user?.photoUrl || defaultPfp;

    return(
    <AvatarContext.Provider value={avatar}>
        {children}
    </AvatarContext.Provider>
)
}

export const useAvatar = () => useContext(AvatarContext);
export default AvatarProvider