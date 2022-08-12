import "./Catalog.css"
import { Link } from "react-router-dom"

export const Catalog  = () => {

    return (
        <div>
            <form className='auth-data'>
                <h1 className='auth-h1'>Login</h1>
                
                <Link to="/register" className='auth-redirect'>
                Redirect to register</Link>
                <button className='submit-button'>Login</button>
            </form>
            
        </div>
        
    )
}