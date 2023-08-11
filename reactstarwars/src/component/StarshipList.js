import React, { useEffect, useState } from 'react';
import { getAllStarships } from '../services/sw-api';

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
      {/* Render starship cards */}
    </div>
  );
}

export default App;
