import React,{ useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
const [click,setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Substantive Research <i className='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Reports
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Table' className='nav-links' onClick={closeMobileMenu}>
                            Table
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Settings' className='nav-links' onClick={closeMobileMenu}>
                            Settings
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;