import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export function GuestGuard({ children }) { 
    const cookieData = Cookies.get('user')
    console.log(cookieData)
    if(cookieData) {
        return <Navigate to='/' replace />;
    }
    return children ? children : <Outlet />
}