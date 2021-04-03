import React from 'react';
import PropTypes from 'prop-types';
import './css/MovieDetail.css';

function MovieDetail({ year, title, summary, poster, genres }) {
  return (
    <div className="movie_detail">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h2 className="movie_detail_title">{title}</h2>
        <h5 className="movie_detail_year">{year}</h5>
        <ul className="movie_detail_genres">
          {genres.map((genre, index) => (
            <li key={index} className="detail_genres_genre">
              #{genre}
            </li>
          ))}
        </ul>
        <p className="movie_detail_summary">{summary}</p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
