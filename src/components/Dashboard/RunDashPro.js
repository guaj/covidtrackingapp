import NavbarDashboardPro from '../Navbar/oldNavbars/NavbarDashboardPro';
import Sidebar from './Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

//  Used to show the sidebar and Dashboard with the FaceInfo and Chart
export default function runDashPro() {
  return (
    <div>
      <NavbarDashboardPro/>
    <div className="container">
        <Sidebar/>
        <Dashboard/>
    </div>
    </div>
  );
}
