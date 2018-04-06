import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onEnterPress(event) {
    if(event.key == 'Enter'){
      this.props.onSearchVideo(this.state.term);
    }
  }
    
  render() {
    return (
      <div className="search-bar"> 
        <input 
          onChange={(event) => this.setState({term: event.target.value})}
          onKeyPress = {(event) => this.onEnterPress(event)}
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