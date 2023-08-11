import React, { useState, useEffect } from "react";
import "./App.css";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./component/StarshipCard";

function App() {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchStarships();
  }, []);

  const fetchStarships = async () => {
    const data = await getAllStarships(page);
    setStarships((prevStarships) => [...prevStarships, ...data.results]);
  };

  const loadMoreStarships = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="app">
      <h1>Star Wars Starships</h1>
      <div className="starship-list">
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </div>
      <button className="load-more-button" onClick={loadMoreStarships}>
        Load More Starships
      </button>
    </div>
  );
}

export default App;
