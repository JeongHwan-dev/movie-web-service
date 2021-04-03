import React from 'react';
import MovieDetail from '../components/MovieDetail';

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <>
          <MovieDetail
            key={location.state.id}
            year={location.state.year}
            title={location.state.title}
            summary={location.state.summary}
            poster={location.state.poster}
            genres={location.state.genres}
          />
        </>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
