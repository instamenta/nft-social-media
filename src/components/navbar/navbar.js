import { Link } from "react-router-dom";
export const Navbar = () => {

    return (
        <nav className="nav">
            <Link to="/" className="brand">Online-Shop</Link>

            <ul className="nav_menu">
                <li className="nav_item"><Link to="#" className="nav_link">Catalog</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Info</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Top-Rated</Link></li>
                <li className="nav_item"><Link to="/login" className="nav_link">Login</Link></li>
                <li className="nav_item"><Link to="/profile/:userId" className="nav_link">Profile</Link></li>
                <li className="nav_item"><Link to="/register" className="nav_link">Register</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Logout</Link></li>
            </ul>

        </nav>
    )
}
