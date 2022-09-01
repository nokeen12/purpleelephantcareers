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

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem text="Home" link="/home"/>
        <NavItem text="About us" link="#">
          <DropdownMenu/>
        </NavItem>
        <NavItem text="Services" link="/services"/>
        <NavItem text="Book an Appointment" link="/book"/>
      </Navbar>
      <div className='routes'>
        <Routes>
          <Route path='/' element={ <Homepage /> }/>
          <Route path='/home' element={ <Homepage /> }/>
          <Route path='/about' element={ <AboutKelli /> }/>
          <Route path='/about-pe' element={ <AboutPE />}/>
          <Route path='/testimonials' element={ <Testimonials /> }/>
          <Route path='/services' element={ <Services /> }/>
          <Route path='/book' element={ <Booking /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
