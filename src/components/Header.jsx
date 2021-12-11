import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className="header">
         <div className="header__navbar">
            <nav>
               <div className="nav-wrapper blue darken-3">
                  <ul className="right">
                     <li>
                        <Link to="/">На главную</Link>
                     </li>
                     <li>
                        <Link to="/game">Играть</Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   )
}

export default Header