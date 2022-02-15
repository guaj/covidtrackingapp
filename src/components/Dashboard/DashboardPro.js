import Chart from "./Chart";
import FaceInfo from "./FaceInfo";
import "./dashboardPro.css";
import PatientListTable from "./DoctorDashboard/PatientList/patientListTable"
export default function DashboardPro() {
    return (
        <div>
            <div className="home" class-="row">
                <FaceInfo/>
            </div>
            <div>

            </div>
                { <Chart/> }

            <div class="container">

                <h2 class="divHeader">My Patient List</h2>
            </div>
            <div>
                <PatientListTable/>
            </div>
        </div>


    );
}