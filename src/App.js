import React from 'react';
import './App.css';
import Shows from './components/Shows/Shows'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Shows/>
    </div>
  );
}

export default App;
