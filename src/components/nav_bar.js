import React from 'react';
// const React = require 'react'; (when using Browserify)

// function NavBar() {
// export default function NavBar() {
// export default NavBar = (props) => { // 'default' acts as 'const'
const NavBar = (props) => {
  return(
    <nav>
      {props.title}
    </nav>
  )
}

export default NavBar;

// export NavBar; same as 'export default' when used above
