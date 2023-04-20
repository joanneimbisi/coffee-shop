import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import Coffees from './Coffees';
import CoffeeDetail from './CoffeeDetail';
import NavBar from './NavBar'
import AuthProvider from './contexts/authContext';


function App() {
  // Problem 1: React app needs current user. React doesnt know about current user
  // when you first visit the site or when you refresh the page.

  // Problem 2: All components needs access to global data. User.
   
  // Option 1: Send down user from top level via props (risk props drilling)
  // Option 2: Use Redux


  // Option 3: Context -Provider is the components that wraps anything that might require data from the context
  // Consumer: How you extract data from the context


    
    
    
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
                <NavBar />
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/coffees' element={<Coffees />} />
                  <Route path='/coffees/:id' element={<CoffeeDetail />} />
                </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
