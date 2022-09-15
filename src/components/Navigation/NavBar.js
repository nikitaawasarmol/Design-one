import React from 'react';
import "./NavBar.css"
import { FiAperture } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai"
const Navbar = () => {
  return (
    <>
     <nav className='main-nav'>
      {/* logo div */}
      <div className='logo'>
        <FiAperture />
      </div>
      {/* menu div */}
      <div className='menu-link'>
        <ul>
          <li>
            <a href='./live'>Live</a>
          </li>

          <li>
            <a href='./Push'>Push</a>
          </li>

          <li>
            <a href='./Link'>Link</a>
          </li>

          <li>
            <a href='./Shop'>Shop</a>
          </li>

          <li>
            <a href='./Packs'>Packs</a>
          </li>

          <li>
            <a href='./Help'>Help</a>
          </li>

          <li>
            <a href='./More'>
              <span>More <AiOutlinePlus /></span>
              
              </a>
          </li>


        </ul>
      </div>

      {/* login register */}

      <div className='links'>
        <ul className='links-desktop'>
          <li>
            <a href="./page"><span>Try Live for free</span></a>
          </li>

          <li>
            <a href="./page">Log in or register</a>
          </li>
        </ul>
      </div>
     </nav>
    </>
  );
};
  
export default Navbar;