import RouteData from "../utils/RouteData";

export const nowPlaying = new RouteData(
  "/now_playing",
  "Now In Cinema",
  "Now Playing"
);
export const popular = new RouteData(
  "/popular",
  "Current Most Popular",
  "Popular"
);
export const topRated = new RouteData(
  "/top_rated",
  "All Time Top Rated",
  "Top Rated"
);
export const upcoming = new RouteData(
  "/upcoming",
  "Coming Soon...",
  "Upcoming"
);

const routes = [nowPlaying, popular, topRated, upcoming];

export default routes;
