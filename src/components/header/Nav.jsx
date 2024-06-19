import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { useHeader } from './HeaderContext';

export default function Nav(){
    const { menuState, setMenuState, MenuState } = useHeader();

    const MenuLinksClass = Object.freeze({
        HIDDEN: 'nav__links-hidden',
        VISIBLE: 'nav__links-visible'
    })

    const [menuLinksClass, setMenuLinksClass] = useState(MenuLinksClass.HIDDEN);
    const menuButton = useRef(null);
    const menuLinks = useRef(null);

    const setMenuOpen = () => {
        setMenuState(MenuState.OPEN);
        setMenuLinksClass(MenuLinksClass.VISIBLE);
        menuButton.current.innerText = 'menu_open';
        console.log('setMenuOpen')
    }

    const setMenuDefault = () => {
        setMenuState(MenuState.DEFAULT);
        setMenuLinksClass(MenuLinksClass.HIDDEN);
        menuButton.current.innerText = 'menu';
        console.log('setMenuDefault')
    }

    const toggleMenu = () => {
        if(document.body.clientWidth < 1000) {
            switch(menuState)
            {
                case MenuState.OPEN:
                    setMenuDefault();
                    break;

                default:
                    setMenuOpen();
                    break;
            }
        }
    }

    const toggleScroll = () => {
        if( menuState == MenuState.OPEN )
        {
            let currentScrollPos = window.scrollY;

            window.onscroll = function () {
                window.scrollTo(0, currentScrollPos);
            };
        } else {
            window.onscroll = function () { };
        }
    }

    // enable/disable scroll functionality if menu is open
    useEffect(() => {
      window.addEventListener('scroll', toggleScroll);
      return () => {
        window.removeEventListener('scroll', toggleScroll);
      };
    }, [menuState]);

    useEffect(() => {
        if(document.body.clientWidth > 1000) {
            setMenuLinksClass('');
        }

        // window.addEventListener('resize', handleResize);
        // return () => {
        //   window.removeEventListener('resize', handleResize);
        // };
    }, []);

    return (
        <>
            <nav>
                <span 
                    ref={menuButton} 
                    className="nav__menu-button material-symbols-outlined"
                    onClick={toggleMenu} role="button"  tabIndex="0">
                    menu
                </span>
                <ul ref={menuLinks} className={`nav__links text--lead ${menuLinksClass}`}>
                    <span></span>
                    <li><Link to='/' onClick={toggleMenu} role="button">Home</Link></li>
                    <li className="nav__link-disabled">About</li>
                    <li className="nav__link-disabled">Menu</li>
                    <li><Link to='/reservations' onClick={toggleMenu}>Reservations</Link></li>
                    <li className="nav__link-disabled">Order Online</li>
                    <li className="nav__link-disabled">Login</li>
                    <span></span>
                </ul>
            </nav>
        </>
    )
}