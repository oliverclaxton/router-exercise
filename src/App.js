import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/movies/:imdbID" component={MovieDetails} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
