import './App.css';
import {Route, Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import NavbarHome from './components/Navbar/oldNavbars/NavbarHome';
import NavbarPro from './components/Navbar/oldNavbars/NavbarPro';
import Home from './components/home';
import HomePro from './components/homePro';

import ProfilePro from './components/UserProfile/DoctorProfile/DoctorProfile';
import ProfilePatient from './components/UserProfile/patientProfile/PatientProfile';

import SignUpPatient from './components/SignUpPatient';
import SignUpPro from './components/SignUpPro';
import NavbarRegister from './components/Navbar/oldNavbars/NavbarRegister';
import NavbarRegisterPro from './components/Navbar/oldNavbars/NavbarRegisterPro';
import Dashboard from './components/Dashboard/Dashboard';
import NavbarProfilePatient from './components/Navbar/oldNavbars/NavbarProfilePatient';

import PatientProfileUpdate from './components/UserProfile/patientProfile/PatientProfileUpdate'
import Navbar from './components/Navbar/Navbar'

///* Make sure to update file when adding to App.css!!*/

function App() {
  return (
    <Routes>
      <Route exact path='/' element={[ <Home/>]} />
      <Route path='/professionals' element={[<HomePro/>]} />
      <Route path='/about' element={[<NavbarRegister/>, <AboutUs/>]} />
      <Route path='/sign-up-patient' element={[<NavbarRegister/>, <SignUpPatient/>]} />
      <Route path='/sign-up-pro' element={[<NavbarRegisterPro/>, <SignUpPro/>]} />
      <Route path='/profile-patient' element={[<NavbarProfilePatient/>, <ProfilePatient/>]} />
      <Route path='/profile-pro' element={[<NavbarPro/>, <ProfilePro/>]} />
      <Route path='/dashboard' element={[<Dashboard/>]} />

      <Route path='/patient-profile-edit' element={[<Navbar/>, <PatientProfileUpdate/>]} />

    </Routes>
  );
}

export default App;
    