import {Link} from "react-router-dom";
import '../styles/App.css'
import '../styles/styles.css'
import logo from './images/logoprzyciete.png'
import './images/logodotla.png'

export default function Navbar () {
    return <nav className='nav'>
        <Link to="/" className="site-title"><img src={logo} alt='logo'></img></Link>
        <ul>
            <li className="active">
                <Link to="/pracownicy">Pracownicy</Link>
            </li>
            <li>
                <Link to="/kontrahenci">Kontrahenci</Link>
            </li>
            <li>
                <Link to="/budowy">Budowy</Link>
            </li>
            <li>
                <Link to="/archiwa">Archiwa</Link>
            </li>
        </ul>
    </nav>
}

