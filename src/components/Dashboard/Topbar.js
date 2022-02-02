import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topRow">
      <div className="topRowWrapper">
        <div className="topLeft">
          <span className="userName">Dr.Anya</span>
        </div>
        <div className="topRight">
          <div className="topRowIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topRowIconContainer">
            <Settings />
          </div>

        </div>
      </div>
    </div>
  );
}