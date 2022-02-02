import Chart from "./Chart";
import FaceInfo from "./FaceInfo";
import "./dashboardPro.css";
export default function DashboardPro() {
    return (
        <div className="home">
            <FaceInfo/>
            <Chart/>

        </div>
    );
}