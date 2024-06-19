import React, { useEffect, useRef } from 'react';

import { useHeader } from './HeaderContext';
import '@/assets/css/components/Header.css'

import Nav from "./Nav";
import logo from '@/assets/imgs/Logo.svg';
import { Link } from "react-router-dom";

export default function Header() {
    const { menuState, setMenuState, MenuState } = useHeader();

    const headerRef = useRef(null);
    let prevScrollpos = window.scrollY;

    // Using useRef for localMenuState: This ensures that the localMenuStateRef persists across renders and always holds the latest menuState value
    const localMenuStateRef = useRef(menuState);

    useEffect(() => {
        localMenuStateRef.current = menuState;
      }, [menuState]);

    const handleScroll = () => {
        // second comparison is to disable hide/show menu behavior past 1000 width
        if (localMenuStateRef.current === MenuState.DEFAULT && document.body.clientWidth < 1000) {
            var currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                // scroll down
               headerRef.current.style.top = "0";
            } else {
                // scroll up
                if( currentScrollPos > 100 ){
                    headerRef.current.style.top = "-100px";
                } else {
                    headerRef.current.style.top = '-' + currentScrollPos + "px";
                }
            }
            prevScrollpos = currentScrollPos;
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleResize = () => {
        localMenuStateRef.current == MenuState.DEFAULT ? setMenuState(MenuState.DEFAULT) : setMenuState(MenuState.OPEN) ;
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);


    return(
        <header ref={headerRef} role="banner">
            <Link to={'/'}><img className="logo" src={logo} /></Link>
            <Nav />
        </header>
    )
}