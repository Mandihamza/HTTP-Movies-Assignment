import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const initialMovie = {
  id: "",
  title: "",
  director: "",
  metascore: "",
  actor: "",
  stars: ""
};

const UpdateMovie = props => {
  const [movies, setMovies] = useState(initialMovie);

//   useEffect(() => {
//     const editingMovie = props.movies.find(movies => {
//       return movies.id === Number(props.match.params.id);
//     });

//     if (editingMovie) {
//       setMovies(editingMovie);
//     }
//   }, [props.movies, props.match.params]);

  const changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "movie") {
      value = parseInt(value, 0);
    }

    setMovies({
      ...movies,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = Number(props.match.params.id);
    props.updateMovie(id, movies);
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit} className="movie-form">
      <input
          type="number"
          name="id"
          onChange={changeHandler}
          placeholder="0"
          value={movies.id}
          className="movie-form-input"
        />
        <div />
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={movies.title}
          className="movie-form-input"
        />
        <div />

        <input
          type="string"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={movies.director}
          className="movie-form-input"
        />
        <div />

        <input
          type="number"
          name="metascore"
          onChange={changeHandler}
          placeholder="0"
          value={movies.metascore}
          className="movie-form-input"
        />
        <div />

        <input
          type="string"
          name="actor"
          onChange={changeHandler}
          placeholder="Actor"
          value={movies.actor}
          className="movie-form-input"
        />
        <div />

        <input
          type="string"
          name="stars"
          onChange={changeHandler}
          placeholder="Star Name"
          value={movies.stars}
          className="movie-form-input"
        />
        <div />

        <button className="update-button">Update</button>
      </form>
      <MovieList />
    </div>
  );
};

export default UpdateMovie;
