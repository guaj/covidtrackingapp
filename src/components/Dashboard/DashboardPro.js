import Chart from "./Chart";
import FaceInfo from "./FaceInfo";
import "./dashboardPro.css";
export default function DashboardPro() {      //    Dashboard that uses the Faceinfo and Chart items
    return (                                  // Will add PieChart later
        <div className="home">
            <FaceInfo/>
            <Chart/>

        </div>
    );
}