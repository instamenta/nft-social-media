import { Navigate, Outlet} from "react-router-dom";

export function GuestGuard({ children }) { 
    const [cookieName, cookieValue] = document.cookie.split('=');

    if(cookieValue) {
        return <Navigate to='/' replace />;
    }
    return children ? children : <Outlet />
}