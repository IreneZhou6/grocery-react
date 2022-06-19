import { BsFillBasketFill, BsList } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import './Navbar.styles.scss';
import { useState } from 'react';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [login, setLogin] = useState(false);

    function handleNav() {
        setNav(!nav);
    }

    function handleLogin() {
        setLogin(!login);
    }

    return (
        <header className="navbar">
            <div className="logo">
                <BsFillBasketFill className='icon' />
                <p>groco</p>
            </div>
            <div className='nav'>
                <ul>
                    <Link to='/' className='nav-link'>home</Link>
                    <Link to='/shop' className='nav-link'>shop</Link>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className='nav-icons'>
                <BsList className='icon mobile' onClick={handleNav} />
                <AiOutlineSearch className='icon' />
                <AiOutlineShoppingCart className='icon' />
                <AiOutlineUser className='icon' onClick={handleLogin} />
            </div>
            <div className={nav ? 'mobile-nav active-mobile' : 'mobile-nav'}>
                <ul>
                    <Link to='/' className='nav-link'>home</Link>
                    <Link to='/shop' className='nav-link'>shop</Link>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className={login ? 'login-form active-login' : 'login-form'}>
                <input type='email' placeholder='enter your email' className='input' />
                <input type='password' placeholder='enter your password' className='input' />
                <div className='remember-me'>
                    <input type='checkbox' id='remember-me' />
                    <label htmlFor='remember-me'>remember me</label>
                </div>
                <button type='submit' className='btn' >LOGIN</button>
            </div>
        </header>
    )
}