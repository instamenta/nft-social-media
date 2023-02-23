import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {

    const navigate = useNavigate();

    const [logInfo, setLogInfo] = useState(false)
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    
    useEffect(() => {
        // const [cookieName, cookieValue] = document.cookie.split('=')
        // const userDataJSON = localStorage.getItem('userData')
        const cookieData = Cookies.get('user')
        
        console.log(cookieData)
        // if (cookieValue && userDataJSON) {

        //     const { username, _id } = JSON.parse(userDataJSON)

        //     setUserId(_id)
        //     setUserName(username)
        //     setLogInfo(true)

        // } else {
        //     document.cookie = "USER_DATA=expired; expires=Thu, 01 Jan 1970 00:00:00 UTC;max-age=0";
        //     fetch('/')
        //     setLogInfo(false)
        //     navigate('/users/login')
        // }
    }, [])

    const logout = (e) => {
        e.preventDefault();

        document.cookie = "USER_DATA=expired; expires=Thu, 01 Jan 1970 00:00:00 UTC;max-age=0";
        document.cookie = ''
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
                <li className="nav_item"><Link to="/nft/catalog/most-wanted" className="nav_link">Most-Wanted</Link></li>
                {logInfo === true ?
                    <>
                        <li className="nav_item"><Link to="/nft/upload" className="nav_link">Upload</Link></li>
                        <li className="nav_item"><Link to={"/profile/" + userId} className="nav_link">Profile</Link></li>
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
