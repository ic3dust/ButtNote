import {React, createContext, useContext} from 'react'
import { useStateValue } from '../StateProvider';

const UnameContext = createContext();

export const UnameProvider = ({children}) =>{

    const [{user}] = useStateValue();
    const uname = user?.displayName || "Buttnote guest";

    return(
    <UnameContext.Provider value={uname}>
        {children}
    </UnameContext.Provider>
    )
}

export const useUname = () => useContext(UnameContext);

export default UnameProvider