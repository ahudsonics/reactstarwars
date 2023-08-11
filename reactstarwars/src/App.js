import './App.css';
import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const starshipData = await getAllStarships();
      setStarships(starshipData);
    }
    fetchStarships();
  }, []);

  return (
    <div>
      {starships.map((starship, index) => (
        <StarshipCard key={index} starship={starship} />
      ))}
    </div>
  );
}

export default App;
