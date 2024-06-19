import { Link } from "react-router-dom";

import '@/assets/css/components/Footer.css'

import logoVertical from '@/assets/imgs/logo-vertical.png'

export default function Footer() {
    return (
        <footer role="contentinfo">
            <article className="footer__logo-container">
                <img src={logoVertical} height='350px' />
            </article>

            <article>
                <h1 className='text--section-title '>Little Lemon</h1>

                <section className='text--section-categories'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li className="footer__link-disabled" role="button" aria-label="About">About</li>
                        <li className="footer__link-disabled" role="button" aria-label="Menu">Menu</li>
                        <li><Link to='/reservations' role="button" aria-label="Reservations">Reservations</Link></li>
                        <li className="footer__link-disabled" role="button" aria-label="Order Online">Order Online</li>
                        <li className="footer__link-disabled" role="button" aria-label="Login">Login</li>
                    </ul>
                </section>
            </article>

            <article>
                <h1 className='text--section-title'>Contact</h1>

                <section className='text--section-categories'>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </section>
            </article>

            <article>
                <h1 className='text--section-title'>Social Media</h1>

                <section className='text--section-categories'>
                    <ul>
                        <li><Link to='https://facebook.com' target="_blank" role="button" aria-label="Facebook">Facebook</Link></li>
                        <li><Link to='https://instagram.com' target="_blank" role="button" aria-label="Instagram">Instagram</Link></li>
                        <li><Link to='https://x.com' target="_blank" role="button" aria-label="X">X</Link></li>
                    </ul>
                </section>
            </article>
        </footer>
    )
}