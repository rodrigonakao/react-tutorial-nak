import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormatNameComp from  './components/FormatNameComp';

function App() {
  return (
    <div className="App">    

      <FormatNameComp carros={{marcas: ['fiat', 'gm']}} user={{firstName: "Rodrigo", lastName: "Nakao"}}/>
    </div>
  );
}

export default App;

