import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
export function UserGuard({ children }) { 
    const cookieData = Cookies.get('name')
    if(!cookieData) {
        return <Navigate to='/users/login' replace />;
    }
    return children ? children : <Outlet />
}