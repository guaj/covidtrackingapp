import './App.css';
import {Route, Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import NavbarHome from './components/Navbar/NavbarHome';
import NavbarPro from './components/Navbar/NavbarPro';
import Home from './components/home';
import HomePro from './components/homePro';
import ProfilePatient from './components/UserProfile/ProfilePatient';
import ProfilePro from './components/UserProfile/ProfilePro';
import SignUpPatient from './components/SignUpPatient';
import SignUpPro from './components/SignUpPro';
import NavbarRegister from './components/Navbar/NavbarRegister';
import NavbarRegisterPro from './components/Navbar/NavbarRegisterPro';
import RunDashPro from './components/Dashboard/RunDashPro';
import NavbarProfilePatient from './components/Navbar/NavbarProfilePatient';

///* Make sure to update file when adding to App.css!!*/

function App() {
  return (
    <Routes>
      <Route exact path='/' element={[<NavbarHome/>, <Home/>]} />
      <Route path='/professionals' element={[<NavbarPro/>, <HomePro/>]} />
      <Route path='/about' element={[<NavbarRegister/>, <AboutUs/>]} />
      <Route path='/sign-up-patient' element={[<NavbarRegister/>, <SignUpPatient/>]} />
      <Route path='/sign-up-pro' element={[<NavbarRegisterPro/>, <SignUpPro/>]} />
      <Route path='/profile-patient' element={[<NavbarProfilePatient/>, <ProfilePatient/>]} />
      <Route path='/profile-pro' element={[<NavbarPro/>, <ProfilePro/>]} />
      <Route path='/dashboard-pro' element={[<RunDashPro/>]} />
    </Routes>
  );
}

export default App;
    