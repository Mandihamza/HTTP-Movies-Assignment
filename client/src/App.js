import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';
import axios from "axios";

const App = props => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const [movies, setMovies] = useState([]);

  const updateMovie = (id, movie) => {
        console.log(props);
    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then(response => {
        setMovies(response.data);
        props.history.push(`/movie-list/${id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />      
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} movies={movies} updateMovie={updateMovie} />
        }}
      />
    </>
  );
};

export default App;
