import React from 'react';

// import Home from './Components/Home';
import Dashboard from './Pages/Dashboard';
import Analysis from './Pages/Analysis';
import Users from './Pages/Users';
import Creators from './Pages/Creators';
import Payment from './Pages/Payment';
import Settings from './Pages/Settings';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';






function App() {
  return (
<div>
<Router>
      <NavBar />
  {/* <Home /> */}
        
  <div className="grid grid-cols-2">
  <Routes>
    
    <Route path="/Dashboard" element={ <Dashboard />} />
    <Route path="/Analysis" element={  <Analysis />} />
    <Route path="/Users" element={ <Users />} />
    <Route path="/Creators" element={<Creators />} />
    <Route path="/Payment" element={<Payment />} />
    <Route path="/Settings" element={<Settings />} /> 
            
  </Routes>
  </div>

</Router>
</div>
  );
};

export default App;
