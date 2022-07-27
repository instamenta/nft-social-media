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
                                        <Link to="https://codepen.io/EneergeticTomy/" className="active">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://codepen.io/TomikaBoy/full/LqMpaE"
                                            className="active1"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://codepen.io/"
                                            className="active2"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://w3schools.com/"
                                            className="active3"
                                        >
                                            Support
                                        </Link>
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
