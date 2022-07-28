import { Link } from "react-router-dom";
export const Navbar = () => {

    return (
        <div id="navbar-main-div">
            <div className="html-container">
                <div className="html-section">
                    <div className="html-project">
                        <div className="navigation">
                            <nav>
                                <ul className="nav-type">
                                    <li>
                                        <Link to="/" className="active"
                                        >Home</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/catalog"
                                            className="active1"
                                        >Catalog</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contacts"
                                            className="active2"
                                        >Contacts</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/user/login"
                                            className="active3"
                                        >Login</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/user/register"
                                            className="active3"
                                        >Register</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/user/logout"
                                            className="active3"
                                        >Logout</Link>
                                    </li>
                                    <div className="line" />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <noscript>
                    &lt;div class="first-line"&gt; &lt;div class="linear"&gt; &lt;div
                    class="line-w5"&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                </noscript>
                <template />
                <noscript>
                    &lt;div class="cyrcle-center"&gt; &lt;div class="radial-cyrcle"&gt;
                    &lt;/div&gt; &lt;/div&gt;
                </noscript>
            </div>
            <template />
        </div>
    )
}
