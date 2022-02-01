import React, { Component } from "react";
import { Menu } from "./Menu";
import "./Navbar.css";
import {Button} from "../Button"

class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
      this.setState( {clicked: !this.state.clicked})
    }

    render(){
      return(
        <nav className="navbar-items">
          <h3 className="navbar-logo"> Covid Tracking App
            <i className="fas fa-virus" />
          </h3>
          <div className="menu-icon" onClick={ this.handleClick }>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
          <Button> Sign Up</Button>
        </nav>
      )
    }
}

export default Navbar