import { useContext } from 'react';
import {AuthContext} from '../Context/AuthContext';
function LinkDataBase(){
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);
    return(
        <>
        
        </>
    )
}

export default LinkDataBase;