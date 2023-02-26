import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { decodeToken } from "../services/NftService";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    useEffect(() => {
        const cookie = Cookies.get('user')

        if (auth && cookie !== undefined) {
            async function getData() {
                const { user } = await decodeToken(cookie)
                if (user) {
                    setAuth(user)
                }
            }
            getData()
        }
    }, [auth, setAuth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext