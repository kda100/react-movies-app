import { useEffect, useState, useCallback } from "react";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import { getMoviesList } from "../services/moviesApi";
import MoviesList from "../components/movies/MoviesList";
import NavigationContext from "../store/NavigationContext";
import { useContext } from "react";

/**
 * Component to control state and content of each movies page.
 */

function MoviesPage(props) {
  const navigationContext = useContext(NavigationContext);
  const [isLoading, setIsLoading] = useState(true);
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);

  //function to set movies data in moviesList state
  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      setMoviesList(await getMoviesList(props.pageRoute)); //sets movies data
    } catch {
      setError("An Error Has Occurred"); //sets error
    }
    setIsLoading(false);
  }, [props.pageRoute]);

  useEffect(() => {
    navigationContext.setCurrentRoute(props.pageRoute); //whens pageRoute changes a different movie route is set.
    fetchMovies();
  }, [props.pageRoute, navigationContext, fetchMovies]);

  if (isLoading) {
    return <Loading />;
  }

  if (error != null) {
    return <Error message={error} />;
  }

  return (
    <div className="container">
      <h1 className="text-center">{props.pageTitle}</h1>
      <MoviesList moviesList={moviesList} />
    </div>
  );
}

export default MoviesPage;
