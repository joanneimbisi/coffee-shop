import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import Coffees from './Coffees';
import CoffeeDetail from './CoffeeDetail';
import NavBar from './NavBar'
import AuthProvider from './contexts/authContext';
import { useEffect, useState } from 'react';
import MyReviews  from './MyReviews';


function App() {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    fetch('/coffees', { 
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => {
        setCoffees(data)
    })       
  }, [])
   
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
                <NavBar />
                <Routes>
                  <Route path='/' exact element={<Home/>} />
                  <Route path='/MyReviews' element={<MyReviews/>}/>
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/coffees' element={<Coffees coffees={coffees} />} />
                  <Route path='/coffees/:id' element={<CoffeeDetail coffees={coffees} setCoffees={setCoffees} />} />
                </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
