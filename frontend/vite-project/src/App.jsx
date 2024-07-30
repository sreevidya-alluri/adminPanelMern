import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">DASHBOARD</h1>
          <div className="flex gap-4">
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link to="/admin" className="text-white hover:text-gray-400">
              Admin Panel
            </Link>
          </div>
        </nav>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
