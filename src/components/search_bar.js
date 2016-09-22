import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {query: ''}
  }

  onChange(e){
    this.props.onSearch(e.target.value);
    this.setState({query: e.target.value});
  }

  render(){
    return(
      <div>
        <input className='form-control' value={this.state.query} onChange={this.onChange.bind(this)} />
      </div>)
  }
}
