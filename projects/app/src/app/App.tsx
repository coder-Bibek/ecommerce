import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import MainLayout from '../common/components/templates/Layout';
import Home from '../common/pages/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
