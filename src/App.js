import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer/Footer';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='routes'>
        <Routes>
          <Route path='/' element={ <Homepage /> }/>
          <Route path='/home' element={ <Homepage /> }/>
          <Route path='/about' element={ <About /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
