// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Coffees from './Coffees';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/coffees' element={<Coffees />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
