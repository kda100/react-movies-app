import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/original";

const multiMovieProperties = [
  "id",
  "overview",
  "poster_path",
  "title",
  "vote_average",
]; //properties to filter when fetching multiple movies

/**
 *
 * @param {Object} movieData
 * @param {Array<string>} selectedProperties
 * @returns {{id: number, overview: string, poster_path: string, title:string, vote_average: number}} movie object
 */
function reduceMovieData(movieData, selectedProperties) {
  return selectedProperties.reduce(function (newMovieData, key) {
    if (key in movieData) {
      if (key === "poster_path") {
        newMovieData[key] = `${baseImageUrl}${movieData[key]}`;
      } else {
        newMovieData[key] = movieData[key];
      }
    }
    return newMovieData;
  }, {});
}

/**
 * Takes in a request and returns a list of movie data objects
 * @param {string} request
 * @returns {Array<{id: number, overview: string, poster_path: string, title:string, vote_average: number}>} list of movie objects
 */
export const getMoviesList = async (request) => {
  const res = await axios.get(
    `${baseUrl}${request}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const moviesList = res.data.results.map((movieData) => {
    return reduceMovieData(movieData, multiMovieProperties);
  });
  return moviesList;
};

// export const getMovie = async (id) => {
//   const res = await axios.get(
//     `${baseUrl}${id}?api_key=${process.env.REACT_APP_API_KEY}`
//   );
//   return reduceMovieData(res.data, singleMovieProperties);
// };
