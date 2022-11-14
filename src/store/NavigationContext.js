import { createContext, useState } from "react";
import { nowPlaying } from "../routing/movieRoutesData";

const NavigationContext = createContext({
  currentRoute: nowPlaying.pageRoute,
  setCurrentRoute: (pageRoute) => {},
  isCurrentRoute: (pageRoute) => {},
});

export function NavigationContextProvider(props) {
  const [currentRoute, setCurrentRoute] = useState(nowPlaying.pageRoute);

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
