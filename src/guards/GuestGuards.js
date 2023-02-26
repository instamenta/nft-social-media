import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export function GuestGuard({ children }) { 
    const cookieData = Cookies.get('user')
    
    if(cookieData) {
        return <Navigate to='/' replace />;
    }
    return children ? children : <Outlet />
}