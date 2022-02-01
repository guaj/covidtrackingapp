import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import HomePro from './components/HomePro';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile';
import ProfilePro from './components/ProfilePro';


function App() {
  return (
    <Routes>
      <Route exact path='/' element={[<Navbar/>, <Home/>]} />
      <Route path='/about' element={[<Navbar/>, <AboutUs/>]} />
      <Route path='/professionals' element={[<Navbar/>, <HomePro/>]} />
      <Route path='/profile' element={[<Navbar/>, <Profile/>]} />
      <Route path='/profile-pro' element={[<Navbar/>, <ProfilePro/>]} />
    </Routes>
  );
}

export default App;
  /*<div className='App'>
      <Navbar/>
    </div><Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/pro' element={<HomePro/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/profile-pro' element={<ProfilePro/>} />
    </Routes>*/
    