import React from "react";
import MovieDetail from "../components/MovieDetail";
import { getMovie } from '../utils/data';
import { useParams } from "react-router-dom";

// membuat function wrapper karena useParams tidak bisa digunakan di class
function DetailPageWrapper() {
  const { id } = useParams();

  // karena seluruh nilai yang diambil dari useParams itu bertipe string
  return <DetailPage id={Number(id)}/>
}
class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: getMovie(props.id)
    }
  }

  render() {
    if (this.state.movie === null) {
      return <p>Movie is not found!</p>;
    }

    return (
      <section>
        <MovieDetail {...this.state.movie} />
      </section>
    );
  }
}

// export default DetailPage;
export default DetailPageWrapper;