import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {

    const navigate = useNavigate();
    
    const [logInfo, setLogInfo ] = useState(false)

    useEffect(()=> {
        const [cookieName, cookieValue] = document.cookie.split('=')
        if((cookieValue)) {
            setLogInfo(true)
        }
    }, [document.cookie])

    const logout = (e) => {
        e.preventDefault();

        document.cookie = "USER_DATA=trash; expires=Thu, 01 Jan 1970 00:00:00 UTC;max-age=0";
        console.log(document.cookie)
        localStorage.removeItem('userData')
        fetch('/')
        setLogInfo(false)
        navigate('/users/login')
    }
    return (
        <nav className="nav">
            <Link to="/" className="brand"></Link>

            <ul className="nav_menu">
                <li className="nav_item"><Link to="/nft/catalog" className="nav_link">Catalog</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Info</Link></li>
                <li className="nav_item"><Link to="/nft/catalog/most-wanted" className="nav_link">Most-Wanted</Link></li>
                {logInfo === true ?
                <>
                <li className="nav_item"><Link to="/nft/upload" className="nav_link">Upload</Link></li>
                <li className="nav_item"><Link to="/user-list/:userId" className="nav_link">My Collection</Link></li>
                <li className="nav_item"><Link to="/profile/:userId" className="nav_link">Profile</Link></li>
                </>
                : <></>}
                {logInfo === false ?
                <> 
                <li className="nav_item"><Link to="/users/login" className="nav_link">Login</Link></li>
                <li className="nav_item"><Link to="/users/register" className="nav_link">Register</Link></li>
                </>
                : <></>}
                {logInfo === true ?
                <li className="nav_item"><Link to="#" onClick={logout} className="nav_link">Logout</Link></li>
                : <></>}
            </ul>

        </nav>
    )
}
