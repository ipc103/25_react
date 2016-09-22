import React from 'react';
import ReactDOM from 'react-dom';

import GifItem from './components/gif_item';
import NavBar from './components/nav_bar';
import SearchBar from './components/search_bar';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {gif: null}

    this.loadGif('funny cat')
  }

  loadGif(query){
    const term = query.replace(/ /g, '+');
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`

    fetch(url)
      .then(response => response.json() )
      .then(json => {
        if (json.data[0]) {
          const gif = json.data[0].images.fixed_height.url;
          this.setState({gif: gif});
        }
      })
  }

  render(){
    return (
    <div>
      < NavBar title='Four Oh Fours' url='#'/>
      <div className='container'>
        <div className='col-md-4'>
          <SearchBar onSearch={this.loadGif.bind(this)}/>
        </div>
        <div className='col-md-8'>
          <GifItem url={this.state.gif}/>
        </div>
      </div>
    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
