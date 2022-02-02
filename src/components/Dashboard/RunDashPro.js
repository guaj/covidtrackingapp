import Topbar from './Topbar';
import Sidebar from './Sidebar';
import DashboardPro from './DashboardPro';

            <FaceInfo/>
//  Used to show the sidebar and Dashboard with the FaceInfo and Chart
export default function runDashPro() {
  return (
    <div>
      <Topbar/>
    <div className="container">
        <Sidebar/>
        <DashboardPro/>
    </div>
    </div>
  );
}
