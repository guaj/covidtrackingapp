import React, { Component } from "react";
import { Menu } from "./Menu"
import "./Navbar.css"

class Navbar extends Component{
    render(){
      return(
        <nav className="navbarItems">
          <h1 className="navbarLogo"> React<i className="fab fa-react"></i></h1>
          <div className="menuIcon">

          </div>
          <ul>
            {Menu.map((menu, index) => {
              return(
                <li key={index}>
                  <a className={menu.cName} href={menu.url} >
                    {menu.title}
                  </a>
                </li>
              )       
            })}
          </ul>
        </nav>
      )
    }
}

export default Navbar