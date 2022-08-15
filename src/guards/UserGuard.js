import { Navigate, Outlet} from "react-router-dom";

export function UserGuard({ children }) { 
    const [cookieName, cookieValue] = document.cookie.split('=');

    if(!cookieValue) {
        return <Navigate to='/users/login' replace />;
    }
    return children ? children : <Outlet />
}