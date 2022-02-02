import './App.css';
import {Route, Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import NavbarHome from './components/Navbar/NavbarHome';
import NavbarPro from './components/Navbar/NavbarPro';
import Home from './components/home';
import HomePro from './components/homePro';
import Profile from './components/Profile';
import ProfilePro from './components/ProfilePro';
import SignUpPatient from './components/SignUpPatient';
import SignUpPro from './components/SignUpPro';
import NavbarRegister from './components/Navbar/NavbarRegister';
import NavbarRegisterPro from './components/Navbar/NavbarRegisterPro';
import Topbar from './components/Dashboard/Topbar';
import Sidebar from './components/Dashboard/Sidebar';
import RunDashPro from './components/Dashboard/RunDashPro';

///* Make sure to update file when adding to App.css!!*/

function App() {
  return (
    <Routes>
      <Route exact path='/' element={[<NavbarHome/>, <Home/>]} />
      <Route path='/professionals' element={[<NavbarPro/>, <HomePro/>]} />
      <Route path='/about' element={[<NavbarRegister/>, <AboutUs/>]} />
      <Route path='/sign-up-patient' element={[<NavbarRegister/>, <SignUpPatient/>]} />
      <Route path='/sign-up-pro' element={[<NavbarRegisterPro/>, <SignUpPro/>]} />
      <Route path='/profile' element={[<NavbarHome/>, <Profile/>]} />
      <Route path='/profile-pro' element={[<NavbarPro/>, <ProfilePro/>]} />
      <Route path='/dashboard' element={[<RunDashPro/>]} />
    </Routes>
  );
}

export default App;
    