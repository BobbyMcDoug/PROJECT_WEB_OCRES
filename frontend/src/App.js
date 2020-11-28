import React from 'react';
import './App.css';
import LineChart from './components/LineChart';

const profils = [
  {
    nom: "Milecki",
    prenom: "Jeremy",
    date_naiss: "13 Novembre",
    couleur: "red",
  },
  {
    nom: "Bourgeois",
    prenom: "Antoine",
    date_naiss: "25 Decembre",
    couleur: "blue",
  },
];

function App() {
  return (
    <div className="App">
      <div className='chart'>
        <LineChart />
      </div>
    </div>
  );
}

export default App;
