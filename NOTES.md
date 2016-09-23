+ Babel    
  + Most browsers aren't supporting ES6, but we want to write it because it's nice  
  + Babel will transpile it for us
  + Now we can show this to our mom's, who use IE7, and it will still work
+ Webpack
  + Annoying to have to require every file into the index.html
  + Would be nice to require just one file...
  + Point out Webpack - don't have to set it up ourselves, but show them that it's there
  + import/export from different modules
  + saves everything on different modules
  + finds the module, pulls out whatever you're looking for
+ App Component
  + import React from React, React Dom From React DOM
  + import Component
  + class Based Component vs Functional Component
    + Functional component has no "state" - just told what to render
    + Doesn't need to do anything but show up and look pretty
  + jsx
    + creating elements for us in a pretty way
    + show what babel transpiles it to
  + Create a functional component for navbar
    + export default
    + return JSX
    + has access to props
  + Search bar component
    + class based - has state
    + sets an initial state for the search term
    + value of the input is bound to state
    + onChange, updated the state
    + setState - the only way to update state
      + What does this do?
        + sets the state - calls render again
    + Parlor trick, show the h2 that updates with the input
  + fetch()
    + onChange - fire a network request to the giphy API
    + find a URL and pass it into a GifItem component
    + Returns a Promise
      + We can call then on it...
    + Update our state
  + GifItem
    + Have Students build it - functional or class based?
