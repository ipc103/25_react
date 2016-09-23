import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav_bar';
import SearchBar from './components/search_bar';
import Gif from './components/gif';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      gif: "https://media.giphy.com/media/gxjiNJ2XPA8py/giphy.gif"
    }
    this.loadGif = this.loadGif.bind(this);
  }

  loadGif(term){
    const query = term.replace(" ", "+")
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`
    console.log(`Searching for ${term}`)
    // hit the giphy api
    fetch(url).then((response) => {
        return response.json();
      }).then((json) => {
          // look at the JSON that we get back
        const gif = json.data[0];
        const gifUrl = gif.images.fixed_height.url;
        // set the state of our app
        this.setState({gif: gifUrl});
      } )

    //so that the gif property is the URL that we get back
  }

  render(){
    return(
      <div>
        <NavBar title='Four Oh Fours' />
        <SearchBar onInputChange={ this.loadGif }/>
        <Gif src={ this.state.gif }/>
      </div>
    );
  }
}

// App.defaultProps = {
//   linkBody: 'GOOGLE LINK'
// }

ReactDOM.render(<App  />, document.getElementById('container'));

// const el = new SearchBar(props);
// el.render();

// const el = new App(props);
// el.render();
//
//
// class Component {
//   constructor(props){
//     this.props = props
//   }
// }
