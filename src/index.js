// const React = require('react');

import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav_bar';
import SearchBar from './components/search_bar';
import GifItem from './components/gif_item'
// import {NavBar} from './components/nav_bar';

// const React = {}

// Step 1. npm install
// Step 2. npm run bundle
// npm start (?)

// Let's start from the "top"...

class App extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        gif: 'https://media.giphy.com/media/gxjiNJ2XPA8py/giphy.gif'
      }
      this.loadGif = this.loadGif.bind(this);
    }

    // var loadGif = function(queryTerm) {
    loadGif(queryTerm){
      const slugTerm = queryTerm.replace(" ", "+")
      const url = `http://api.giphy.com/v1/gifs/search?q=${slugTerm}&api_key=dc6zaTOxFJmzC`
      console.log(`Loading a ${queryTerm} GIF...`);
      fetch(url).then((response) => {
          return response.json();
        }).then((json) => {
          const gif = json.data[0];
          const gifUrl = gif.images.fixed_height.url;
          this.setState({gif: gifUrl})
        })
    }
    render() {
    // return(React.createElement('div', {}, React.createElement('p', {}, React.createElement('a', {}))));
    return(
      <div>
        <NavBar title="Four Oh Fours"/> {/* 'title' is the props attribute */}
        <SearchBar onInputChange={ this.loadGif } /> {/* 'onInputChange' is made up (we can use anything) */}
        {/* <GifItem src="https://media.giphy.com/media/9fbYYzdf6BbQA/giphy.gif" /> */}
        <GifItem src={ this.state.gif } />
        {/* <p> */}
          {/* <a href={this.props.url}>{this.props.linkBody}</a> */}
          {/* <a href='http://www.google.com'>GOOGLE</a> */}
        {/* </p> */}
      </div>
    )
  }
}
// <a href={this.props.url}>{this.props.linkBody}</a> for dynamic app

// ReactDOM.render(React.createElement(App), document.getElementById('#container'));
ReactDOM.render(<App />, document.getElementById('container'));
// ReactDOM.render(<App url='http://www.google.com' linkBody='GOOGLE' />, document.getElementById('container'));

// App.defaultProps = {
//   linkBody: 'GOOGLE LINK'
// }
//
// const el = new App(props);
// el.render();
//
// class Component {
//   constructor(props) {
//     this.props = props
//   }
// }
