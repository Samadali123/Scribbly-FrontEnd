
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout'; // the layout with Navbar & Outlet
import AllNotes from './components/AllNotes';
import Register from './components/Register';
import Login from './components/Login';
import CreateNote from './components/CreateNote';
import UpdateNote from './components/UpdateNote';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/404';
import ProtectedRoute from './utils/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout route with Navbar */}
        <Route path="/" element={<Layout />}>
          {/* Default route, redirect to /dashboard or /allnotes */}
          <Route index element={<Navigate to="/allnotes" replace />} />
          <Route path="allnotes" element={<AllNotes />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="createnote" element={ <ProtectedRoute> <CreateNote /></ProtectedRoute>} />  
          <Route path="updatenote/:id" element={<ProtectedRoute> <UpdateNote /></ProtectedRoute>} />
          <Route path="dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
