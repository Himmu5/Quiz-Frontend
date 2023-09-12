import { FC, ReactNode, useEffect, useState } from 'react'
import Axios from '../API/Axios';
import { UserContext } from '../Components/Context/UserContext';

type P = {
    children: ReactNode
}

const UserProvider: FC<P> = ({ children }) => {

    const [user, setUser] = useState();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            Axios.get('/me', { headers: { Authorization: "Bearer " + token } }).then((res) => {
                setUser(res.data)
            })
        }
    }, [])


    function logOut (){
        localStorage.removeItem('token');
        setUser(undefined);
    }

    return <UserContext.Provider value={{ setUser, user , logOut }}>
        {children}
    </UserContext.Provider>
}
export default UserProvider;