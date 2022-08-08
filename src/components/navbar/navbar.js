import { Link } from "react-router-dom";
import {useState} from "react"
export const Navbar = () => {

    return (
        <nav className="nav">
            <Link to="#" className="brand">herdoy</Link>
            <ul className="nav_menu">
                <li className="nav_item"><Link to="#" className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to="#" className="nav_link">Home</Link></li>
            </ul>

        </nav>
    )
}
