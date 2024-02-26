import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.scss'
import Movie from './../../../assets/images/Movie.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
            <Link to="/"><img src={Movie} alt='Movie'/></Link>
            </div>
            <nav className='nav'>
               <p><NavLink end style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'black' })} to="/">Catalog </NavLink></p>
                <p><NavLink end style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'black' })} to="/genres">Genres </NavLink></p>
                
                
            </nav>
        </header>
    
    )
}

export default Header