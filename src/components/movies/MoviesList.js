import MovieItem from "./MovieItem";

/**
 * Component to display list of Movie Items
 */

function MoviesList(props) {
  return (
    <div className="row justify-content-center justify-content-md-start">
      {props.moviesList.map((movie) => (
        <MovieItem
          key={movie.id}
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
