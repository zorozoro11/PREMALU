import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing'; // Import your Landing component
import Home from './pages/Home'; // Import your Home component
import Share from './pages/Share';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const navigate = useNavigate();

setTimeout(() => {
  // navigate('/home');
}, 3000);

  return (
      <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/share/:id" element={<Share />} />
        <Route path="/home/:id" element={<Home />} />
      </Routes>
      <Analytics />
      </>
  );
}

export default App;
