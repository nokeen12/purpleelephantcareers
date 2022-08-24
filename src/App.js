import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='routes'>
        <Routes>
          <Route path='/' element={ <Homepage /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
