import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer/Footer';
import AboutKelli from './pages/AboutKelli';
import AboutPE from './pages/AboutPE';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="App">
      <Navbar />
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
