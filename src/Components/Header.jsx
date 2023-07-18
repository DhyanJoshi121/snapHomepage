import React, { useState } from 'react'
import arrowDown from '../assets/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg';
import arrowUp from '../assets/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg';
import todo from '../assets/intro-section-with-dropdown-navigation-main/images/icon-todo.svg';
import calender from '../assets/intro-section-with-dropdown-navigation-main/images/icon-calendar.svg';
import reminders from '../assets/intro-section-with-dropdown-navigation-main/images/icon-reminders.svg';
import planning from '../assets/intro-section-with-dropdown-navigation-main/images/icon-planning.svg';

import '../sass/header.scss'
import DropDown from './DropDown';


const Header = () => {
    const [mainNavVis,setMainNavVis] = useState(false);
    const [dropDownF,setDropDownF] = useState(false);
    const [dropDownC,setDropDownC] = useState(false);

  return (
    <>
    <header data-overlay = {mainNavVis}>
        <div className="logoContainer">snap</div>
        <button className='navToggleBtn' onClick={()=>{ setMainNavVis(!mainNavVis);console.log(mainNavVis)}}></button>
        <nav className='mainNav' data-visability={mainNavVis} >
            <ul className="navLinks">
                <li onClick={()=> setDropDownF(!dropDownF)} onBlur={()=> setDropDownF(false)} ><a href="#">Features <img src={arrowDown} alt="ArrowDropDown" />
                <DropDown 
                visable = {dropDownF}
                obj = {{
                    'Todo List' :  todo,
                    'Calendar' : calender,
                    'Reminders' : reminders,
                    'Planning' :planning,
                }}
                />
                </a></li>
                <li onClick={()=> setDropDownC(!dropDownC)} onBlur={()=> setDropDownC(false)} ><a href="#">Company <img src={arrowDown} alt="ArrowDropDown" />
                <DropDown 
                visable = {dropDownC}
                obj = {['History','Our Team','Blog']}
                />
                </a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div className="navBtns">
              <button className="login">Login</button>
              <button className="Register">Register</button>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header