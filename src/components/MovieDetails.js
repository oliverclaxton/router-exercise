import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({
    data: null,
    status: "idle",
  });

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${params.imdbID}&apikey=2a5b9544`
      );
      console.log(response);
      setMovieDetails({ status: "success", data: response.data });
    }

    fetchDetails();
  }, [params.imdbID]);

  console.log("Movie deets", movieDetails);

  console.log("WHAT ARE PARAMS:", params); // -> what data? object, string?
  return (
    <div className="App">
      <header className="App-header">
        <h2>{movieDetails.data?.Title}</h2>
        <img src={movieDetails.data?.Poster} alt="" />
        <p>{movieDetails.data?.Plot}</p>
      </header>
    </div>
  );
};

export default MovieDetails;
