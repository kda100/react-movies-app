import NavBar from "../components/base/NavBar";
import Footer from "../components/base/Footer";
import { Fragment } from "react";

/**
 * Wrapper for all pages
 */

function BasePage(props) {
  return (
    <Fragment>
      <NavBar />
      <main className="container">{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default BasePage;
