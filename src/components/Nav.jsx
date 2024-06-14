import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="text--card-title color-primary-1">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li className="nav__link-disabled">About</li>
                <li className="nav__link-disabled">Menu</li>
                <li><Link to='/reservations'>Reservations</Link></li>
                <li className="nav__link-disabled">Order Online</li>
                <li className="nav__link-disabled">Login</li>
            </ul>
        </nav>
    )
}