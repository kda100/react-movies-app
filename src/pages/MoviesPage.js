import { useEffect, useState } from "react";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import { getMoviesList } from "../services/moviesApi";
import MoviesList from "../components/movies/MoviesList";
import NavigationContext from "../store/NavigationContext";
import { useContext } from "react";

function MoviesPage(props) {
  const navigationContext = useContext(NavigationContext);
  const [moviesState, setMovieState] = useState({
    isLoading: true,
    moviesList: [],
    error: null,
  });

  useEffect(() => {
    navigationContext.setCurrentRoute(props.pageRoute);
    async function fetchMovies() {
      setMovieState((prevState) => {
        return { ...moviesState, isLoading: true };
      });
      let error = null;
      let moviesList = [];
      try {
        moviesList = await getMoviesList(props.pageRoute);
      } catch {
        error = "An Error Has Occurred";
      }
      setMovieState({ isLoading: false, moviesList: moviesList, error: error });
    }
    fetchMovies();
  }, [props.pageRoute, navigationContext]);

  if (moviesState.isLoading) {
    return <Loading />;
  }

  if (moviesState.error != null) {
    return <Error message={moviesState.error} />;
  }

  console.log(moviesState.moviesList);

  return (
    <div className="container">
      <h1 className="text-center">{props.pageTitle}</h1>
      <MoviesList moviesList={moviesState.moviesList} />
    </div>
  );
}

export default MoviesPage;
