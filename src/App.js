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
import DashboardPro from './components/Dashboard/DashboardPro';

function App() {
  return (
    <div>
    <Topbar />
    <div className="container">
        <Sidebar />
        <DashboardPro />
    </div>

</div>
  );
}

export default App;
    