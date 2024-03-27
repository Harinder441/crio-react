import logo from './logo.svg';
import './App.css';
import CountryList from './pages/CountryList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   
      <BrowserRouter >
      <Routes>
        <Route path="countrylist" element={<CountryList />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
