import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { term: "" };
  // }
  handleUpdate = (event) => {
    // this.setState({
    //   term: event.target.value
    // });
    this.props.searchFunction(event.target.value);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('compnoent render');
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}


export default SearchBar;
