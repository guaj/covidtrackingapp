import React, { Component } from "react";
import {MenuProfilePatient} from "./MenuProfilePatient";
import "./Navbar.css";
import {Button} from "../Button";
import { NotificationImportant,Language, Settings } from "@material-ui/icons";

class NavbarProfilePatient extends Component{
    state = { clicked: false }

    handleClick = () => {
      this.setState( {clicked: !this.state.clicked})
    }

    render(){
      return(
        <nav className="navbar-items-dashboard">

          <div className="menu-icon" onClick={ this.handleClick }>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuProfilePatient.map((menu, index) => {
              return(
                <li key={index}>
                  <a className={menu.cName} href={menu.url} >
                    {menu.title}
                  </a>
                </li>
              )       
            })}
          </ul>
          <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationImportant />
                        <div className='alert-dropdown-content'>
                            <a href='#'>Alert 1</a>
                            <a href='#'>Alert 2</a>
                        </div>  
                        <span className='topIconBadge'></span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='selectLang'>en</span>   
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />   
                    </div>
                    
                </div>
          <Button onClick={event =>  window.location.href='/'}>Log out</Button>
        </nav>
      )
    }
}

export default NavbarProfilePatient