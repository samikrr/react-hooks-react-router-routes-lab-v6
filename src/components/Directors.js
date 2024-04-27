import React from "react";
import { directors } from "../data";

const directorsDetails = directors.map((director) => {
  return (
    <div key={director.id}> 
      <p>{director.name}</p>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li> 
        ))}
      </ul>
    </div>
  );
});

function Directors() {
  return (
    <di>
      <h1>Directors Page</h1>
      {directorsDetails}
    </di>
  );
}

export default Directors;