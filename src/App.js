import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, NavItem, DropdownMenu } from './components/Navbar/Navbar';

import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import AboutKelli from './pages/AboutKelli/AboutKelli';
import AboutPE from './pages/AboutPE/AboutPE';
import Testimonials from './pages/Testimonials/Testimonials';
import Services from './pages/Services/Services';
import Booking from './pages/Booking/Booking';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem text="Home" link="/purpleelephantcareers/home"/>
        <NavItem text="About us" link="#">
          <DropdownMenu/>
        </NavItem>
        <NavItem text="Services" link="/purpleelephantcareers/services"/>
        <NavItem text="Book an Appointment" link="/purpleelephantcareers/book"/>
        <NavItem icon={<HamburgerMenu/>}>
          <DropdownMenu type="2"/>
        </NavItem>
      </Navbar>
      <div className='routes'>
        <Routes>
          <Route path='/purpleelephantcareers' element={ <Homepage /> }/>
          <Route path='/purpleelephantcareers/home' element={ <Homepage /> }/>
          <Route path='/purpleelephantcareers/about' element={ <AboutKelli /> }/>
          <Route path='/purpleelephantcareers/about-pe' element={ <AboutPE />}/>
          <Route path='/purpleelephantcareers/testimonials' element={ <Testimonials /> }/>
          <Route path='/purpleelephantcareers/services' element={ <Services /> }/>
          <Route path='/purpleelephantcareers/book' element={ <Booking /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
