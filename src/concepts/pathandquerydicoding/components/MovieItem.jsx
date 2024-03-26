import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// Tugas 1: Menambah Link agar Judul bisa membuka detail Movie sesuai id

function MovieItem({ id, title, backdropPath, overview }) {
  return (
    <article>
      <img src={backdropPath} alt={title} />
      {/* <h3>{title}</h3> */}
      <h3>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
      <p>{overview}</p>
    </article>
  )
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backdropPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}

export default MovieItem;