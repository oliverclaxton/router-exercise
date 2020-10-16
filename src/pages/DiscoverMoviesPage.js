import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen";

const DiscoverMoviesPage = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState({
    status: "idle",
    data: [],
  });

  const search = async () => {
    // console.log("Todo search movies for :", searchText);

    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=2a5b9544&s=${queryParam}`
    );
    setSearchText("");

    console.log("sucess  searched movies are!!!!", response.data.Search);

    setMovies({ status: "success", data: response.data.Search });
  };

  // console.log("i am the movies state", movies);

  if (movies === null) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Discover Movies Page</h1>
        <div>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={search}>Search</button>
        </div>
        <div>
          {movies.data.map((movie) => {
            return (
              <div>
                <Link className="header__link" to={`/movies/${movie.imdbID}`}>
                  <h4>{movie.Title}</h4>
                </Link>

                <img src={movie.Poster} alt="" />
                <p>Year: {movie.Year}</p>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default DiscoverMoviesPage;
