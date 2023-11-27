import React from 'react'
import Logo from '../../assets/Logo.png'
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <img
                        src={Logo}
                        alt=""
                    />
                </li>
                <li>
                    <NavLink>O нас</NavLink>
                    <NavLink>Услуги</NavLink>
                    <NavLink>Как купить</NavLink>
                    <NavLink>Преимущества</NavLink>
                    <NavLink>Отзывы</NavLink>
                    <NavLink>Контакты</NavLink>
                </li>
                <li>
                    <FaTelegram />
                    <IoLogoWhatsapp />
                    <FaYoutube />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
