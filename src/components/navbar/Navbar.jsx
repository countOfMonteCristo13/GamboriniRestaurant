import React, {useState} from 'react'
import './navbar.css'

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import images from '../../constants/images';

const NavBar = () => {

  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gamboriniLogo} alt='logo'/>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home"></a>Home</li>
        <li className='p__opensans'><a href="#about"></a>About</li>
        <li className='p__opensans'><a href="#menu"></a>Menu</li>
        <li className='p__opensans'><a href="#awards"></a>Awards</li>
        <li className='p__opensans'><a href="#contact"></a>Contact</li>
      </ul>


      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='var(--color-golden)' fontSize={27} onClick={() => setToggleMenu(true)}/>
        {
          toggleMenu &&(
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'> 
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() =>setToggleMenu(false)}/>
              <ul className='app__navbar-smallscreen-links'>
                <li className='p__opensans'><a href="#home"></a>Home</li>
                <li className='p__opensans'><a href="#about"></a>About</li>
                <li className='p__opensans'><a href="#menu"></a>Menu</li>
                <li className='p__opensans'><a href="#awards"></a>Awards</li>
                <li className='p__opensans'><a href="#contact"></a>Contact</li>
              </ul>
            </div>
          )
        }

      </div>
    </nav>
  );
}

export default NavBar;
