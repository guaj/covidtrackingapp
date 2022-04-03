import './App.css';
import {Route, Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import NavbarHome from './components/Navbar/oldNavbars/NavbarHome';
import NavbarPro from './components/Navbar/oldNavbars/NavbarPro';
import NavbarRegister from './components/Navbar/oldNavbars/NavbarRegister';
import Dashboard from './components/Dashboard/Dashboard';
import NavbarProfilePatient from './components/Navbar/oldNavbars/NavbarProfilePatient';

import DoctorProfile from './Services/ProfileUpdateSercices/DoctorProfileUpdate/DoctorProfile';
import PatientProfile from './Services/ProfileUpdateSercices/PatientProfileUpdate/PatientProfile';
import UsersLogin from './components/Authentification/UserLogin/UserLogin';
import UsersRegistration from './components/Authentification/UserRegistration/UsersRegistration'
import PatientRegistration from './components/Authentification/UserRegistration/PatientRegistration';
import DoctorRegistration from './components/Authentification/UserRegistration/DoctorRegistration'
import OrganizationRegistration from './components/Authentification/UserRegistration/OrganizationRegistration';
import UserProfileFacade from "./components/UserProfile/UserProfileFacade";
import TracingForm from './components/ContractTracing/TracingForm';
import OrgsTabs from "./components/Dashboard/HealthOfficialDashboard/HealthOfficialTabs";
import PatientProfileUpdate from './Services/ProfileUpdateSercices/PatientProfileUpdate/PatientProfileUpdate'

import DoctorProfileUpdate from './Services/ProfileUpdateSercices/DoctorProfileUpdate/DoctorProfileUpdate'
import AppointmentScheduler from "./Services/AppointmentService/AppointmentScheduler";

///* Make sure to update file when adding to App.css!!*/
function App() {

        return (
            <Routes>
                    <Route path="/schedule-appointment" element={[<AppointmentScheduler/>]} />
                    <Route path='/about' element={[ <AboutUs/>]} />
                    <Route path='/dashboard' element={[<Dashboard/>]} />
                    <Route path="/profile/:user_email" element={[<UserProfileFacade/>]} />
                    <Route path="/login#redirect" element={[<NavbarHome/>, <UsersLogin/>]} />
                    <Route path="/login" element={[<NavbarHome/>, <UsersLogin/>]} />
                    <Route exact path='/' element={[<NavbarHome/>, <UsersLogin/>]} />
                    <Route path='/patient-profile' element={[<NavbarProfilePatient/>, <PatientProfile/>]} />
                    <Route path='/doctor-profile' element={[<NavbarPro/>, <DoctorProfile/>]} />
                    <Route path='/user-registration' element={[<UsersRegistration/>]} />
                    <Route path='/doctor-registration' element={[<NavbarRegister/>, <DoctorRegistration/>]} />
                    <Route path='/patient-registration' element={[<NavbarRegister/>, <PatientRegistration/>]} />
                    <Route path='/organization-registration' element={[<NavbarRegister/>, <OrganizationRegistration/>]} />
                    <Route path='/patient-profile-edit' element={[<PatientProfileUpdate/>]} />
                    <Route path='/doctor-profile-edit' element={[<DoctorProfileUpdate/>]} />
                    <Route path='/tracing-form' element={[<TracingForm/>]} />
                    <Route path="/tracing-form/:user_email" element={[<TracingForm/>]} />
                    <Route path='/health-tabs' element={[<OrgsTabs/>]} />

            </Routes>
        );

}

export default App;
    