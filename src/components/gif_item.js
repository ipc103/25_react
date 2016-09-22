import React, {Component} from 'react';

export default function GifItem (props) {

    return (
      <div>
        <img className='center-block' src={props.url} />
      </div>);

}
