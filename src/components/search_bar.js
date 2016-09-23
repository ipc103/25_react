// create a class component for search bar that renders an Input
import React from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {searchTerm: ''};
  }

  render(){
    return(
      <div>
        <h2>{this.state.searchTerm.length }</h2>
        < input value={ this.state.searchTerm } onChange={(e) => {
            const term = e.target.value;
            this.setState({searchTerm: term});
            this.props.onInputChange(term);
          }} />
      </div>
    )
  }

}

export default SearchBar;

// class Component {
//   setState(newState){
//     this.state = Object.assign(oldState, newState);
//     this.render();
//   }
// }


// Render it to the Dom as a part of the App Component

// class Animal
//   def initialize(props)
//     @name = props.name
//   end
// end
//
// class Dog < Animal
//
// end

// Dog.new({name: 'Fido'})

// class Animal(props){
//   constructor(props){
//     this.name = props.name
//   }
// }
//
// class Dog extends Animal{
//
// }
//
// new Dog({name: 'Fido'})
