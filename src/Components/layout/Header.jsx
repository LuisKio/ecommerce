import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
    return (
        <header className='header'>
            <NavLink className='header__pageName' to={'/'}>
                <h1> e-commerce </h1>
            </NavLink>
            <ul className='header__navbar'>

                <NavLink className='header__link' to={'/login'}>
                    <i className='bx bx-user' > </i>
                </NavLink>

                <NavLink className='header__link' to={'/purchases'}>
                    <i className='bx bx-box' ></i>
                </NavLink>

                <NavLink className='header__link' to={'/cart'}>
                    <i className='bx bx-cart' ></i>
                </NavLink>


            </ul>
        </header>
    )
}

export default Header