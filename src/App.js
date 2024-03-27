import logo from './logo.svg';
import './App.css';
import CountryList from './pages/CountryList';
import Stopwatch from './pages/Stopwatch';
import FullNameForm from './pages/FullNameForm';
import Counter from './pages/Counter';
import Calculator from './pages/Calculator';
import XLogin  from './pages/XLogin';
import LocationSelector  from './pages/LocationSelector';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   
      <BrowserRouter >
      <Routes>
        <Route path="countrylist" element={<CountryList />}/> 
        <Route path="stopwatch" element={<Stopwatch />}/> 
        <Route path="fullnameform" element={<FullNameForm />}/> 
        <Route path="counter" element={<Counter />}/> 
        <Route path="calculator" element={<Calculator />}/> 
        <Route path="xlogin" element={<XLogin />}/> 
        <Route path="locationselector" element={<LocationSelector />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
