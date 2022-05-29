import { BsFillBasketFill, BsList } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

import { Router, Route, Link } from 'react-router';

import './Navbar.styles.scss';
import { useState } from 'react';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    function handleNav() {
        setNav(!nav);
    }

    return (
        <header className="navbar">
            <div className="logo">
                <BsFillBasketFill className='icon' />
                <p>Groco</p>
            </div>
            <div className='nav'>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='nav-icons'>
                <BsList className='icon mobile' onClick={handleNav} />
                <AiOutlineSearch className='icon' />
                <AiOutlineShoppingCart className='icon' />
                <AiOutlineUser className='icon' />
            </div>
            <div className={nav ? 'mobile-nav active' : 'mobile-nav'}>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    )
}