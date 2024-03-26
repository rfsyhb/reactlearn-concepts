import React from "react";
import SearchBar from '../components/SearchBar'
import MovieList from "../components/MovieList";
import { searchMovies } from "../utils/data";
import { useSearchParams } from "react-router-dom";

function SearchPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  // index-0 dari useSearchParams() digunakan untuk mendapatkan nilai dari URL
  const title = searchParams.get('title')

  function changeSearchParams(keyword) {
    // index-1 dari useSearchParams() digunakan untuk merubah URL
    setSearchParams({ title: keyword });
  }

  return <SearchPage onSearch={changeSearchParams} activeKeyword={title}/>
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundMovies: []
    }
  }

  onSearch = (keyword) => {
    this.setState(() => {
      return {
        foundMovies: searchMovies(keyword)
      };
    });

    // dari SearchPageWrapper
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <section>
        <h2>Search Movies</h2>
        <SearchBar search={this.onSearch} defaultKeyword={this.props.activeKeyword} />
        <MovieList movies={this.state.foundMovies} />
      </section>
    );
  }
}

// export default SearchPage;
export default SearchPageWrapper;