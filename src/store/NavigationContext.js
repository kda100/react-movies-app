import { createContext, useState } from "react";
import { nowPlaying } from "../routing/movieRoutesData";

//creation of navigation context.

const NavigationContext = createContext({
  currentRoute: nowPlaying.pageRoute,
  setCurrentRoute: (pageRoute) => {},
  isCurrentRoute: (pageRoute) => {},
});

/**
 *
 * @param {*} props
 * @returns
 */

export function NavigationContextProvider(props) {
  const [currentRoute, setCurrentRoute] = useState(nowPlaying.pageRoute);

  /**
   * Uses pageRoute as argument to determine if given page route is currently being viewed.
   * @param {string} pageRoute
   * @returns {boolean} whether page is currently on given route.
   */
  function isCurrentRoute(pageRoute) {
    return pageRoute === currentRoute;
  }

  const context = {
    currentRoute,
    setCurrentRoute,
    isCurrentRoute,
  };

  return (
    <NavigationContext.Provider value={context}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
