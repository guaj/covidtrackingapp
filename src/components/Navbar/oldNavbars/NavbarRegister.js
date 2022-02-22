import React, { Component } from "react";
import { MenuRegister } from "./MenuRegister";
import "./Navbar.css";
import {Button} from "../../Button";

class NavbarRegister extends Component{
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
            {MenuRegister.map((menu, index) => {
              return(
                <li key={index}>
                  <a className={menu.cName} href={menu.url} >
                    {menu.title}
                  </a>
                </li>
              )       
            })}
          </ul>
          <Button onClick={event =>  window.location.href='/'}>Log In</Button>
        </nav>
      )
    }
}

export default NavbarRegister