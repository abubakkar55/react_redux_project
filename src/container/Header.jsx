import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="w-full top-0 left-0  bg-white fixed shadow">
            <div className="flex items-center justify-between h-20 container mx-auto px-6">
                <span className="text-3xl font-semibold">Redux </span>
                <ul className="flex items-center gap-10 font-bold">
                    <li><NavLink to=""> Home </NavLink> </li>
                    <li><NavLink to="/products"> products </NavLink> </li>
                    <li><NavLink to="contact"> Contact </NavLink> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
