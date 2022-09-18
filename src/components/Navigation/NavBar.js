import React from 'react';
import styles from './navbar.module.css';
import { FiAperture } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai"
const Navbar = () => {
  return (
    <>
     <nav className={styles.mainNav}>
      {/* logo div */}
      <div className={styles.logo}>
        <FiAperture />
      </div>
      {/* menu div */}
      <div className={styles.menuLink}>
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

      <div className={styles.links}>
        <ul className={styles.linksDesktop}>
          <li>
            <a href="./page"><span>Try Live for free</span></a>
          </li>

          <li>
            <a href="./page">Log in or register</a>
          </li>
        </ul>
      </div>
     </nav>

     <div className={styles.second}>
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
    </ul>

    </div>
    </>
  );
};
  
export default Navbar;