import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import ViewDreams from './viewDreams';
import CreateDreams from './createDreams';
// import './MainNav.css';

export function MainApp() {
  return (
    <div className="container">
      <Header />
      <div className="navStuff">
        <Routes>
          <Route path="/" element={<Navigate to="dreams" replace />} />
          <Route path="dreams" element={<ViewDreams />} />
          <Route path="newDream" element={<CreateDreams />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainApp;
