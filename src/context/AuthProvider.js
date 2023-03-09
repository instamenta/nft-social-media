import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import { decodeToken } from "../services/NftService";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const dispatch = useDispatch()
    
    useEffect(() => {
        const cookie = Cookies.get('user')
        if (auth && cookie !== undefined) {
            (async function getData() {
                const { user } = await decodeToken(cookie)
                if (user) {
                    setAuth(user)
                    dispatch(login(user))
                }
            })()
        }
    }, [ auth, document.cookie])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext