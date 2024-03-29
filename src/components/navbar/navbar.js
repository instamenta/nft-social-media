import Cookies from "js-cookie";
import AuthContext from "../../context/AuthProvider";

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { decodeToken } from "../../services/NftService";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user";

import "./Navbar.css"

export const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext)
    const [logInfo, setLogInfo] = useState(false)
    const [userId, setUserId] = useState('')

    useEffect(() => {
        const cookie = Cookies.get('user', { signed: true })
        if (cookie) {
            (async function userData() {
                const { user } = await decodeToken(cookie)
                if (user) {
                    setUserId(user._id)
                    setLogInfo(true)
                } else {
                    setUserId('')
                    setLogInfo(false)
                }
            })()
        } else {
            setUserId('')
            setLogInfo(false)
        }
    }, [auth, setAuth])

    const logoutHandler = (e) => {
        e.preventDefault();

        setLogInfo(false)
        setUserId('')
        Cookies.remove('user', { path: '/' })
        setAuth({})
        dispatch(logout())
        navigate('/users/login')
    }

    return (
        <nav className="nav">
            <Link to="/" className="brand">
                THE BIGGER PICTURE
            </Link>
            <ul className="nav_menu">
                <li className="nav_item">
                    <Link to="/nft/catalog" className="nav_link">
                        Catalog
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/nft/catalog/most-wanted" className="nav_link">
                        Most-Wanted
                    </Link>
                </li>
                {logInfo === true ?
                    <>
                        <li className="nav_item">
                            <Link to="/nft/upload" className="nav_link">
                                Upload
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to={"/profile/" + userId} className="nav_link">
                                Profile</Link>
                        </li>
                    </>
                    : <></>}
                {logInfo === false ?
                    <>
                        <li className="nav_item">
                            <Link to="/users/login" className="nav_link">
                                Login
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/users/register" className="nav_link">
                                Register
                            </Link>
                        </li>
                    </>
                    : <></>}
                {logInfo === true ?
                    <li className="nav_item">
                        <Link to="#" onClick={logoutHandler} className="nav_link">
                            Logout
                        </Link>
                    </li>
                    : <></>}
            </ul>
        </nav>
    )
}
