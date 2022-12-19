import "bootstrap/dist/css/bootstrap.min.css";
import BasePage from "./pages/BasePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import routes from "./routing/movieRoutesData";
import { nowPlaying } from "./routing/movieRoutesData";
import { NavigationContextProvider } from "./store/NavigationContext";
import MoviesPage from "./pages/MoviesPage";

/**
 * Top level app component
 */

function App() {
  return (
    <NavigationContextProvider>
      <BrowserRouter>
        <BasePage>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.pageRoute}
                path={route.pageRoute}
                element={
                  <MoviesPage
                    pageRoute={route.pageRoute}
                    pageTitle={route.pageTitle}
                  />
                }
              />
            ))}
            <Route path="*" element={<Navigate to={nowPlaying.pageRoute} />} />
          </Routes>
        </BasePage>
      </BrowserRouter>
    </NavigationContextProvider>
  );
}

export default App;
