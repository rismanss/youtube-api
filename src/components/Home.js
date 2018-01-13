import React from 'react';
import { fetchTube } from '../actions/searchAction';
import { connect } from 'react-redux';

import SearchBar from './Search_Bar';
import List from './List';
import Detail from './Detail';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.search('');
  }

  search(term) {
    this.props.dispatch(fetchTube(term));
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedVideo: nextProps.selectedVideo });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr />
            <h2> Youtube API </h2>
            <SearchBar onSearchTerm={this.search.bind(this)} />
            <hr />
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-8">
            <Detail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <List
              videos={this.props.videos}
              onVideoSelect={selectedVideo => this.onVideoSelect(selectedVideo)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.videos.all,
  selectedVideo: state.videos[0]
});

export default connect(mapStateToProps)(Home);
