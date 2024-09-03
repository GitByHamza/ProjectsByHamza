import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
import AdminPanel from './adminPanel';
import CustomerPanel from './customer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/customer" element={<CustomerPanel />} />
      </Routes>
    </Router>
  );
}
export default App;