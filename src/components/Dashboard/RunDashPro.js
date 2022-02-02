import Topbar from './Topbar';
import Sidebar from './Sidebar';
import DashboardPro from './DashboardPro';

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
