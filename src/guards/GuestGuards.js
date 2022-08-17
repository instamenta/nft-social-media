import { Navigate, Outlet} from "react-router-dom";

export function GuestGuard({ children }) { 
    const [cookieName, cookieValue] = document.cookie.split('=');
    const userData = localStorage.getItem('userData')
    if(cookieValue) {
        if(!userData) {
            document.cookie = "USER_DATA=trash; expires=Thu, 01 Jan 1970 00:00:00 UTC;max-age=0";
            fetch('/')
        }
        return <Navigate to='/' replace />;
    }
    return children ? children : <Outlet />
}