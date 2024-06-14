import { Link } from "react-router-dom";

import logoVertical from '../assets/imgs/logo-vertical.png'

export default function Footer() {
    return (
        <footer>
            <article style={ {justifyContent: 'center'} }>
                <img src={logoVertical} height='350px' />
            </article>

            <article>
                <h1 className='text--section-title '>Little Lemon</h1>

                <section className='text--section-categories'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li className="footer__link-disabled">About</li>
                        <li className="footer__link-disabled">Menu</li>
                        <li><Link to='/reservations'>Reservations</Link></li>
                        <li className="footer__link-disabled">Order Online</li>
                        <li className="footer__link-disabled">Login</li>
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
                        <li><Link to='https://facebook.com' target="_blank">Facebook</Link></li>
                        <li><Link to='https://instagram.com' target="_blank">Instagram</Link></li>
                        <li><Link to='https://x.com' target="_blank">X</Link></li>
                    </ul>
                </section>
            </article>
        </footer>
    )
}