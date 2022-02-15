import NavbarDashboardPro from '../Navbar/NavbarDashboardPro';
import Sidebar from './Sidebar';
import DashboardPro from './DashboardPro';
import "./RunDashPro.css"

//  Used to show the sidebar and Dashboard with the FaceInfo and Chart
export default function runDashPro() {
  return (
    <div>

      <NavbarDashboardPro/>
        <h1 className="pageHeader">Dashboard</h1>
    <div className="container">
      {/*  <Sidebar/>   To be removed*/}
        <DashboardPro/>
    </div>
    </div>
  );
}
