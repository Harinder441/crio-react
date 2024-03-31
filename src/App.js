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
import XDictionary  from './pages/XDictionary';
import XModal  from './pages/XModal';
import XTable  from './pages/XTable';
import { BrowserRouter, Routes, Route,Link  } from 'react-router-dom';
function App() {
  return (
   
      <BrowserRouter >
       <Navbar />
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
        <Route path="xdictionary" element={<XDictionary />}/> 
        <Route path="xmodal" element={<XModal/>}/> 
        <Route path="xTable" element={<XTable/>}/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
function Navbar() {
  return (
    <nav>
      <ul className='nav'>
        <li><Link to="/countrylist">Country List</Link></li>
        <li><Link to="/stopwatch">Stopwatch</Link></li>
        <li><Link to="/fullnameform">Full Name Form</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/xlogin">XLogin</Link></li>
        <li><Link to="/locationselector">Location Selector</Link></li>
        <li><Link to="/countryListWithFilter">Country List With Filter</Link></li>
        <li><Link to="/CounterClass">Counter Class</Link></li>
        <li><Link to="/pagination">Pagination</Link></li>
        <li><Link to="/weatherApp">Weather App</Link></li>
        <li><Link to="/spellCheckApp">Spell Check App</Link></li>
        <li><Link to="/xdictionary">XDictionary</Link></li>
        <li><Link to="/xmodal">XModal</Link></li>
        <li><Link to="/xTable">XTable</Link></li>
      </ul>
    </nav>
  );
}