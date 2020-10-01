import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap-social/bootstrap-social.css';

import Main from './components/Main'
function App() {
  return (
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  );
}

export default App;
