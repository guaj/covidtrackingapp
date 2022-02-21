import './App.css';
import {Route, Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import NavbarHome from './components/Navbar/NavbarHome';
import NavbarPro from './components/Navbar/NavbarPro';
import Homepage from './components/Homepage';
import Login from './components/professional';
import NavbarRegister from './components/Navbar/NavbarRegister';
import NavbarRegisterPro from './components/Navbar/NavbarRegisterPro';
import Dashboard from './components/Dashboard/Dashboard';
import NavbarProfilePatient from './components/Navbar/NavbarProfilePatient';

import DoctorProfile from './components/UserProfile/DoctorProfile/DoctorProfile';
import PatientProfile from './components/UserProfile/PatientProfile/PatientProfile';
import UsersLogin from './components/Authentification/UserLogin/UserLogin';
import UsersRegistration from './components/Authentification/UserRegistration/UsersRegistration'
import PatientRegistration from './components/Authentification/UserRegistration/PatientRegistration';
import DoctorRegistration from './components/Authentification/UserRegistration/DoctorRegistration'
import OrganizationRegistration from './components/Authentification/UserRegistration/OrganizationRegistration';


///* Make sure to update file when adding to App.css!!*/

function App() {
  return (
    <Routes>

      <Route path='/professionals' element={[<NavbarPro/>, <Login/>]} />
      <Route path='/about' element={[<NavbarRegister/>, <AboutUs/>]} />
      <Route path='/dashboard' element={[<Dashboard/>]} />

      <Route exact path='/' element={[<NavbarHome/>, <Homepage/>]} />
      <Route path='/patient-profile' element={[<NavbarProfilePatient/>, <PatientProfile/>]} />
      <Route path='/doctor-profile' element={[<NavbarPro/>, <DoctorProfile/>]} />
      <Route path='/login' element={[<UsersLogin/>]} />
      <Route path='/user-registration' element={[<UsersRegistration/>]} />
      <Route path='/doctor-registration' element={[<NavbarRegisterPro/>, <DoctorRegistration/>]} />
      <Route path='/patient-registration' element={[<NavbarRegister/>, <PatientRegistration/>]} />
      <Route path='/organization-registration' element={[<NavbarRegisterPro/>, <OrganizationRegistration/>]} />
    </Routes>
  );
}

export default App;
    