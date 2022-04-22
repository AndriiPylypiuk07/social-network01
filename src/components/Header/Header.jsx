import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJW0KUrh-3T2TBQt94N960-yusz__8TjkA&usqp=CAU' />

        <div className={s.loginBlock}>
            {props.isAuth 
            ?<div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
             : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;