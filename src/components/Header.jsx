import Nav from "./Nav";
import logo from '../assets/imgs/Logo.svg';

export default function Header() {
    return(
        <header>
            <img className="logo" src={logo} />
            <Nav />
        </header>
    )
}