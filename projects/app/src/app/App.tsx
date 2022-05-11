import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import MainLayout from '../common/components/templates/Layout';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
