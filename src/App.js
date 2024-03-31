import logo from './logo.svg';
import './App.css';
import CountryList from './pages/CountryList';
import Stopwatch from './pages/Stopwatch';
import FullNameForm from './pages/FullNameForm';
import Counter from './pages/Counter';
import Calculator from './pages/Calculator';
import XLogin  from './pages/XLogin';
import LocationSelector  from './pages/LocationSelector';
import CountryListWithFilter  from './pages/CountryListWithFilter';
import CounterClass  from './pages/CounterClass';
import Pagination  from './pages/Pagination';
import WeatherApp  from './pages/WeatherApp';
import SpellCheckApp  from './pages/SpellCheckApp';
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
        <Route path="countryListWithFilter" element={<CountryListWithFilter />}/> 
        <Route path="CounterClass" element={<CounterClass />}/> 
        <Route path="pagination" element={<Pagination />}/> 
        <Route path="weatherApp" element={<WeatherApp />}/> 
        <Route path="spellCheckApp" element={<SpellCheckApp />}/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
