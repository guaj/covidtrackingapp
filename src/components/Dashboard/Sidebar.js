import "./sidebar.css";
import {
  Home, Visibility, Person, MenuBook, Mail, Message, DynamicFeed, Timeline
} from "@material-ui/icons";
import * as React from 'react';
import { Box,List  } from "@material-ui/core";
 
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box>
                <List>
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
           <li className="sidebarListItem "> 

            <Home className="sidebarIcon" />
            Home

           </li> 
          <li className="sidebarListItem ">

            <Timeline className="sidebarIcon" />
            Statistics

          </li>


        </ul>
      </div>
      <div className="sidebarCol">
        <h3 className="sidebarTitle">Patients</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            Patient List
          </li>
          <li className="sidebarListItem ">
            <Visibility className="sidebarIcon" />
            Patient Review
          </li>
          <li className="sidebarListItem ">
            <MenuBook className="sidebarIcon" />
            Reports
          </li>

        </ul>
      </div>
      <div className="sidebarCol">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Mail className="sidebarIcon" />
            Mail
          </li>

          <li className="sidebarListItem ">
            <Message className="sidebarIcon" />
            Messages
          </li>
          <li className="sidebarListItem ">
            <DynamicFeed className="sidebarIcon" />
            Feedback
          </li>


        </ul>

      </div>
    </div>
 </div>
 </List>

 </Box>
  );
}