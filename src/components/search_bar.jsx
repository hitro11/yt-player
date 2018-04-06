import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
    
  render() {
    return (
      <div className="search-bar"> 
        <input 
          onChange={(e) => this.setState({term: e.target.value})}
          value={this.state.term}
        />

        <button
          className="btn btn-primary"
          onClick={() => this.props.onSearchVideo(this.state.term)}
        >Search<i className="fas fa-search"></i></button>
    </div>        
        
    ); 
  }

}

export default SearchBar;