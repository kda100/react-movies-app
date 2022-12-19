import React from "react";
import classes from "./MovieItem.module.css";

/**
 * * component to create each movie item card using bootstrap styling.
 */

function MovieItem(props) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch">
      <div className="card border-secondary shadow p-3 my-2 m-sm-2 bg-body movie-index-card">
        <img
          src={props.posterPath}
          className="card-img-top rounded"
          alt="movie poster"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Rating: {props.rating}
          </h6>
          <p className={classes.pvarchiveText}>{props.overview}</p>
          <button className="btn btn-primary mt-auto">More Info...</button>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
