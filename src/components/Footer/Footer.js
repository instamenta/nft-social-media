import instagram from './instagram.png';
import linkedin from './linkedin.png';
import whatsapp from './whatsapp.png';
import telegram from './telegram.png';
import youtube from './youtube.png';
import twitter from './twitter.png';
import facebook from './facebook.png';

import "./Footer.css"
export const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-socials'>
                <ul className="footer-listing">
                    <li className="footer-list"><a href="https://www.linkedin.com"><img src={linkedin} alt="linkedin" className="social-icon" /></a></li>
                    <li className="footer-list"><a href="https://www.instagram.com"><img src={instagram} alt="instagram" className="social-icon" /></a></li>
                    <li className="footer-list"><a href="https://www.whatsapp.com"><img src={whatsapp} alt="whatsapp" className="social-icon" /></a></li>
                    <li className="footer-list"><a href="https://web.telegram.org"><img src={telegram} alt="telegram" className="social-icon" /></a></li>
                    <li className="footer-list"><a href="https://www.youtube.com"><img src={youtube} alt="youtube" className="social-icon" /></a></li>
                    <li className="footer-list"><a href="https://twitter.com"><img src={twitter} alt="twitter" className="social-icon" /></a></li>
                    <li className="footer-list"><a href="https://www.facebook.com"><img src={facebook} alt="facebook" className="social-icon" /></a></li>
                </ul>
            </div>
            <div className='footer-copyright'>
                <span className="footer-span">Copyright &copy; 2022, Jan Milenkov.</span>
            </div>
        </footer>
    )
}