import NavbarDashboardPro from '../Navbar/NavbarDashboardPro';
import Sidebar from './Sidebar';
import DashboardPro from './DashboardPro';
import Topbar from "./Topbar";

//  Used to show the sidebar and Dashboard with the FaceInfo and Chart
export default function runDashPro() {
  return (
    <div>
      <NavbarDashboardPro/>
    <div className="container">
        <Sidebar/>
        <DashboardPro/>
    </div>
    </div>
  );
}
