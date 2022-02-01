import "./sidebar.css";
import {
  Home,WorkOutline ,Report  , Visibility ,Person, Equalizer, Message, ManageAccounts,  DynamicFeed, Summarize, Timeline
} from "@material-ui/icons";

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
        <div className="sidebarMenu">
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
              <Equalizer className="sidebarIcon" />
              Reports
            </li>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem ">
              <DynamicFeed  className="sidebarIcon" />
              Feedback
            </li>
             <li className="sidebarListItem ">
               <Message className="sidebarIcon" />
               Messages
             </li>


          </ul>

        </div>
      </div>
    </div>
  );
}