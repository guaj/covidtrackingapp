import "./sidebar.css";
import {
  Home  , Visibility ,Person,MenuBook,Mail, Message,  DynamicFeed, Timeline
} from "@material-ui/icons";

//  Left sidebar for different sub menus of the menu. We can easily add more.
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
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
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Patients
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
                           <DynamicFeed  className="sidebarIcon" />
                           Feedback
                         </li>


          </ul>

        </div>
      </div>
    </div>
  );
}