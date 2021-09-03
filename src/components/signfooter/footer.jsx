import { Link } from "react-router-dom"
import "./footer.css"

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__nav-list">
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">About</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Help Center</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Terms of Service</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Privacy Policy</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Cookie Policy</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Ads info</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Blog</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Status</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Carrres</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Brand Resources</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Advertsing</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Marketing</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Twitter for Business</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Developers</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Directory</Link>
                </li>
                <li className="footer__nav-item">
                    <Link className="footer__nav-link">Settings</Link>
                </li>
                <p className="footer__nav-text">© 2021 Twitter, Inc.</p>
            </ul>
        </footer>
    );
  }
  
  export default Footer;