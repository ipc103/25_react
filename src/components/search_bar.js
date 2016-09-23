import React from 'react';

class SearchBar extends React.Component {
  // inherits from 'Component'
  constructor(props) {
    super(props) // calling on props of parent
    this.state = {searchTerm: ''};
  }
  render() {
    return(
      <div>
        <h2>"{ this.state.searchTerm }" contains { this.state.searchTerm.length } total characters</h2>
        {/* <form method='get'> */}
          <input value={ this.state.searchTerm } onChange={ (e) => {
              const queryTerm = e.target.value
              this.setState({searchTerm: queryTerm});
              this.props.onInputChange(queryTerm);
            } } />
          {/* <input type='text'></input> */}
          {/* <button type='submit'>Search</button> */}
        {/* </form> */}
      </div>
    )
  }
}
// "new SearchBar()" can then be used

// function SearchBar() {
//   return(
//     <form method='get'>
//       <input type='text'></input>
//       <button type='submit'>Search</button>
//     </form>
//   )
// }

export default SearchBar;
