import { useEffect, useState, useCallback } from "react";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import { getMoviesList } from "../services/moviesApi";
import MoviesList from "../components/movies/MoviesList";
import NavigationContext from "../store/NavigationContext";
import { useContext } from "react";

function MoviesPage(props) {
  const navigationContext = useContext(NavigationContext);
  const [isLoading, setIsLoading] = useState(true);
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      setMoviesList(await getMoviesList(props.pageRoute));
    } catch {
      setError("An Error Has Occurred");
    }
    setIsLoading(false);
  }, [props.pageRoute]);

  useEffect(() => {
    navigationContext.setCurrentRoute(props.pageRoute);
    fetchMovies();
  }, [props.pageRoute, navigationContext, fetchMovies]);

  if (isLoading) {
    return <Loading />;
  }

  if (error != null) {
    return <Error message={error} />;
  }

  console.log(moviesList);

  return (
    <div className="container">
      <h1 className="text-center">{props.pageTitle}</h1>
      <MoviesList moviesList={moviesList} />
    </div>
  );
}

export default MoviesPage;
