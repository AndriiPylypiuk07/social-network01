import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" style={({isActive}) => ({color: isActive ? 'var(--color-active)': 'white'})}>Profile</NavLink>
            </div>
            <div >
                <NavLink to="/dialogs" style={({isActive}) => ({color: isActive ? 'var(--color-active)': 'white'})}>Messages</NavLink>
            </div>
            <div >
                <NavLink to="/users" style={({isActive}) => ({color: isActive ? 'var(--color-active)': 'white'})}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a href="news">News</a>
            </div>
            <div className={s.item}>
                <a href='music'>Music</a>
            </div>
            <div className={s.item}>
                <a href='settings'>Settings</a>
            </div>
        </nav >
    )
}

export default Navbar;