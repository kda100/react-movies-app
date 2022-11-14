import MovieItem from "./MovieItem";

function MoviesList(props) {
  return (
    <div class="row justify-content-center justify-content-md-start">
      {props.moviesList.map((movie) => (
        <MovieItem
          title={movie.title}
          overview={movie.overview}
          posterPath={movie.poster_path}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
}

export default MoviesList;
