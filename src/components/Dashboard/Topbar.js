import React from 'react';
import "./topbar.css"
import { NotificationImportant,Language, Settings } from "@material-ui/icons";


export default function topbar(){
    return(
        <div className='topbar'>
            <div className='topbarWrapper'>
                
                <div className='topLeft'>
                    <span className='logo'>Dr.Anya</span>
                </div>
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
                    <img src='https://i.imgur.com/vmLKF2B.jpg' alt="" className='topAvi'></img>
                </div>
            </div>          
        </div>
    );
    }
    //Adding comment to test commit
    