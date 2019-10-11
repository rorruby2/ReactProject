import React, { Component } from "react";
import Header from './Header'
import SideMenu from './SideMenu';
import { connect } from "react-redux";
import {movieListData} from '../store/action';
import ThreeDotsLoader from '../Shared/ThreeDotsLoader';

class Movie extends Component {

  componentDidMount(){
    this.props.movieList();
  }

  render() {
    return (
      <div id="app">
        <Header history={this.props.history}/>
        <section className="main-content columns is-fullheight">
          <SideMenu history={this.props.history}/>
          <div className="container column is-10">
            {
              this.props.movies && !this.props.loading ?
                <div className="section section_color">
                  <table className="table is-fullwidth is-bordered">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Opening Crawl</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          this.props.movies.map((movie, index) => (
                            <tr key={index}>
                            <td>{movie.title}</td>
                              <td>{movie.director}</td>
                              <td>{movie.producer}</td>
                              <td>{movie.opening_crawl}</td>
                            </tr>
                          ))
                        }
                    </tbody>
                  </table>
                </div>
              :
                <ThreeDotsLoader />
            }
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({movie}) => ({
    movies: movie.movieList,
    loading: movie.loading,
    error: movie.errors
})

const mapDispatchToProps = (dispatch) => {
  return{
    movieList: () => dispatch(movieListData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

// export default Home;
