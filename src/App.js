import logo from './logo.svg';
import './App.css';
import CountryList from './pages/CountryList';
import Stopwatch from './pages/Stopwatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   
      <BrowserRouter >
      <Routes>
        <Route path="countrylist" element={<CountryList />}/> 
        <Route path="stopwatch" element={<Stopwatch />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
