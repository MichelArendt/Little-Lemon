import Nav from "./Nav";
import logo from '../assets/imgs/Logo.svg';
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <Link to={'/'}><img className="logo" src={logo} /></Link>
            <Nav />
        </header>
    )
}