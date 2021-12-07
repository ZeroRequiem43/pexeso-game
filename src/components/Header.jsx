import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className="header">
         <div className="header__navbar">
            <nav>
               <div className="nav-wrapper blue darken-3">
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                     <li>
                        <Link to="/">На главную</Link>
                     </li>
                     <li>
                        <Link to="/game">Играть</Link>
                     </li>
                     <li>
                        <Link to="/link3">Link3</Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   )
}

export default Header